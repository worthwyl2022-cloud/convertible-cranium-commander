# Justice OS Chromium Edition Package Boundary and Provenance

## Purpose

This document defines what the public `convertible-cranium-commander` repository represents and what it does not establish. It is a packaging and diligence boundary, not a certification or legal ownership opinion.

## Package boundary

- **This repository:** the public Commander web/interface surface and its presentation assets.
- **Canonical authority implementation:** [`cranium-kernel`](https://github.com/worthwylfoundation-hue/cranium-kernel). Commander is an operating surface, not the authority plane.
- **Canonical Commander source noted by the repository:** `worthwylfoundation-hue/cranium-boot-drive/ecosystem/commander`, at the source revision recorded in `PROVENANCE.md`. That source revision is provenance evidence, not proof that every current public artifact is byte-for-byte reproducible from it.
- **OS/bootable image:** this repository alone does not establish a complete, reproducible, bootable ChromiumOS/OS package. Do not describe the public web surface as a verified OS image or infer that it includes every runtime, driver, signer, update channel, or deployment component.
- **Archived material:** historical repositories and artifacts are reference evidence only unless explicitly reactivated and independently validated.

## Authority and execution boundary

Cognition and interface code may propose or present operations; they do not grant themselves authority. Consequential state transitions must be evaluated by the canonical Kernel authority path. A UI response, successful frontend build, package boundary document, or provenance pointer is not evidence that a protected operation was authorized or executed safely.

## Kernel pin and verification lineage

See [`KERNEL_PIN`](./KERNEL_PIN) for the exact Kernel default-branch tip, feature tip, and verification lineage. The observed Kernel main tip on 2026-10-19 is `720c299a2e748d1f5ac4b26530a068499b911399`. The latest recorded clean-clone verification stamp remains `710ab844571c704078852b38d9451ffe68900acf`, verified on 2026-10-17; the newer main tip is not represented as independently clean-clone verified by this document. A pin identifies a revision; it does not itself certify that revision. The clean-clone run of `npm ci && npm run verify && npm run verify:denial-semantics` passed on the 710ab stamp; `npm audit` reported zero vulnerabilities on that exact SHA. The verification output still reports two local Compose warnings: PostgreSQL TLS is disabled locally and Redis uses plaintext locally. Production deployments must enable PostgreSQL TLS and use `rediss://` or private-network encryption for Redis. This does not establish that a live production database, Redis, HSM/KMS, or independently audited deployment exists.

## Release and diligence requirements

Before representing a Justice OS bootable package as production-ready, record and independently validate at least:

1. exact source revisions and reproducible build instructions;
2. package/image contents and software bill of materials;
3. artifact hashes and trusted signing/verification procedure;
4. update, rollback, recovery, and key-rotation behavior;
5. supported hardware/platform and boot path;
6. security test results and explicitly unresolved gaps.

No HSM/KMS custody, independent security audit, certification, complete bootable image, production deployment, customer use, or revenue claim is made by this document.