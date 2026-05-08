import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/content/projects";

const heroMetrics = [
  { value: "+20%", label: "Throughput gain" },
  { value: "+10%", label: "Spectral efficiency" },
  { value: "<30μs", label: "Baseband inference" },
  { value: "Tier‑1", label: "Operator deployment" },
];

const architectureSteps = [
  "Simulation training",
  "High-capacity RL policy",
  "Policy distillation",
  "Compact inference model",
  "Baseband deployment",
  "Live network validation",
];

const designDecisions = [
  {
    title: "Policy Distillation",
    text: "Compress high-capacity RL policies into compact models that meet strict latency budgets.",
  },
  {
    title: "Simulation-Driven Training",
    text: "Train policies in system-level simulators that approximate real-world radio dynamics.",
  },
  {
    title: "Latency-Constrained Design",
    text: "Prioritize deterministic execution and predictable runtime over model complexity.",
  },
  {
    title: "Closed-Loop Integration",
    text: "Embed inference directly into the link-adaptation control loop.",
  },
  {
    title: "Robustness to Non-Stationarity",
    text: "Handle distribution shifts in dynamic network environments.",
  },
  {
    title: "Stability-Aware Optimization",
    text: "Favor reliable production behavior over aggressive peak-performance optimization.",
  },
];

const deploymentPath = [
  "Train policies in high-fidelity radio simulation",
  "Distill high-capacity policies into compact models",
  "Optimize for deterministic sub-30μs inference",
  "Integrate into the baseband link-adaptation loop",
  "Validate under live non-stationary network conditions",
];

const resultCards = [
  { value: "+20%", label: "Measured in live 5G networks", title: "Throughput" },
  { value: "+10%", label: "Improved radio resource utilization", title: "Spectral efficiency" },
  { value: "<30μs", label: "Inference on baseband hardware", title: "Latency" },
  { value: "Tier‑1", label: "Deployed in production-facing environments", title: "Operators" },
];

const lessonsLearned = [
  { title: "Deployment is the bottleneck", text: "Reliability under real-world constraints dominates performance." },
  { title: "Simulation–reality gap dominates", text: "Strong simulation results do not guarantee production success." },
  { title: "Latency reshapes model design", text: "Sub-30μs constraints require aggressive compression and simplification." },
  { title: "Stability > peak performance", text: "Production favors predictable behavior over aggressive optimization." },
  { title: "System integration defines success", text: "ML performance depends as much on infrastructure as on algorithms." },
];

const myRole = [
  "Architected the research-to-production ML workflow.",
  "Designed the policy distillation and model-refinement path.",
  "Built deployment-oriented training and evaluation pipelines.",
  "Connected simulation-based RL research to production-facing RAN validation.",
  "Worked across ML, baseband constraints, and system integration.",
];

interface ReferenceLink {
  label: string;
  url: string;
  type: "press" | "research";
}

function categorizeLinks(links: { label: string; url: string }[]): ReferenceLink[] {
  return links.map((link) => {
    const isPress =
      link.url.includes("press-releases") ||
      link.url.includes("ericsson.com/en/news") ||
      link.url.includes("techblog.comsoc.org");
    return { ...link, type: isPress ? "press" : "research" };
  });
}

export function LinkAdaptationCaseStudy({ project }: { project: Project }) {
  const tags = ["PyTorch", "GNNs", "Policy Distillation", "Domain Randomization", "Distributed RL", "ONNX"];
  const categorized = project.links ? categorizeLinks(project.links) : [];
  const press = categorized.filter((l) => l.type === "press");
  const research = categorized.filter((l) => l.type === "research");

  return (
    <article className="max-w-3xl">
      {/* Title */}
      <h1 className="text-[36px] md:text-[40px] md:leading-[48px] font-bold tracking-tight">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-text-secondary leading-relaxed">
        Production AI system for real-time 5G link adaptation, deployed under sub-30μs baseband constraints.
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
          Traditional link adaptation in radio access networks relies on heuristic control loops and coarse feedback signals, which struggle under rapidly changing channel conditions and heterogeneous traffic patterns.
        </p>
        <p className="mt-3 text-text-secondary leading-relaxed">
          While reinforcement learning methods demonstrate strong performance in simulation, they rarely transfer to production due to sub-30μs inference latency requirements, non-stationary environments, tight baseband integration, and strict reliability guarantees.
        </p>
        <p className="mt-3 text-text-secondary leading-relaxed font-medium text-text-primary">
          The core challenge is not learning a better policy, but deploying it reliably in real-time network infrastructure.
        </p>
      </section>

      {/* Constraint vs. Solution */}
      <section className="mt-10">
        <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
          Constraint vs. Solution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="px-5 py-4 rounded-[var(--radius-md)] border border-border bg-bg-secondary">
            <p className="text-[10px] font-medium text-text-muted uppercase tracking-widest mb-2">Constraint</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              RL policies can perform well in simulation, but production RAN systems require deterministic, ultra-low-latency, reliable behavior under non-stationary radio conditions.
            </p>
          </div>
          <div className="px-5 py-4 rounded-[var(--radius-md)] border border-accent/20 bg-bg-secondary">
            <p className="text-[10px] font-medium text-accent uppercase tracking-widest mb-2">Solution</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Train expressive policies in high-fidelity simulation, distill them into compact inference-ready models, and validate them inside the live link-adaptation control loop.
            </p>
          </div>
        </div>
      </section>

      {/* Contribution */}
      <section className="mt-10">
        <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-3">
          Contribution
        </h2>
        <p className="text-text-secondary leading-relaxed">
          Designed and deployed an AI-native link adaptation system replacing heuristic control with learned policies under real-time baseband constraints. The system bridges RL research and production through a unified pipeline for training, compression, and deployment — enabling continuous adaptation in live 5G networks.
        </p>
      </section>

      {/* System Architecture */}
      <section className="mt-10">
        <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
          System Architecture
        </h2>
        <div className="rounded-[var(--radius-md)] border border-border bg-bg-secondary p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0">
            {architectureSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-2 md:flex-1">
                <div className="flex items-center justify-center px-3 py-2 rounded-[var(--radius-sm)] border border-border bg-bg-primary md:w-full">
                  <span className="text-xs font-medium text-text-primary text-center">{step}</span>
                </div>
                {i < architectureSteps.length - 1 && (
                  <>
                    <span className="text-accent text-sm md:hidden">→</span>
                    <span className="hidden md:block text-accent text-sm shrink-0 mx-1">→</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm text-text-secondary leading-relaxed">
          RL policies are trained in high-fidelity radio simulators, distilled into compact low-latency models, and integrated into the baseband link-adaptation loop for live validation under non-stationary network conditions.
        </p>
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

      {/* Deployment Path */}
      <section className="mt-10">
        <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
          Deployment Path
        </h2>
        <div className="space-y-3">
          {deploymentPath.map((step, i) => (
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

      {/* Results */}
      <section className="mt-10">
        <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
          Results
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {resultCards.map((r) => (
            <div
              key={r.title}
              className="px-4 py-3.5 rounded-[var(--radius-md)] border border-border bg-bg-secondary"
            >
              <p className="text-lg font-bold text-accent">{r.value}</p>
              <p className="text-xs font-medium text-text-primary mt-1">{r.title}</p>
              <p className="text-[11px] text-text-muted mt-0.5 leading-snug">{r.label}</p>
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
          This system demonstrates that reinforcement learning can operate reliably in real-world communication infrastructure. By replacing static heuristics with adaptive policies, it improves efficiency, responsiveness, and robustness in live networks — enabling AI-native radio systems.
        </p>
      </section>

      {/* Lessons Learned */}
      <section className="mt-10">
        <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
          Lessons Learned
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {lessonsLearned.map((l) => (
            <div
              key={l.title}
              className="px-4 py-3.5 rounded-[var(--radius-md)] border border-border bg-bg-secondary"
            >
              <h3 className="text-sm font-medium text-text-primary mb-1">
                {l.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {l.text}
              </p>
            </div>
          ))}
        </div>
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

      {/* References & Coverage */}
      {(press.length > 0 || research.length > 0) && (
        <section className="mt-10">
          <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
            References & Coverage
          </h2>
          <div className="space-y-4">
            {press.length > 0 && (
              <div>
                <p className="text-[10px] font-medium text-text-muted uppercase tracking-widest mb-2">
                  Press Coverage
                </p>
                <div className="space-y-2">
                  {press.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 rounded-[var(--radius-md)] border border-border bg-bg-secondary hover:border-accent/30 transition-colors duration-[var(--duration-fast)]"
                    >
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {link.label} <span className="text-accent">→</span>
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}
            {research.length > 0 && (
              <div>
                <p className="text-[10px] font-medium text-text-muted uppercase tracking-widest mb-2">
                  Research
                </p>
                <div className="space-y-2">
                  {research.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 rounded-[var(--radius-md)] border border-border bg-bg-secondary hover:border-accent/30 transition-colors duration-[var(--duration-fast)]"
                    >
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {link.label} <span className="text-accent">→</span>
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </article>
  );
}
