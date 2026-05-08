export interface ProjectCardMetric {
  label: "Constraint" | "System" | "Impact";
  value: string;
}

export interface ProjectCardDetail {
  label: "What I built" | "Why it mattered" | "My role";
  text: string;
}

export interface ProjectCardData {
  category: string;
  filterCategory: string;
  title: string;
  subtitle: string;
  metrics: ProjectCardMetric[];
  details: ProjectCardDetail[];
  stack: string[];
  href: string;
}

export const projectCards: ProjectCardData[] = [
  {
    category: "PROJECT / TELECOM AI",
    filterCategory: "Telecom AI",
    title: "AI-Native Link Adaptation",
    subtitle:
      "Production AI system for real-time 5G link adaptation, deployed under sub-30µs baseband constraints.",
    metrics: [
      { label: "Constraint", value: "sub-30µs baseband inference" },
      { label: "System", value: "Distributed RL + Distillation" },
      {
        label: "Impact",
        value:
          "+20% throughput\n+10% spectral efficiency\nTier‑1 operator deployment",
      },
    ],
    details: [
      {
        label: "What I built",
        text: "Compact inference-ready policies, training pipelines, and evaluation workflows for deployment-oriented RAN optimization.",
      },
      {
        label: "Why it mattered",
        text: "Moved AI-native link adaptation from research prototype to operator-deployed RAN optimization, improving throughput and spectral efficiency under live network constraints.",
      },
      {
        label: "My role",
        text: "Architected the research-to-production ML workflow, model refinement path, and production-facing experimentation approach.",
      },
    ],
    stack: [
      "PyTorch",
      "Distributed RL",
      "Domain Randomization",
      "GNNs",
      "Policy Distillation",
      "ONNX",
    ],
    href: "/projects/ai-native-link-adaptation",
  },
  {
    category: "PROJECT / RL SYSTEMS",
    filterCategory: "RL Systems",
    title: "High-Throughput Distributed RL Training System",
    subtitle:
      "Scalable reinforcement learning platform for large-scale experience generation and policy optimization.",
    metrics: [
      { label: "Constraint", value: "100+ actors" },
      { label: "System", value: "Distributed CPU/GPU pipeline" },
      { label: "Impact", value: "20× faster training" },
    ],
    details: [
      {
        label: "What I built",
        text: "A high-throughput distributed RL architecture with replay systems, RPC coordination, and HPC-aware orchestration.",
      },
      {
        label: "Why it mattered",
        text: "Enabled reproducible large-scale experimentation and drastically shortened the path from idea to measurable results.",
      },
      {
        label: "My role",
        text: "Designed the overall architecture, training workflow, and systems-level optimization strategy.",
      },
    ],
    stack: ["PyTorch RPC", "ZeroMQ", "HPC", "Slurm/LSF"],
    href: "/projects/distributed-rl-training",
  },
  {
    category: "PROJECT / AGENTIC AI",
    filterCategory: "Agentic AI",
    title: "Agentic AI for Autonomous Networks",
    subtitle:
      "Intent-driven agentic AI system that translates high-level network intents into optimization templates, preferences, and closed-loop control actions.",
    metrics: [
      { label: "Constraint", value: "Conflicting network intents" },
      { label: "System", value: "Interpreter + optimizer + multi-objective RL controller" },
      { label: "Impact", value: "Intent-to-action automation\nPareto-aware control" },
    ],
    details: [
      {
        label: "What I built",
        text: "Designed an agentic AI workflow that connects language-model intent interpretation, optimization-based preference derivation, and preference-conditioned multi-objective RL control.",
      },
      {
        label: "Why it mattered",
        text: "Moved autonomous network operations beyond heuristic intent handling by enabling networks to interpret, reason over, adapt to, and act on diverse service intents and network conditions.",
      },
      {
        label: "My role",
        text: "Co-designed the intent-to-action architecture, including agent responsibilities, optimization flow, feedback refinement, and the connection between preferences and autonomous control.",
      },
    ],
    stack: [
      "LLMs",
      "Multi-Objective RL",
      "Optimization",
      "Intent-Based Networking",
      "Autonomous Networks",
    ],
    href: "/projects/agentic-ai-networks",
  },
  {
    category: "PROJECT / AGENTIC COMMERCE",
    filterCategory: "Agentic AI",
    title: "Agentic Product Recommendation System",
    subtitle:
      "Conversational product discovery system combining multi-agent LLM workflows with hybrid retrieval.",
    metrics: [
      { label: "Constraint", value: "Grounded product attributes" },
      { label: "System", value: "RAG + structured validation" },
      { label: "Impact", value: "Zero hallucinated attributes" },
    ],
    details: [
      {
        label: "What I built",
        text: "A multi-agent recommendation workflow with retrieval-augmented product discovery and structured validation.",
      },
      {
        label: "Why it mattered",
        text: "Improved reliability of conversational product discovery by grounding recommendations in verified product attributes.",
      },
      {
        label: "My role",
        text: "Designed the agent workflow, retrieval layer, validation logic, and API interface.",
      },
    ],
    stack: [
      "RAG",
      "Pydantic",
      "Pydantic AI",
      "Pydantic Graph",
      "ChromaDB",
      "FastAPI",
    ],
    href: "/projects/agentic-recommendation",
  },
];

export const filterCategories = [
  "All",
  "Telecom AI",
  "RL Systems",
  "Agentic AI",
  "Infrastructure",
] as const;

export type FilterCategory = (typeof filterCategories)[number];
