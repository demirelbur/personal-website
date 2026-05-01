export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  body?: string;
  repoUrl?: string;
}

export const posts: Post[] = [
  {
    title: "State Machines for Structured Computation with Pydantic Graph",
    slug: "graph-state-machines-pydantic",
    excerpt:
      "Modeling algorithms as explicit state machines over graphs instead of implicit control flow — using the Collatz sequence as a minimal example with pydantic-graph.",
    date: "2026-04-30",
    readTime: "5 min",
    repoUrl: "https://github.com/demirelbur/graph-state-machines",
    body: `## The Collatz Sequence

The Collatz sequence (or 3n+1 problem) is one of the simplest unsolved problems in mathematics. Given any positive integer n: if n is even, divide by 2; if n is odd, compute 3n + 1. Repeat until you reach 1. The conjecture — unproven since 1937 — states that every positive integer eventually reaches 1.

For example, starting at 7: 7 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1.

The sequence itself isn't complex — but its deterministic branching and stateful nature make it a perfect minimal example for demonstrating structured computation.

![Collatz State Machine](/collatz-state-machine.svg)

## Why a State Machine?

Most of us would write the Collatz sequence as a while-loop:

\`\`\`python
while value != 1:
    if value % 2 == 0:
        value //= 2
    else:
        value = 3 * value + 1
\`\`\`

This works. But it hides the structure of the computation. There are no explicit states, no named transitions, no separation between logic and orchestration. The moment you need to add logging, retries, distributed execution, or conditional branching — the loop becomes a liability.

I wanted to explore a different approach: **representing algorithms as explicit state machines over a graph**, where each step is a node and transitions are first-class citizens.

## Enter Pydantic Graph

\`pydantic-graph\` (part of the Pydantic AI ecosystem) provides a minimal but powerful framework for building graph-based state machines in Python. The key primitives:

- **BaseNode** — a graph node that receives context, mutates state, and returns either the next node or \`End\`
- **GraphRunContext** — carries validated state through execution
- **Graph** — orchestrates async node execution
- **End** — signals termination and wraps the final result

The appeal: you get Pydantic's validation guarantees on every state transition, explicit typing on what each node can transition to, and a clear execution graph you can inspect and test.

## Modeling Collatz as a State Machine

The mapping from automata theory to implementation is direct:

| Automata Concept     | Implementation |
|---------------------|----------------|
| State               | \`State(value, step, history)\` |
| Input               | Current value |
| Transition Function | \`transition(ctx)\` |
| States              | \`OddNode\`, \`EvenNode\` |
| Initial State       | \`StartState\` |
| Accepting State     | \`value == 1\` → \`End(Result)\` |

### StartState

The entry point validates input and selects the initial node based on parity:

\`\`\`python
class StartState(BaseModel):
    value: int = Field(..., ge=1)

    def to_state(self) -> State:
        return State(value=self.value, step=0, history=[self.value])

    def to_node(self) -> OddNode | EvenNode:
        if self.value % 2 == 0:
            return EvenNode()
        return OddNode()
\`\`\`

### Runtime State

The mutable state carried through execution:

\`\`\`python
class State(BaseModel):
    value: int
    step: int = 0
    history: list[int] = Field(default_factory=list)
\`\`\`

### Nodes

Each node is a dataclass inheriting from \`BaseNode[State, None, Result]\`. The \`OddNode\` applies the 3n+1 rule and always transitions:

\`\`\`python
@dataclass
class OddNode(BaseNode[State, None, Result]):
    async def run(self, ctx: GraphRunContext[State, None]) -> EvenNode | OddNode:
        ctx.state.step += 1
        ctx.state.value = 3 * ctx.state.value + 1
        ctx.state.history.append(ctx.state.value)
        return transition(ctx)
\`\`\`

The \`EvenNode\` halves the value and terminates if it reaches 1:

\`\`\`python
@dataclass
class EvenNode(BaseNode[State, None, Result]):
    async def run(self, ctx: GraphRunContext[State, None]) -> EvenNode | OddNode | End[Result]:
        ctx.state.step += 1
        ctx.state.value //= 2
        ctx.state.history.append(ctx.state.value)

        if ctx.state.value == 1:
            return End(Result(
                value=ctx.state.value,
                step=ctx.state.step,
                history=list(ctx.state.history),
            ))
        return transition(ctx)
\`\`\`

### Transition Function

Deterministic routing based on parity:

\`\`\`python
def transition(ctx: GraphRunContext[State, None]) -> EvenNode | OddNode:
    if ctx.state.value % 2 == 0:
        return EvenNode()
    return OddNode()
\`\`\`

### Running the Graph

The \`Graph\` class ties it together. Execution is async-first, with \`run_sync\` as a convenience wrapper:

\`\`\`python
start = StartState(value=71)
collatz_graph = Graph(nodes=[OddNode, EvenNode])
result = collatz_graph.run_sync(start_node=start.to_node(), state=start.to_state())
print(result.output)
\`\`\`

## What I Liked

**Type-safe transitions.** Each node's return type annotation declares exactly which nodes it can transition to. The type checker catches illegal transitions at development time, not runtime.

**Validated state at every step.** Pydantic models enforce constraints on the state throughout execution. If a node produces invalid state, you get a clear validation error — not a silent corruption that surfaces three steps later.

**Separation of concerns.** The node logic (what to compute) is cleanly separated from the graph orchestration (in what order). Adding a new node or changing the transition logic doesn't require restructuring the algorithm.

**Async-first.** Every node is an async function. This makes it trivial to add I/O-bound steps (API calls, database reads) without changing the architecture — which matters when you're building RL training pipelines or network control loops.

## What I'd Watch Out For

**Overhead for simple cases.** For a pure Collatz computation, this is over-engineered. The value emerges when you have heterogeneous steps, external dependencies, or need observability into the execution graph.

**Mutable state pattern.** Nodes mutate \`ctx.state\` directly. This works but makes it harder to reason about state changes in complex graphs. An immutable-state-with-copy pattern would be safer for production systems with many concurrent executions.

**Graph visualization.** \`pydantic-graph\` can generate Mermaid diagrams from the graph structure, which is useful for documentation but doesn't yet support runtime execution tracing.

## Where This Matters

The Collatz sequence is a toy example — deliberately. The pattern scales to:

- **Agentic AI workflows** — where LLM reasoning, tool calls, and verification are discrete states with typed transitions
- **Distributed systems** — where each node can be a microservice and the graph defines the orchestration contract

The core insight: **a while-loop hides the system. A graph reveals it.**`,
  },
  {
    title: "From Intents to Actions: How Agentic AI Transforms Network Operations",
    slug: "agentic-ai-networks",
    excerpt:
      "How we combined LLM reasoning with reinforcement learning to build autonomous systems that translate high-level network intents into real-time control actions.",
    date: "2025-02-10",
    readTime: "10 min",
  },
  {
    title: "Scaling RL Training 20x: Lessons from Distributed Systems at Ericsson",
    slug: "scaling-rl-training",
    excerpt:
      "Designing high-throughput distributed RL architectures with GPU learners, 100+ CPU actors, and multi-node coordination for radio network optimization.",
    date: "2024-06-18",
    readTime: "12 min",
  },
  {
    title: "When AI Has No Time to Think: Deploying Models Under Extreme Latency",
    slug: "ai-extreme-latency",
    excerpt:
      "Policy distillation and model compression techniques for deploying RL agents on baseband hardware with sub-millisecond inference budgets.",
    date: "2024-03-22",
    readTime: "8 min",
  },
];
