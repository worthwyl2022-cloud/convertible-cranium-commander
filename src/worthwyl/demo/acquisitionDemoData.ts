export interface DemoChapter {
  id: string;
  act: string;
  title: string;
  durationSec: number;
  narratorVoiceText: string;
  captions: string[];
  keyHighlights: {
    metric: string;
    label: string;
    description: string;
  }[];
  visualMode: 'physics' | 'novel' | 'metacognitive' | 'architecture' | 'summary';
}

export const DEMO_CHAPTERS: DemoChapter[] = [
  {
    id: "act-1",
    act: "Act I",
    title: "The Creative Bottleneck & The Behavioral Contract",
    durationSec: 18,
    narratorVoiceText: "Welcome to Convertible Cranium Justice OS, a development-stage authority-bound operating-system concept. This demo explores how a governed workflow can distinguish proposals, evidence, and authority. The interface is illustrative; canonical authorization must come from the Kernel contract, not a model or UI label.",
    captions: [
      "Current generative tools suffer from canon amnesia and narrative drift.",
      "The architecture specifies a behavioral contract between human intent, cognition, evidence, and governed action.",
      "Intent, canon, and emotional logic are represented as explicit constraints in the prototype."
    ],
    keyHighlights: [
      { metric: "Prototype", label: "Constraint Design", description: "Constitutional and identity constraints are design goals; full-system guarantees are not claimed." },
      { metric: "0.90", label: "Coherence Floor", description: "Calibrated threshold enforcing strict multi-episode integrity." },
      { metric: "4 Core", label: "Subsystem Pillars", description: "Cranium Core, Media Engine, Studio, and Miracle Archive." }
    ],
    visualMode: "summary"
  },
  {
    id: "act-2",
    act: "Act II",
    title: "Resonance Field Physics & Automated Directives",
    durationSec: 22,
    narratorVoiceText: "Observe the Resonance Field in action. Narrative events are not stored as plain text strings—they are modeled as Cognitive Atoms, with emotional charge, mass, and velocity. The engine computes real-time tension, coherence, and theme drift. When tension drops below threshold, Cranium Core issues an automated ESCALATE directive. When coherence fractures, it issues STABILIZE.",
    captions: [
      "Cognitive Atoms model narrative energy: charge (-1.0 to 1.0), mass, and velocity.",
      "The physics engine evaluates collisions between opposite emotional polarities.",
      "The loop autonomously fires directives: STABILIZE, ESCALATE, SHIFT_THEME, ADVANCE."
    ],
    keyHighlights: [
      { metric: "0.08", label: "Tension Floor", description: "Prevents flatlining narrative momentum across episodes." },
      { metric: "0.35", label: "Drift Ceiling", description: "Triggers SHIFT_THEME if recent beats detach from core motif." },
      { metric: "Real-Time", label: "Directive Governance", description: "Deterministic control layer steering external generation models." }
    ],
    visualMode: "physics"
  },
  {
    id: "act-3",
    act: "Act III",
    title: "The Episodic Novel Engine & Visual Coherence",
    durationSec: 22,
    narratorVoiceText: "In the Creator Studio prototype, narrative snapshots and continuity tools help inspect characters and plot threads. These are workflow aids, not a guarantee of zero-loss continuity or autonomous correctness.",
    captions: [
      "Continuous serialized generation preserving character timelines and location history.",
      "Visual Cortex renders typographic snapshot cards to inspect visual density & pacing.",
      "Thread tracking is a prototype aid; completeness must be evaluated against test corpora."
    ],
    keyHighlights: [
      { metric: "Tracked", label: "Character Lineage", description: "Prototype tracks firstSeen, lastSeen, and conflict progression where available." },
      { metric: "Dual Cortex", label: "Visual + Text Hybrid", description: "Detects pacing drift through both linguistic and layout density." },
      { metric: "3-5 Epoch", label: "Episodic Spine", description: "ContextBuilder synthesizes recent canon with active persona philosophy." }
    ],
    visualMode: "novel"
  },
  {
    id: "act-4",
    act: "Act IV",
    title: "The Metacognitive Tracker: Self-Awareness for Creators",
    durationSec: 22,
    narratorVoiceText: "The creator is the soul of the machine. The Metacognitive Tracker is a private self-awareness instrument built into the OS. It allows creators to log moments of hesitation, self-shrinking, overexplaining, or retreat in under sixty seconds. The pattern engine synthesizes these logs into plain-language truths, revealing where fear distorts decision-making.",
    captions: [
      "60-second structured capture: situation, trigger, thought, assumption, and outcome.",
      "Audits self-shrinking, overexplaining, and emotional retreat in high-stakes creative moments.",
      "Review tooling can surface patterns for human interpretation; it does not diagnose or prescribe treatment."
    ],
    keyHighlights: [
      { metric: "Experimental", label: "Pattern Review", description: "Human-reviewed observations; no validated clinical or predictive accuracy claim." },
      { metric: "60-Second", label: "Zero-Friction Logging", description: "Instant capture card engineered for busy founders and artists." },
      { metric: "Testable Micro-Action", label: "Behavioral Growth", description: "Transforms messy creative doubts into clear, disciplined conviction." }
    ],
    visualMode: "metacognitive"
  },
  {
    id: "act-5",
    act: "Act V",
    title: "Enterprise Architecture & Acquisition Diligence",
    durationSec: 20,
    narratorVoiceText: "The current architecture is a development-stage target. Azure, Kubernetes, Istio, encryption custody, and durable cloud storage are not claimed as live integrations by this demo. Commercial, IP, and security diligence remain separate workstreams.",
    captions: [
      "Deployment topology is a design target; live cloud integration is not established here.",
      "Memory and archive concepts require separate storage, encryption, and recovery verification.",
      "Evidence-led diligence, clear IP boundaries, and independently validated integrations are required before commercialization."
    ],
    keyHighlights: [
      { metric: "Target", label: "Deployment Topology", description: "Cloud topology is proposed, not a verified live deployment." },
      { metric: "Unverified", label: "Archive Security", description: "Do not claim encryption custody or immutable storage without implementation evidence." },
      { metric: "Concept", label: "Governance Differentiation", description: "Potential differentiation requires legal review and comparative validation." }
    ],
    visualMode: "architecture"
  }
];
