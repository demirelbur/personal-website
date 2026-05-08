import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/content/projects";

const heroMetrics = [
  { value: "20×", label: "Training speedup" },
  { value: "100+", label: "Concurrent actors" },
  { value: "Multi-node", label: "CPU/GPU scaling" },
  { value: "Async", label: "Stable training" },
];

const systemFlow = [
  "Simulators generate transitions",
  "Actors stream experience into replay shards",
  "Replay memory samples prioritized minibatches",
  "GPU learner updates the policy",
  "Updated weights are broadcast asynchronously",
  "Actors continue generating experience without blocking",
];

const designDecisions = [
  {
    title: "Fully Decoupled Components",
    text: "Actors, replay, and learner operate as independent processes with no shared state — eliminating synchronization bottlenecks.",
  },
  {
    title: "Sharded Replay Memory",
    text: "Experience is partitioned across shards with per-shard priority queues, sustaining high write throughput and concurrent read access.",
  },
  {
    title: "Asynchronous Weight Broadcast",
    text: "Policy weights are pushed to actors without blocking the training loop. Actors tolerate slightly stale policies.",
  },
  {
    title: "Centralized GPU Learner",
    text: "Single learner processes large minibatches on GPU, amortizing gradient computation across the full experience distribution.",
  },
  {
    title: "Horizontally Scaled Actors",
    text: "100+ CPU workers generate experience in parallel. Actor count scales linearly with available compute.",
  },
];

const results = [
  { value: "20×", label: "Training speedup over single-node baseline" },
  { value: "100+", label: "Actors sustaining continuous experience generation" },
  { value: "Linear", label: "Scaling across multi-node CPU/GPU infrastructure" },
  { value: "Stable", label: "Convergence under fully asynchronous operation" },
];

const myRole = [
  "Designed the distributed actor–replay–learner architecture.",
  "Implemented high-throughput replay and actor coordination.",
  "Integrated PyTorch RPC, Redis, ZeroMQ, and HPC scheduling.",
  "Optimized the system for experiment throughput and stable asynchronous training.",
];

export function DistributedRLCaseStudy({ project }: { project: Project }) {
  const tags = ["PyTorch RPC", "Redis", "ZeroMQ", "Slurm / LSF", "HPC"];

  return (
    <article className="max-w-3xl">
      {/* Title */}
      <h1 className="text-[36px] md:text-[40px] md:leading-[48px] font-bold tracking-tight">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-text-secondary leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Badge key={t} label={t} />
        ))}
      </div>

      {/* Hero metric strip */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {heroMetrics.map((m) => (
          <div
            key={m.label}
            className="px-4 py-3.5 rounded-[var(--radius-md)] border border-border bg-bg-secondary"
          >
            <p className="text-xl font-bold text-accent">{m.value}</p>
            <p className="text-xs text-text-muted mt-1">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Problem */}
      <section className="mt-12">
        <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-3">
          Problem
        </h2>
        <p className="text-text-secondary leading-relaxed">
          Single-node RL training collapses under production workloads. Environment interaction is CPU-bound, policy optimization is GPU-bound, and experience throughput must sustain both without bottlenecking either. Naïve parallelization introduces synchronization overhead that negates the compute gains.
        </p>
        <p className="mt-3 text-text-secondary leading-relaxed">
          The core challenge: decouple experience generation from policy optimization while preserving training stability at scale.
        </p>
      </section>

      {/* Contribution */}
      <section className="mt-10">
        <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-3">
          Contribution
        </h2>
        <p className="text-text-secondary leading-relaxed">
          Designed and implemented a distributed RL system that fully decouples actors, replay memory, and learning into independently scalable components operating across multi-node HPC infrastructure. The system sustains continuous high-throughput training by combining asynchronous execution, sharded prioritized replay, and centralized GPU-based optimization.
        </p>
      </section>

      {/* System Architecture */}
      <section className="mt-10">
        <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-3">
          System Architecture
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          Distributed actors interact with parallel simulation environments and stream transitions into sharded replay memory. A centralized GPU learner performs gradient updates and asynchronously broadcasts updated policy weights to all actors.
        </p>
        <ArchitectureDiagram />
      </section>

      {/* System Flow */}
      <section className="mt-10">
        <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
          System Flow
        </h2>
        <div className="space-y-3">
          {systemFlow.map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-3 rounded-[var(--radius-md)] border border-border bg-bg-secondary"
            >
              <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
                {i + 1}
              </span>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Design Decisions */}
      <section className="mt-10">
        <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
          Design Decisions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {designDecisions.map((d) => (
            <div
              key={d.title}
              className="px-4 py-4 rounded-[var(--radius-md)] border border-border bg-bg-secondary"
            >
              <h3 className="text-sm font-medium text-text-primary mb-1.5">
                {d.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {d.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="mt-10">
        <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
          Results
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {results.map((r) => (
            <div
              key={r.value}
              className="px-4 py-3.5 rounded-[var(--radius-md)] border border-border bg-bg-secondary"
            >
              <p className="text-lg font-bold text-accent">{r.value}</p>
              <p className="text-[11px] text-text-muted mt-1 leading-snug">
                {r.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="mt-10">
        <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-3">
          Impact
        </h2>
        <p className="text-text-secondary leading-relaxed">
          This system reduced experiment cycle time from weeks to hours, making large-scale RL experimentation operationally feasible. By removing infrastructure as the bottleneck, it enabled rapid iteration on policy architectures and training configurations that were previously impractical to evaluate at scale.
        </p>
      </section>

      {/* My Role */}
      <section className="mt-10">
        <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-3">
          My Role
        </h2>
        <ul className="space-y-2">
          {myRole.map((item, i) => (
            <li
              key={i}
              className="text-sm text-text-secondary leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1 before:h-1 before:rounded-full before:bg-accent/60"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* References */}
      {project.links && project.links.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
            References & Coverage
          </h2>
          <ul className="space-y-2">
            {project.links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-accent transition-colors duration-[var(--duration-fast)]"
                >
                  {link.label} <span className="text-accent">→</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
