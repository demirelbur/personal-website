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
    title: "When AI Has No Time to Think: Deploying Models Under Extreme Latency",
    slug: "ai-extreme-latency",
    excerpt:
      "Policy distillation and model compression techniques for deploying RL agents on baseband hardware with sub-millisecond inference budgets.",
    date: "2026-05-04",
    readTime: "7 min",
    body: `## The Problem: Microsecond Decision Windows

Most AI applications enjoy generous latency budgets. A recommendation engine can take hundreds of milliseconds. An LLM chatbot can take seconds. But in a 5G radio access network, the physics of the air interface dictates the clock.

A single TTI (Transmission Time Interval) in 5G NR ranges from 1ms down to 62.5μs depending on the numerology. Within that window, the RAN must make dozens of decisions — channel estimation, link adaptation, scheduling, power control — each with its own slice of the total budget.

The numbers are brutal:

| Function | Mid-band | High-band |
|----------|----------|-----------|
| L1 symbol-related | ~30μs | 4–8μs |
| L1 slot-related | ~400μs | 50–100μs |
| L2 aggregate | 200–300μs | ~50μs |
| **Link adaptation** | **10–30μs** | **~5μs** |

Link adaptation — selecting the right modulation and coding scheme (MCS) for each user — gets 10–30 microseconds in mid-band and just 5 microseconds in high-band. That's not a latency "budget." That's a hard wall.

## Why This Matters for AI

Rule-based link adaptation algorithms are fast but brittle. They rely on CQI reports that are often stale, quantized, or mismatched to actual channel conditions. Reinforcement learning can outperform these heuristics by learning directly from the environment — but RL policies are typically neural networks, and neural networks are not free to evaluate.

The core tension: **model expressiveness versus execution feasibility**. A large, expressive model generalizes better across diverse network conditions but cannot run within the latency budget. A tiny model fits the timing constraints but may lack the capacity to generalize.

This isn't a problem you can solve by buying faster hardware.

## Hardware Won't Save You

RAN baseband platforms are built from CPUs, digital signal processors (DSPs), and application-specific circuits. Some newer platforms include GPU or NPU accelerators — but even with acceleration, the story is more nuanced than "throw a GPU at it."

GPU inference introduces non-negligible overheads: data movement between host and device, accelerator access contention, and kernel invocation latency. For small models (the only ones that fit the timing budget), CPU inference often achieves *lower* latency than GPU inference because it avoids these fixed costs.

![Worst-case inference latency versus model size across compute platforms](/2026-04-ai-models-in-ran_figure-3.svg)

The critical finding from our analysis: **even models with just 0.5–1M parameters exceed the link adaptation latency budget** when measured end-to-end on production hardware. The feasible region is far smaller than most ML practitioners assume — we're talking thousands of parameters, not millions.

## The Distillation Approach

If you can't deploy the model you want, train the model you can deploy to behave like the model you want.

Knowledge distillation (or policy distillation in the RL setting) transfers learned behaviors from a large, expressive *teacher* model to a compact *student* model that meets real-time constraints. The teacher trains offline with no latency pressure. The student inherits the teacher's decision-making capability in a fraction of the parameters.

For link adaptation, this looks like:

1. **Teacher**: An eight-layer MLP (~115k parameters) trained via distributed RL with domain randomization across diverse network conditions
2. **Student**: A three-layer MLP with 32 neurons per layer (~3.5k parameters) — small enough for deterministic sub-30μs inference on baseband hardware

The 30x parameter reduction sounds aggressive, but the key insight is that most of a teacher's capacity encodes the training distribution, not the decision boundary. A well-distilled student retains the decision-making quality while shedding the representational overhead.

## Two Distillation Strategies

### Single-Teacher Distillation

Train one large teacher that generalizes across all scenarios. Compress it into one student. Simple, but the teacher must already solve the generalization problem — which is itself a hard research challenge.

### Multi-Teacher Distillation

Train multiple specialized teachers, each expert in a specific deployment scenario (e.g., urban macro, rural, high-mobility). Consolidate their knowledge into a single generalist student. The student learns when to apply which expert's strategy without needing explicit scenario detection.

## Latency-Aware Online Distillation

The most interesting contribution is what we call *latency-aware online distillation*. Traditional distillation is a two-phase process: train teacher, then compress. But in a distributed RL system, you can integrate distillation into the training loop itself.

The architecture:

- A **centralized teacher** trains in the cloud with full computational resources
- **Distributed actors** (running on RAN hardware or simulators) generate experience using a periodically-distilled student
- The student is re-distilled at regular intervals as the teacher improves
- Critically, **all online policy evaluation respects the target latency budget** — the student deployed to actors always fits within execution constraints

This ensures that the training data distribution reflects what the actual deployed model will encounter. There's no distribution shift between training and deployment, because the deployment-sized model is generating the data throughout training.

## Results

We evaluated latency-aware distillation on a link adaptation task across three unseen deployment scenarios (different cell configurations, traffic patterns, and mobility profiles):

- **Distilled students (~3.5k params)** closely preserved the teacher's throughput and spectral efficiency across all scenarios
- **Directly-trained small models** (same architecture, trained from scratch without distillation) suffered **10–25% performance loss** compared to the teacher
- The gap widened in high-mobility and heterogeneous traffic conditions — precisely the scenarios where generalization matters most

The distillation overhead is negligible at deployment time: you pay the cost once during training (cloud-side), and the deployed student is just a three-layer MLP with fast, deterministic inference.

## Design Principles

From this work, a few principles emerge for deploying AI in latency-critical RAN functions:

**1. Dimension for worst-case, not average-case.** Latency budgets in real-time systems are hard deadlines. A model that meets the average budget but occasionally exceeds it is unusable. Design for the worst-case execution time on the target platform.

**2. Separate learning capacity from deployment capacity.** The model that learns and the model that deploys don't need to be the same model. Use distillation to decouple these concerns.

**3. Validate on hardware early.** End-to-end inference latency on production baseband hardware differs significantly from GPU benchmarks. Profile on the target platform before committing to an architecture.

**4. Integrate constraints into training.** Latency-aware distillation outperforms post-hoc compression because it keeps the training distribution aligned with deployment reality throughout the learning process.

## Implications Beyond RANs

The constraints we face in RAN AI — microsecond budgets, deterministic execution, limited on-chip memory — are an extreme case of a more general trend. As AI moves from cloud to edge to embedded systems, the gap between "what we can train" and "what we can deploy" will only grow.

Policy distillation isn't just a RAN technique. It's a design pattern for any system where inference must be fast, deterministic, and resource-constrained — from autonomous vehicles to real-time trading to robotic control.

The key insight: **feasible deployment depends not on hardware scaling alone, but on principled model dimensioning aligned with worst-case execution timelines and platform characteristics.** The era of "just scale the model" doesn't apply when physics sets the clock.

---

*This post is based on our paper [When AI Has No Time to Think: Inference Under Extreme Latency and Compute Constraints in RANs](https://www.ericsson.com/en/reports-and-papers/ericsson-technology-review/articles/when-ai-has-no-time-to-think), published in Ericsson Technology Review, 2026.*`,
  },
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
];
