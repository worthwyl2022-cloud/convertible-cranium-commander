# Convertible Cranium Justice OS: Architecture Tree v1

**Product:** Convertible Cranium Justice OS
**Positioning:** The Authority-Bound Operating System
**Featured interface:** Convertible Cranium Commander AI
**Governance architecture:** Quantum-Hybrid Authority-Bound Governance Layer

> Cognition may come from anywhere. Authority comes only through Cranium.

## Structural rule

The Governance Layer contains a **dual-substrate, quad-engine architecture**. Each substrate owns a pair of engines on its own column. The two substrate paths converge beneath the four engines at the single central authority boundary. The Kernel is **not** a peer tile in the quad-engine row. Quantum-hybrid capability is a supporting capability, not a fifth engine.

```text
CONVERTIBLE CRANIUM JUSTICE OS
└── The Authority-Bound Operating System
    └── Convertible Cranium Commander AI
        └── Quantum-Hybrid Authority-Bound Governance Layer
            ├── GUARDIAN SUBSTRATE
            │   └── Constitutional Integrity
            │       ├── Engine A1: Synapse projection D_A
            │       │   └── Constitutional-path ingress, context and evidence binding
            │       └── Engine A2: Constitutional Authority
            │           └── Apply governing principles, rights, rules and constraints
            │
            ├── IMPERIAL SUBSTRATE
            │   └── Evidence Integrity
            │       ├── Engine B1: Synapse projection D_B
            │       │   └── Evidence-path ingress, claims, sources and binding
            │       └── Engine B2: Evidence Grounding
            │           └── Validate evidence, reliability, provenance and risk
            │
            └── Convergence (not a vote)
                └── Convertible Cranium Liberty Kernel
                    └── Central authority boundary
                        ├── Grant or deny governed actions
                        ├── Enforce policy and scope
                        ├── Emit decision and execution receipts
                        └── Bind downstream execution to authorized intent
                            ├── Unified Bottleneck / ASO
                            ├── Miracle Memory
                            ├── Metabolic Memory v2
                            ├── Circuit Breaker / COMA
                            ├── Quantum-classical hybrid capability
                            ├── Trusted Execution Layer
                            └── Receipts, lineage and audit trail
```

## Component responsibilities

| Component | Responsibility | Architectural relationship |
|---|---|---|
| Guardian Substrate | Constitutional Integrity | Owns A1 and A2 |
| Imperial Substrate | Evidence Integrity | Owns B1 and B2 |
| Engine A1 | Synapse D_A projection | Ingress and binding on the Guardian path |
| Engine A2 | Constitutional Authority | Applies governing constraints on the Guardian path |
| Engine B1 | Synapse D_B projection | Ingress and binding on the Imperial path |
| Engine B2 | Evidence Grounding | Validates claims and provenance on the Imperial path |
| Liberty Kernel / Cranium Kernel | Sole central authority boundary | Receives convergence; authorizes or denies; produces receipts |
| Unified Bottleneck / ASO | Single downstream authority object | Carries the authorized command/scope/lineage/receipt contract |
| Quantum-hybrid capability | Supporting compute capability | Does not independently confer authority and is not a quad engine |

## Naming and terminology

- Use **Constitutional Integrity** and **Evidence Integrity** as the substrate responsibility labels.
- Use **Synapse projection D_A** and **Synapse projection D_B** to make clear that Synapse is one system with two substrate-aligned projections.
- Do not use the retired prompts “May we?” or “Is it so?” in canonical UI, diagrams, or documentation.
- Use **convergence (not a vote)**. The paths contribute distinct required checks; they do not create authority by voting.
- **Convertible Cranium Liberty Kernel** is the current proposed name for the central authority core. Where source implementation still uses **Cranium Kernel**, document the alias/transition explicitly rather than implying a completed code rename.

## Diligence caption for architecture art

*Conceptual target architecture: the Quantum-Hybrid Authority-Bound Governance Layer contains two substrate columns, each owning two engines. The Guardian path enforces Constitutional Integrity; the Imperial path grounds Evidence Integrity. Both converge beneath the quad-engine architecture at the Liberty Kernel / Cranium Kernel, the single authority boundary for grant/deny decisions and receipts. Quantum-hybrid computation is a supporting capability, not an additional engine. This diagram describes intended architecture and does not, by itself, establish that every component, quantum backend, security control, or receipt property has been implemented, tested, or independently audited.*

## Verification gates before describing the tree as implemented

1. Map A1, A2, B1 and B2 to actual modules, interfaces and tests.
2. Verify both Synapse projections are distinct and substrate-bound while remaining one Synapse system.
3. Verify that only the Kernel authority boundary can authorize protected execution.
4. Verify fail-closed behavior when either substrate result, required evidence, scope, policy check or receipt commitment is missing or invalid.
5. Verify the ASO / Unified Bottleneck is the sole downstream authority object and is bound to command identity, scope, lineage and receipts.
6. Verify memory promotion and execution receipts against actual implementation and regression tests.
7. Treat quantum-hybrid execution as unverified until the selected simulator/backend, interfaces, result validation and tests are documented.
8. Re-run the repository's prescribed clean-clone and CI checks before claiming release readiness.
