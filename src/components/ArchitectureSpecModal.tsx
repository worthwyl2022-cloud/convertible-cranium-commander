import { X, Shield, Cpu, Layers, GitBranch } from 'lucide-react';

interface Props { isOpen: boolean; onClose: () => void; }

const engines = [
  { id: 'A1', name: 'Synapse projection D_A', detail: 'Guardian constitutional-path projection and proposal binding.' },
  { id: 'A2', name: 'Constitutional Authority', detail: 'Evaluates constitutional constraints; assessment is not itself a grant.' },
  { id: 'B1', name: 'Synapse projection D_B', detail: 'Imperial evidence-path projection, claims, sources, and provenance.' },
  { id: 'B2', name: 'Evidence Grounding', detail: 'Evaluates evidence and contradictions; assessment is not itself a grant.' },
];

export default function ArchitectureSpecModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-neutral-950 text-neutral-100 w-full max-w-5xl rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <header className="p-5 border-b border-neutral-800 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-amber-400" /><h2 className="text-lg font-bold">Convertible Cranium Justice OS</h2></div>
            <p className="text-xs text-neutral-400 mt-1">The Authority-Bound Operating System · Architecture target and diligence boundaries</p>
          </div>
          <button onClick={onClose} aria-label="Close architecture details" className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"><X className="w-5 h-5" /></button>
        </header>
        <div className="p-5 md:p-7 overflow-y-auto space-y-6">
          <section className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-5">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider"><Layers className="w-4 h-4" /> Governance architecture</div>
            <h3 className="mt-2 text-xl font-bold">Quantum-Hybrid Authority-Bound Governance Layer</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-6">Contains the Quantum-Hybrid Dual-Substrate, Quad-Engine architecture. Synapse is one system with two substrate-aligned projections. The paths converge beneath all four engines at one Kernel authority boundary. This is not a vote.</p>
          </section>
          <div className="grid gap-4 lg:grid-cols-2">
            <section className="rounded-2xl border border-violet-400/25 bg-violet-400/[0.035] p-4">
              <h3 className="font-bold text-violet-200">Convertible Cranium Guardian Substrate</h3><p className="mt-1 text-xs text-neutral-400">Constitutional Integrity</p>
              <div className="mt-4 space-y-3">{engines.filter(e => e.id.startsWith('A')).map(e => <div key={e.id} className="rounded-xl border border-neutral-800 bg-neutral-900 p-3"><div className="text-[10px] font-mono text-neutral-500">ENGINE {e.id}</div><div className="mt-1 text-sm font-semibold">{e.name}</div><p className="mt-1 text-xs leading-5 text-neutral-400">{e.detail}</p></div>)}</div>
            </section>
            <section className="rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.035] p-4">
              <h3 className="font-bold text-cyan-200">Convertible Cranium Imperial Substrate</h3><p className="mt-1 text-xs text-neutral-400">Evidence Integrity</p>
              <div className="mt-4 space-y-3">{engines.filter(e => e.id.startsWith('B')).map(e => <div key={e.id} className="rounded-xl border border-neutral-800 bg-neutral-900 p-3"><div className="text-[10px] font-mono text-neutral-500">ENGINE {e.id}</div><div className="mt-1 text-sm font-semibold">{e.name}</div><p className="mt-1 text-xs leading-5 text-neutral-400">{e.detail}</p></div>)}</div>
            </section>
          </div>
          <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.035] p-5">
            <div className="flex items-center gap-2 text-emerald-200 font-bold"><GitBranch className="w-4 h-4" /> Single authority boundary</div>
            <h3 className="mt-2 text-lg font-bold">Cranium Kernel</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-300">The proposed product name is Convertible Cranium Liberty Kernel. The current implementation and repository slug remain Cranium Kernel / <code>cranium-kernel</code> until a rename is actually completed and verified. Only the Kernel may authorize or deny governed actions and emit canonical receipts.</p>
          </section>
          <section className="grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-800 p-4"><Cpu className="w-4 h-4 text-amber-300" /><h4 className="mt-2 text-sm font-bold">Quantum-hybrid compute</h4><p className="mt-1 text-xs leading-5 text-neutral-400">Capability target only. No audited live quantum runtime is claimed.</p></div>
            <div className="rounded-xl border border-neutral-800 p-4"><Shield className="w-4 h-4 text-amber-300" /><h4 className="mt-2 text-sm font-bold">Security boundary</h4><p className="mt-1 text-xs leading-5 text-neutral-400">No claim of independent security audit, HSM/KMS custody, or verified boot without separate evidence.</p></div>
            <div className="rounded-xl border border-neutral-800 p-4"><Layers className="w-4 h-4 text-amber-300" /><h4 className="mt-2 text-sm font-bold">Infrastructure</h4><p className="mt-1 text-xs leading-5 text-neutral-400">Cloud, Redis, Postgres, and multi-node controls require actual environment-backed verification.</p></div>
          </section>
          <p className="text-xs leading-5 text-neutral-500">Architecture and prototype screens are not proof of production deployment or complete implementation. Cognition may come from anywhere. Authority comes only through Cranium.</p>
        </div>
      </div>
    </div>
  );
}
