"use client";

export function ArchitectureDiagram() {
  return (
    <div className="my-8">
      <h3 className="text-sm font-medium text-text-muted uppercase tracking-widest mb-4">
        Distributed RL Training Architecture
      </h3>
      <div className="rounded-[var(--radius-md)] border border-border bg-bg-secondary p-4 md:p-6 overflow-x-auto">
        <svg
          viewBox="0 0 860 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-w-[640px]"
          role="img"
          aria-label="Distributed RL training architecture: Simulation Groups feed Actors, which store experiences in Sharded Replay Memory, which feeds the GPU Learner"
        >
          <defs>
            <marker id="arr-accent" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <path d="M2,2 L9,5 L2,8" className="stroke-[var(--accent)]" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
            <marker id="arr-muted" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <path d="M2,2 L9,5 L2,8" className="stroke-[var(--text-muted)]" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>

          {/* ═══ NODE 1: SIMULATION GROUPS ═══ */}
          <rect x="20" y="70" width="150" height="160" rx="8" className="stroke-[var(--border-color)] fill-[var(--bg-elevated)]" strokeWidth="1.5" />
          <text x="95" y="95" textAnchor="middle" className="fill-[var(--text-primary)]" fontFamily="var(--font-body)" fontSize="11" fontWeight="600">SIMULATION GROUPS</text>
          <rect x="38" y="108" width="114" height="30" rx="4" className="stroke-[var(--border-color)] fill-[var(--bg-primary)]" strokeWidth="1" />
          <text x="95" y="128" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="10">Sim 1</text>
          <rect x="38" y="146" width="114" height="30" rx="4" className="stroke-[var(--border-color)] fill-[var(--bg-primary)]" strokeWidth="1" />
          <text x="95" y="166" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="10">Sim 2</text>
          <rect x="38" y="184" width="114" height="30" rx="4" className="stroke-[var(--border-color)] fill-[var(--bg-primary)]" strokeWidth="1" />
          <text x="95" y="204" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="10">Sim N</text>

          {/* ═══ NODE 2: ACTORS ═══ */}
          <rect x="240" y="85" width="160" height="130" rx="8" className="stroke-[var(--border-color)] fill-[var(--bg-elevated)]" strokeWidth="1.5" />
          <text x="320" y="110" textAnchor="middle" className="fill-[var(--text-primary)]" fontFamily="var(--font-body)" fontSize="11" fontWeight="600">ACTORS</text>
          <text x="320" y="126" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="9">100+ CPU workers</text>
          <rect x="262" y="138" width="34" height="24" rx="3" className="stroke-[var(--border-color)] fill-[var(--bg-primary)]" strokeWidth="1" />
          <text x="279" y="154" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">CPU</text>
          <rect x="302" y="138" width="34" height="24" rx="3" className="stroke-[var(--border-color)] fill-[var(--bg-primary)]" strokeWidth="1" />
          <text x="319" y="154" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">CPU</text>
          <rect x="342" y="138" width="34" height="24" rx="3" className="stroke-[var(--border-color)] fill-[var(--bg-primary)]" strokeWidth="1" />
          <text x="359" y="154" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">CPU</text>
          <rect x="262" y="168" width="34" height="24" rx="3" className="stroke-[var(--border-color)] fill-[var(--bg-primary)]" strokeWidth="1" />
          <text x="279" y="184" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">CPU</text>
          <rect x="302" y="168" width="34" height="24" rx="3" className="stroke-[var(--border-color)] fill-[var(--bg-primary)]" strokeWidth="1" />
          <text x="319" y="184" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">CPU</text>
          <rect x="342" y="168" width="34" height="24" rx="3" className="stroke-[var(--border-color)] fill-[var(--bg-primary)]" strokeWidth="1" />
          <text x="359" y="184" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">CPU</text>

          {/* ═══ NODE 3: SHARDED REPLAY MEMORY ═══ */}
          <rect x="470" y="95" width="170" height="110" rx="8" className="stroke-[var(--border-color)] fill-[var(--bg-elevated)]" strokeWidth="1.5" />
          <text x="555" y="118" textAnchor="middle" className="fill-[var(--text-primary)]" fontFamily="var(--font-body)" fontSize="11" fontWeight="600">REPLAY MEMORY</text>
          <text x="555" y="134" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="9">sharded</text>
          <rect x="492" y="148" width="36" height="24" rx="3" className="stroke-[var(--border-color)] fill-[var(--bg-primary)]" strokeWidth="1" />
          <text x="510" y="164" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">S1</text>
          <rect x="536" y="148" width="36" height="24" rx="3" className="stroke-[var(--border-color)] fill-[var(--bg-primary)]" strokeWidth="1" />
          <text x="554" y="164" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">S2</text>
          <rect x="580" y="148" width="36" height="24" rx="3" className="stroke-[var(--border-color)] fill-[var(--bg-primary)]" strokeWidth="1" />
          <text x="598" y="164" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">S3</text>
          <text x="555" y="192" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">prioritized sampling</text>

          {/* ═══ NODE 4: GPU LEARNER ═══ */}
          <rect x="710" y="100" width="130" height="100" rx="8" className="stroke-[var(--accent)] fill-[var(--bg-elevated)]" strokeWidth="2" />
          <text x="775" y="125" textAnchor="middle" className="fill-[var(--text-primary)]" fontFamily="var(--font-body)" fontSize="11" fontWeight="600">GPU LEARNER</text>
          <rect x="730" y="140" width="90" height="28" rx="4" className="stroke-[var(--accent)] fill-[var(--accent-soft)]" strokeWidth="1" />
          <text x="775" y="158" textAnchor="middle" className="fill-[var(--accent)]" fontFamily="var(--font-mono)" fontSize="10">policy update</text>
          <text x="775" y="186" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">gradient step</text>

          {/* ═══ FORWARD FLOW (horizontal arrows) ═══ */}

          {/* Sim Groups → Actors */}
          <path d="M170 150 L236 150" className="stroke-[var(--text-muted)]" strokeWidth="1.5" markerEnd="url(#arr-muted)" />
          <text x="203" y="143" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">env data</text>

          {/* Actors → Replay Memory */}
          <path d="M400 150 L466 150" className="stroke-[var(--accent)]" strokeWidth="1.5" markerEnd="url(#arr-accent)" />
          <text x="433" y="143" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">experiences</text>

          {/* Replay Memory → Learner */}
          <path d="M640 150 L706 150" className="stroke-[var(--accent)]" strokeWidth="1.5" markerEnd="url(#arr-accent)" />
          <text x="673" y="143" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">minibatches</text>

          {/* ═══ RETURN FLOW (curved arcs below) ═══ */}

          {/* Learner → Actors: Broadcast weights (deep arc) */}
          <path d="M775 200 C 775 310, 320 310, 320 215" className="stroke-[var(--accent)]" strokeWidth="1.5" markerEnd="url(#arr-accent)" fill="none" />
          <text x="548" y="300" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="9">broadcast model weights</text>

          {/* Learner → Replay Memory: Updated priorities (deep arc, dashed) */}
          <path d="M740 200 C 740 280, 555 280, 555 205" className="stroke-[var(--text-muted)]" strokeWidth="1.2" strokeDasharray="5 3" markerEnd="url(#arr-muted)" fill="none" />
          <text x="648" y="268" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">priorities</text>
        </svg>
      </div>
      <p className="mt-3 text-xs text-text-muted leading-relaxed">
        Actors generate experience from simulation groups, replay memory stores and samples training data, and the learner updates policies that are broadcast back to actors.
      </p>
    </div>
  );
}
