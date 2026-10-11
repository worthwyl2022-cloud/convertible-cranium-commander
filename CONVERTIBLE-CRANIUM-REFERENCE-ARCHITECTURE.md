# Convertible Cranium Reference Architecture

## Purpose

This document is the normative architecture reference for Convertible Cranium and its Commander operating surface.

The architecture is a **Quad Engine**:

1. Engine 1: Synapse, proposal, context, and derivation.
2. Engine 2A: Substrate A, Constitutional Authority, **May We?**
3. Engine 2B: Substrate B, Evidence Grounding, **Is It So?**
4. Engine 3: Cranium Kernel, convergence, validation, authorization, and lineage.

> Cognition may come from anywhere. Authority comes only through Cranium.
>
> Models may propose cognition. Only Cranium determines whether cognition acquires authority.

## 1. Ingress and Interface

All external inputs are **untrusted**: user input, files and documents, APIs and services, external systems, sensors and IoT, and web/network inputs.

The ingress boundary validates, sanitizes, normalizes, bounds, and detects threats.

**Authority at ingress: NONE.**

## 2. Quad Engine

### Engine 1: Synapse

Synapse receives normalized untrusted input and derives intent/context, proposal P, independent context projections D_A and D_B, proposal hashes, and independent evaluation inputs.

Synapse proposes. It does not authorize.

### Engine 2A: Constitutional Substrate A

Substrate A answers **May We?** It independently validates against Constitution A, applies Policy A, checks prohibited constraints, generates an admissibility basis, and produces Assessment A.

### Engine 2B: Evidence Substrate B

Substrate B answers **Is It So?** It independently collects and verifies evidence, checks grounding and sources, applies formulas and models, detects contradictions, and produces Assessment B.

Substrate A and Substrate B share the governing principle of **Truth above all**, but their constitutions, policies, formulas, and evaluation paths remain independently defined.

### Engine 3: Cranium Kernel

The Kernel is the convergence authority. It verifies proposal integrity, validates A and B independently, checks versions and signatures, enforces binding requirements, tests convergence, creates the authority transition, and produces canonical receipt and lineage.

**Convergence is not a vote.** It is a deterministic authority condition defined by the governing contract.

**No convergence means no authority.**

## 3. Authority Transition and Proof Layer

The normative transition is:

**Proposal Hash → A Assessment → B Assessment → Convergence → Authority Transition → Canonical Receipt → Proof → Lineage**

The resulting authority state must be backed by durable evidence.

Commander must never manufacture authorization, denial, quarantine, canonical receipts, cryptographic proof, or lineage claims.

## 4. Governed Execution

Execution occurs only after the required proof and authority conditions are satisfied.

The execution boundary is fail-closed:

- No convergence → no authority
- Failed conditions → no governed execution
- Quarantine → isolated analysis path
- Required authority unavailable → fail closed

## 5. Safety Substrates

Safety is cross-cutting and independent of the creative interface.

Required safety domains include Circuit Breaker / COMA, Metabolic Memory, Miracle Meta Memory, Replay Protection, Quarantine, and Recovery.

Safety controls constrain and protect execution. They do not become a second authority plane.

## 6. Software Ecosystem

The ecosystem may contain Forge, Cognitive Institution / next-generation Forge, Metacognitive Product, Creator Studio, Convertible Cranium AI, Commander, and Chromium Edition.

The ecosystem may generate cognition, proposals, creative artifacts, interfaces, and operating actions.

**Same authority. One authority boundary.**

Commander is the operating surface. It is not the authority implementation.

## 7. Infrastructure Layer

The infrastructure layer covers cloud and compute, containers and orchestration, data and storage, identity and access, network and security, CI/CD, observability, and recovery.

Infrastructure availability does not imply Cranium authority.

## 8. Evidence and Verification

Acquisition and enterprise claims must be grounded in tests, audits, security controls, dependency posture, build provenance, receipts, lineage, and reproducible verification.

Architecture diagrams are reference material, not proof that a component is implemented. Implementation status must be independently demonstrated by source, tests, build artifacts, and runtime evidence.

## 9. Repository Boundaries

The repository structure must preserve the authority boundary:

- Production/private repositories: core infrastructure and authoritative implementation
- Public acquisition repositories: documentation, public projects, and approved product surfaces
- Commander: operating surface and integration boundary
- Kernel: canonical authority implementation

A public Commander repository must never imply that its local UI, local memory, AI provider, or creative workflow is itself the constitutional authority.

## 10. Non-Negotiable Invariants

1. **Authority only comes through Cranium.**
2. **Commander never promotes proposal state to authority locally.**
3. **Substrate A and Substrate B remain independently evaluable.**
4. **Convergence is not voting.**
5. **No convergence means no authority.**
6. **Receipts and lineage are evidence, not decorative UI language.**
7. **Creative canon/context is not constitutional authority.**
8. **Offline operation may provide proposal/context functionality but cannot fabricate authority.**
9. **Enterprise readiness requires verified integration with the real Kernel and evidence of the resulting control path.**
10. **Claims must track implementation evidence.**

## Commander-specific contract

Commander may accept and normalize human input, display proposals and creative context, invoke approved model providers, present continuity and creative state, request Kernel authority, and display a Kernel-supplied authority result and receipt.

Commander may not self-authorize, treat a model response as authorization, treat presentation language such as verified/sealed/secured/canonical as proof of Kernel authority, invent receipts, invent cryptographic validation, or claim governed execution without the required authority evidence.

This reference architecture is the target against which Commander and the surrounding repositories are audited.
