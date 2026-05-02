"use client";

export function LinkAdaptationDiagram() {
  return (
    <div className="my-8">
      <h3 className="text-sm font-medium text-text-muted uppercase tracking-widest mb-4">
        Learning to Deployment Pipeline
      </h3>
      <div className="rounded-[var(--radius-md)] border border-border bg-bg-secondary p-4 md:p-6 overflow-x-auto">
        <svg
          viewBox="0 0 880 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-w-[640px]"
          role="img"
          aria-label="AI-Native Link Adaptation pipeline: Simulation to RL Training to Distillation to Lightweight Model to Baseband Inference to Live 5G Network"
        >
          <defs>
            <marker id="la-arr" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <path d="M2,2 L9,5 L2,8" className="stroke-[var(--accent)]" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>

          {/* Node 1: Simulation */}
          <rect x="10" y="30" width="120" height="60" rx="8" className="stroke-[var(--border-color)] fill-[var(--bg-elevated)]" strokeWidth="1.5" />
          <text x="70" y="57" textAnchor="middle" className="fill-[var(--text-primary)]" fontFamily="var(--font-body)" fontSize="10" fontWeight="600">Simulation</text>
          <text x="70" y="73" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">environment</text>

          {/* Arrow 1→2 */}
          <path d="M130 60 L152 60" className="stroke-[var(--accent)]" strokeWidth="1.5" markerEnd="url(#la-arr)" />

          {/* Node 2: RL Training */}
          <rect x="160" y="30" width="120" height="60" rx="8" className="stroke-[var(--border-color)] fill-[var(--bg-elevated)]" strokeWidth="1.5" />
          <text x="220" y="57" textAnchor="middle" className="fill-[var(--text-primary)]" fontFamily="var(--font-body)" fontSize="10" fontWeight="600">RL Training</text>
          <text x="220" y="73" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">GNN policy</text>

          {/* Arrow 2→3 */}
          <path d="M280 60 L302 60" className="stroke-[var(--accent)]" strokeWidth="1.5" markerEnd="url(#la-arr)" />

          {/* Node 3: Distillation */}
          <rect x="310" y="30" width="120" height="60" rx="8" className="stroke-[var(--border-color)] fill-[var(--bg-elevated)]" strokeWidth="1.5" />
          <text x="370" y="57" textAnchor="middle" className="fill-[var(--text-primary)]" fontFamily="var(--font-body)" fontSize="10" fontWeight="600">Distillation</text>
          <text x="370" y="73" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">compression</text>

          {/* Arrow 3→4 */}
          <path d="M430 60 L452 60" className="stroke-[var(--accent)]" strokeWidth="1.5" markerEnd="url(#la-arr)" />

          {/* Node 4: Lightweight Model */}
          <rect x="460" y="30" width="120" height="60" rx="8" className="stroke-[var(--border-color)] fill-[var(--bg-elevated)]" strokeWidth="1.5" />
          <text x="520" y="57" textAnchor="middle" className="fill-[var(--text-primary)]" fontFamily="var(--font-body)" fontSize="10" fontWeight="600">Compact Model</text>
          <text x="520" y="73" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">&lt;1 MB</text>

          {/* Arrow 4→5 */}
          <path d="M580 60 L602 60" className="stroke-[var(--accent)]" strokeWidth="1.5" markerEnd="url(#la-arr)" />

          {/* Node 5: Baseband Inference */}
          <rect x="610" y="30" width="120" height="60" rx="8" className="stroke-[var(--accent)] fill-[var(--bg-elevated)]" strokeWidth="2" />
          <text x="670" y="57" textAnchor="middle" className="fill-[var(--text-primary)]" fontFamily="var(--font-body)" fontSize="10" fontWeight="600">Baseband</text>
          <text x="670" y="73" textAnchor="middle" className="fill-[var(--accent)]" fontFamily="var(--font-mono)" fontSize="8">&lt;100μs</text>

          {/* Arrow 5→6 */}
          <path d="M730 60 L752 60" className="stroke-[var(--accent)]" strokeWidth="1.5" markerEnd="url(#la-arr)" />

          {/* Node 6: Live Network */}
          <rect x="760" y="30" width="110" height="60" rx="8" className="stroke-[var(--border-color)] fill-[var(--bg-elevated)]" strokeWidth="1.5" />
          <text x="815" y="57" textAnchor="middle" className="fill-[var(--text-primary)]" fontFamily="var(--font-body)" fontSize="10" fontWeight="600">Live 5G</text>
          <text x="815" y="73" textAnchor="middle" className="fill-[var(--text-muted)]" fontFamily="var(--font-mono)" fontSize="8">production</text>
        </svg>
      </div>
    </div>
  );
}
