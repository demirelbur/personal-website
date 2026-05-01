export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
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
  metrics?: ProjectMetric[];
  architecture?: string[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "Agentic AI for Autonomous Networks",
    slug: "agentic-ai-networks",
    description:
      "Agentic AI system for autonomous 5G network operations enabling real-time closed-loop decision-making.",
    problem:
      "Network operations required manual intervention for optimization decisions, introducing latency and inconsistency in dynamic 5G environments.",
    solution:
      "Designed and industrialized an agentic system integrating reinforcement learning, Bayesian optimization, and LLM-based reasoning for autonomous closed-loop control.",
    outcome: "Enabled real-time autonomous decision-making in production 5G networks",
    tech: ["Python", "LLMs", "Bayesian Optimization", "RL", "FastAPI"],
    year: 2024,
    featured: true,
  },
  {
    title: "Distributed RL Training System",
    slug: "distributed-rl-training",
    description:
      "High-throughput distributed reinforcement learning system spanning GPU learners, 100+ CPU actors, and multi-node coordination.",
    problem:
      "Training RL agents on radio network simulators was bottlenecked by serial execution, taking weeks for a single experiment cycle.",
    solution:
      "Designed scalable HPC architectures with optimized scheduling, high-throughput data pipelines, and multi-node coordination using Redis, ZeroMQ, and PyTorch RPC.",
    outcome: "Reduced distributed RL training time by 20x",
    tech: ["PyTorch", "Redis", "ZeroMQ", "LSF", "Docker"],
    year: 2023,
    featured: true,
  },
  {
    title: "AI-Native Link Adaptation",
    slug: "ai-native-link-adaptation",
    description:
      "Production-grade AI system for link adaptation in 5G RAN — a 6-year journey from early research to commercial product deployed with global Tier-1 operators.",
    problem:
      "Rule-based link adaptation in 5G RAN relies on hand-tuned heuristics (e.g., OLLA) that cannot exploit correlated fading in massive MIMO, generalize across heterogeneous deployments, or adapt to rapid channel state changes. Policies trained with RL overfit to narrow training conditions and degrade in unseen scenarios. Meanwhile, baseband hardware imposes sub-100μs inference and <1 MB model size constraints — making large generalizable models impractical to deploy directly.",
    solution:
      "Led early research starting in 2021 and drove the transition from prototype to product alongside interdisciplinary colleagues across radio, systems, and silicon teams. Developed a generalization-centered RL framework using graph attention networks for robust state encoding, domain randomization for training breadth, and distributed actor architectures aligned with O-RAN principles. Applied policy distillation to compress large teacher models into compact students that fit within baseband hardware constraints while preserving generalization across diverse radio conditions.",
    outcome: "Up to 20% throughput increase and 10% spectral efficiency gain in production 5G RAN. Bell Canada became the first operator globally to field-test the technology (2025). AT&T demonstrated portability on Cloud RAN with Intel Xeon 6 SoC at MWC 2026. The product is now part of Ericsson's commercial 5G Advanced portfolio.",
    tech: ["PyTorch", "Graph Neural Networks", "Policy Distillation", "Domain Randomization", "Distributed RL", "HPC"],
    year: 2023,
    featured: true,
    flagship: true,
    metrics: [
      { value: "20%", label: "Throughput Gain" },
      { value: "<100μs", label: "Inference Latency" },
      { value: "2", label: "Tier-1 Operators" },
    ],
    architecture: ["Domain Randomization", "Graph Attention Networks", "Policy Distillation", "Baseband Deployment"],
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
    title: "PyTorch RL Library",
    slug: "pytorch-rl-library",
    description:
      "Internal PyTorch-native reinforcement learning library integrating multiple simulators and standardizing training workflows.",
    problem:
      "Teams used fragmented RL implementations with inconsistent interfaces, making reproducibility and collaboration difficult.",
    solution:
      "Built a unified PyTorch-native library with standardized APIs, multiple simulator integrations, and streamlined training workflows.",
    outcome: "Adopted by ~100 engineers and researchers across teams",
    tech: ["Python", "PyTorch", "NumPy", "GitLab CI/CD"],
    year: 2023,
    featured: false,
  },
  {
    title: "Agentic Product Recommendation System",
    slug: "agentic-recommendation",
    description:
      "Conversational recommendation system combining multi-agent LLM pipelines with hybrid retrieval for e-commerce product discovery.",
    problem:
      "Users couldn't express qualitative intent (taste, style, pairing) through traditional keyword or filter-based product search.",
    solution:
      "Combined structured SQL filtering with semantic vector search (ChromaDB + sentence-transformers), with schema-validated outputs and contradiction detection to prevent hallucination.",
    outcome: "Reliable conversational product discovery with zero hallucinated attributes",
    tech: ["Python", "FastAPI", "ChromaDB", "Pydantic", "RAG"],
    year: 2024,
    featured: false,
  },
];
