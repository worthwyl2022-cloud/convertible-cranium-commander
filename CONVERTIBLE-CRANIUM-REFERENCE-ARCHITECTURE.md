# Convertible Cranium Justice OS: Reference Architecture

## Product hierarchy

- **Product:** Convertible Cranium Justice OS
- **Positioning:** The Authority-Bound Operating System
- **Featured interface:** Convertible Cranium Commander AI
- **Governance architecture:** Quantum-Hybrid Authority-Bound Governance Layer
- **Architecture within that layer:** Quantum-Hybrid Dual-Substrate, Quad-Engine

## Canonical architecture tree

```text
CONVERTIBLE CRANIUM JUSTICE OS
└── Convertible Cranium Commander AI (interface; not authority)
    └── Quantum-Hybrid Authority-Bound Governance Layer
        └── Quantum-Hybrid Dual-Substrate, Quad-Engine
            ├── Guardian Substrate — Constitutional Integrity
            │   ├── Engine A1: Synapse projection D_A / constitutional path
            │   └── Engine A2: Constitutional Authority
            ├── Imperial Substrate — Evidence Integrity
            │   ├── Engine B1: Synapse projection D_B / evidence path
            │   └── Engine B2: Evidence Grounding
            └── Convergence beneath all four engines
                └── Convertible Cranium Liberty Kernel
                    (proposed name; current implementation: Cranium Kernel / cranium-kernel)
                    └── Governed grant/deny, execution gate, receipts, lineage
```

Synapse is one system with two substrate-aligned projections, D_A and D_B. A1/A2 and B1/B2 are the four engines. The Kernel is not a fifth peer engine and this is not a vote. Quantum-hybrid computation is supporting infrastructure, not an additional authority engine. No model, UI, quantum process, or external service grants itself authority.

## Authority transition

**Untrusted input → Synapse proposal + bound projections → Guardian constitutional assessment + Imperial evidence assessment → Kernel convergence check → grant/deny → governed execution (if granted) → canonical receipt + lineage.**

Stale, replayed, tampered, out-of-scope, or unverifiable inputs fail closed. Commander must not manufacture authority states, receipts, cryptographic proof, or lineage.

## Supporting systems

Unified Bottleneck / ASO is intended as the sole downstream authority object, with command identity, subject/scope, authority density, lineage, and receipts. Only the Kernel may emit it; missing or zero required density must fail closed. This remains a target contract until implementation and tests prove it. Miracle Memory, Metabolic Memory v2, Circuit Breaker / COMA, replay protection, quarantine, recovery, trusted execution, and audit receipts are supporting systems. **Metabolic Memory v2 remains off the authority path until merged and tested.** Quantum-hybrid runtime remains a capability target, not a claim of an audited live backend.

## Naming rules

- Use **Constitutional Integrity** and **Evidence Integrity** as canonical labels.
- Do not use retired “May We?” / “Is It So?” or “jury/juror” in canonical UI, diagrams, or documentation.
- **Convertible Cranium Liberty Kernel** is the proposed product name only. Until repository slug and source identifiers are changed and verified, call the current implementation **Cranium Kernel** (`cranium-kernel`) where needed and state the transition explicitly.
- **Justice OS** is the product. **Commander AI** is the interface. Do not use “Commander OS” as the product name.

## Evidence and non-claims

This is an architecture target and naming contract. It does not establish implementation completeness, production availability, a live quantum runtime, HSM/KMS custody, verified boot/rootfs, multi-node fencing, independent security audit, or live Redis/Postgres persistence. Each claim requires a versioned artifact, passing test or deployment evidence, and a reproducible reference to the exact commit or release.
