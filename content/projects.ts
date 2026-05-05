export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectSummaryMetric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  year: number;
  featured: boolean;
  flagship?: boolean;
  productionLine?: string;
  metrics?: ProjectMetric[];
  architecture?: string[];
  links?: ProjectLink[];
  body?: string;
  category?: string;
  summaryMetrics?: ProjectSummaryMetric[];
  takeaway?: string;
}

export const projects: Project[] = [
  {
    title: "Agentic AI for Autonomous Networks",
    slug: "agentic-ai-networks",
    category: "PROJECT / AGENTIC AI",
    description:
      "Agentic AI system for autonomous 5G network operations enabling real-time closed-loop decision-making.",
    problem:
      "Network operations required manual intervention for optimization decisions, introducing latency and inconsistency in dynamic 5G environments.",
    solution:
      "Designed and industrialized an agentic system integrating reinforcement learning, Bayesian optimization, and LLM-based reasoning for autonomous closed-loop control.",
    outcome: "Enabled real-time autonomous decision-making in production 5G networks",
    takeaway: "Closed-loop autonomous decision-making in production 5G networks",
    summaryMetrics: [
      { label: "IMPACT", value: "real-time closed-loop" },
      { label: "STACK", value: "LLMs + RL" },
      { label: "OUTCOME", value: "production 5G ops" },
    ],
    tech: ["Python", "LLMs", "Bayesian Optimization", "RL", "FastAPI"],
    year: 2024,
    featured: true,
  },
  {
    title: "High-Throughput Distributed RL Training System",
    slug: "distributed-rl-training",
    category: "PROJECT / RL SYSTEMS",
    description:
      "High-throughput distributed reinforcement learning system designed to scale experience generation and policy optimization across multi-node CPU/GPU infrastructure.",
    problem:
      "Single-node RL training collapses under production workloads. Environment interaction is CPU-bound, policy optimization is GPU-bound, and experience throughput must sustain both without bottlenecking either.",
    solution:
      "Designed and implemented a distributed RL system that fully decouples actors, replay memory, and learning into independently scalable components operating across multi-node HPC infrastructure.",
    outcome: "20× faster training across 100+ distributed actors.",
    takeaway: "20× faster training across 100+ distributed actors",
    summaryMetrics: [
      { label: "IMPACT", value: "20× faster" },
      { label: "STACK", value: "PyTorch RPC + Redis" },
      { label: "OUTCOME", value: "100+ actors" },
    ],
    tech: ["PyTorch", "PyTorch RPC", "ZeroMQ", "Redis", "LSF", "Slurm", "HPC"],
    year: 2023,
    featured: true,
    links: [
      {
        label: "Generalization in RL for Radio Access Networks (IEEE Trans. ML in Comms & Networking, 2026)",
        url: "https://ieeexplore.ieee.org/document/11358408",
      },
      {
        label: "Generalization in RL for Radio Access Networks (arXiv preprint)",
        url: "https://arxiv.org/abs/2507.06602",
      },
    ],
    body: `## Problem

Single-node RL training collapses under production workloads. Environment interaction is CPU-bound, policy optimization is GPU-bound, and experience throughput must sustain both without bottlenecking either. Naïve parallelization introduces synchronization overhead that negates the compute gains — actors stall waiting for weight updates, learners idle waiting for data, and replay buffers become contention points.

The core challenge: decouple experience generation from policy optimization while preserving training stability at scale.

## Contribution

Designed and implemented a distributed RL system that fully decouples actors, replay memory, and learning into independently scalable components operating across multi-node HPC infrastructure.

The system sustains continuous high-throughput training by combining asynchronous execution, sharded prioritized replay, and centralized GPU-based optimization — eliminating the synchronization barriers that limit conventional distributed RL implementations.

## System Architecture

Distributed actors interact with parallel simulation environments and stream transitions into sharded replay memory. The replay system partitions storage across shards, aggregates experience, and serves prioritized minibatches to the learner.

A centralized GPU learner performs gradient updates on sampled batches and asynchronously broadcasts updated policy weights to all actors. Actors never block on learner updates; the learner never blocks on actor throughput. This decoupling allows both pipelines to saturate their respective compute independently.

## Design Decisions

- **Fully Decoupled Components** — Actors, replay, and learner operate as independent processes with no shared state — eliminating synchronization bottlenecks and enabling per-component scaling.

- **Sharded Replay Memory** — Experience is partitioned across multiple shards with per-shard priority queues, sustaining high write throughput from actors and concurrent read access for minibatch sampling.

- **Asynchronous Weight Broadcast** — Policy weights are pushed to actors without blocking the training loop. Actors tolerate slightly stale policies — a well-understood trade-off in off-policy methods.

- **Centralized GPU Learner** — Single learner processes large minibatches on GPU, amortizing gradient computation and maintaining stable optimization dynamics across the full experience distribution.

- **Horizontally Scaled Actors** — 100+ CPU workers generate experience in parallel, each running independent simulation instances. Actor count scales linearly with available compute.

## Results

- **20× training speedup** over single-node baseline
- **100+ concurrent actors** sustaining continuous experience generation
- **Linear scaling** across multi-node CPU/GPU infrastructure
- **Stable convergence** under fully asynchronous operation

## Impact

This system reduced experiment cycle time from weeks to hours, making large-scale RL experimentation operationally feasible. By removing infrastructure as the bottleneck, it enabled rapid iteration on policy architectures and training configurations that were previously impractical to evaluate at scale.`,
  },
  {
    title: "AI-Native Link Adaptation",
    slug: "ai-native-link-adaptation",
    description:
      "Production AI system for real-time 5G link adaptation under sub-30μs latency constraints.",
    problem:
      "Real-time link adaptation under strict latency and hardware constraints.",
    solution:
      "Designed and deployed an AI-native link adaptation system that replaces heuristic-based control with learned policies operating under real-time baseband constraints.",
    outcome: "Production deployment with measurable throughput gains in live networks.",
    body: `## Problem

Traditional link adaptation in radio access networks relies on heuristic control loops (e.g., OLLA) and coarse feedback signals, which struggle under rapidly changing channel conditions and heterogeneous traffic patterns.

While reinforcement learning methods demonstrate strong performance in simulation, they rarely transfer to production due to stringent system constraints:
- Sub-30μs inference latency requirements
- Non-stationary and partially observable environments
- Tight integration with baseband hardware and protocol stacks
- Strict reliability and stability guarantees in live networks

The core challenge is not learning a better policy, but **deploying it reliably in real-time network infrastructure**.

## Contribution

Designed and deployed an AI-native link adaptation system replacing heuristic control with learned policies under real-time baseband constraints.

The system bridges RL research and production through a unified pipeline for training, compression, and deployment — enabling continuous adaptation in live 5G networks.

## System Architecture

RL policies are trained in high-fidelity simulation environments capturing radio dynamics. Policies are then distilled into compact models optimized for deterministic, low-latency inference. The distilled model is deployed directly in the baseband pipeline, enabling real-time decisions under sub-30μs constraints. Continuous validation in live networks ensures robustness under non-stationary conditions.

## Design Decisions

- **Policy Distillation** — Compress high-capacity RL policies into models meeting strict latency budgets.

- **Simulation-Driven Training** — Train in system-level simulators approximating real-world radio conditions.

- **Latency-Constrained Design** — Prioritize deterministic execution and predictable runtime over model complexity.

- **Closed-Loop Integration** — Embed inference directly into the link adaptation control loop.

- **Robustness to Non-Stationarity** — Handle distribution shifts in dynamic network environments.

- **Stability-Aware Optimization** — Use conservative updates to ensure reliable production behavior.

## Results

- **+20% throughput** in live 5G networks
- **+10% spectral efficiency** in live 5G networks
- **<30μs latency** on baseband hardware
- **Deployed with Tier-1 operators**

## Impact

This system demonstrates that reinforcement learning can operate reliably in real-world communication infrastructure.

By replacing static heuristics with adaptive policies, it improves efficiency, responsiveness, and robustness in live networks — enabling AI-native radio systems.

## Lessons Learned

- **Deployment is the bottleneck** — Reliability under real-world constraints dominates performance.

- **Simulation–reality gap dominates** — Strong simulation results do not guarantee production success.

- **Latency reshapes model design** — Sub-30μs constraints require aggressive compression and simplification.

- **Stability > peak performance** — Production favors predictable behavior over aggressive optimization.

- **System integration defines success** — ML performance depends as much on infrastructure as on algorithms.`,
    category: "PROJECT / TELECOM AI",
    takeaway: "Production deployment with measurable throughput gains in live networks",
    summaryMetrics: [
      { label: "IMPACT", value: "sub-30μs" },
      { label: "STACK", value: "PyTorch + GNNs" },
      { label: "OUTCOME", value: "live network gains" },
    ],
    tech: ["PyTorch", "Graph Neural Networks", "Policy Distillation", "Domain Randomization", "Distributed RL"],
    year: 2023,
    featured: true,
    flagship: true,
    productionLine: "From research to production: deployed in live 5G networks with Tier-1 operators.",
    metrics: [
      { value: "+20%", label: "Throughput Gain" },
      { value: "+10%", label: "Spectral Efficiency" },
      { value: "<30μs", label: "Inference Latency" },
      { value: "Tier-1", label: "Operators Deployed" },
    ],
    architecture: ["Research", "Prototype", "Scalable Real-Time System", "Production Deployment"],
    links: [
      {
        label: "Ericsson & Bell Canada AI-Native Link Adaptation Press Release",
        url: "https://www.ericsson.com/en/press-releases/6/2025/ericsson-and-bell-canada-successfully-test-ai-native-link-adaptation-to-boost-network-speed-and-efficiency",
      },
      {
        label: "AT&T and Ericsson Boost Cloud RAN with AI-Native Software on Intel Xeon 6",
        url: "https://www.ericsson.com/en/news/2026/3/att-and-ericsson-enhance-cloud-ran-performance-with-ai-native-software-on-intel-xeon-6-soc",
      },
      {
        label: "IEEE ComSoc: AT&T and Ericsson Cloud RAN AI-Native Performance",
        url: "https://techblog.comsoc.org/2026/03/03/att-and-ericsson-boost-cloud-ran-performance-with-ai-native-software-running-on-intel-xeon-6-soc/",
      },
      {
        label: "Generalization in RL for Radio Access Networks (IEEE Trans. ML in Comms & Networking, 2026)",
        url: "https://ieeexplore.ieee.org/document/11358408",
      },
      {
        label: "Generalization in RL for Radio Access Networks (arXiv preprint)",
        url: "https://arxiv.org/abs/2507.06602",
      },
      {
        label: "Design Principles for Model Generalization and Scalable AI in RANs (IEEE Comms Magazine, 2025)",
        url: "https://arxiv.org/abs/2306.06251",
      },
      {
        label: "Practical Policy Distillation for RL in RANs (IEEE PIMRC, 2025)",
        url: "https://arxiv.org/abs/2511.06563",
      },
      {
        label: "Approaching AI-Native RANs through Generalization and Scalability (Ericsson Technology Review, 2023)",
        url: "https://ieeexplore.ieee.org/document/10068317",
      },
    ],
  },
  {
    title: "Agentic Product Recommendation System",
    slug: "agentic-recommendation",
    category: "PROJECT / AGENTIC COMMERCE",
    description:
      "Conversational recommendation system combining multi-agent LLM pipelines with hybrid retrieval for e-commerce product discovery.",
    problem:
      "Users couldn't express qualitative intent (taste, style, pairing) through traditional keyword or filter-based product search.",
    solution:
      "Combined structured SQL filtering with semantic vector search (ChromaDB + sentence-transformers), with schema-validated outputs and contradiction detection to prevent hallucination.",
    outcome: "Reliable conversational product discovery with zero hallucinated attributes",
    takeaway: "Reliable conversational product discovery with zero hallucinated attributes",
    summaryMetrics: [
      { label: "IMPACT", value: "reliable discovery" },
      { label: "STACK", value: "FastAPI + RAG" },
      { label: "OUTCOME", value: "zero hallucinations" },
    ],
    tech: ["Python", "FastAPI", "ChromaDB", "Pydantic", "RAG"],
    year: 2024,
    featured: true,
  },
];
