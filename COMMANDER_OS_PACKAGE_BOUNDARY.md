# Commander OS Package Boundary and Provenance

## Purpose

This document defines what the public `convertible-cranium-commander` repository represents and what it does not establish. It is a packaging and diligence boundary, not a certification or legal ownership opinion.

## Package boundary

- **This repository:** the public Commander web/interface surface and its presentation assets.
- **Canonical authority implementation:** [`cranium-kernel`](https://github.com/worthwyl2022-cloud/cranium-kernel). Commander is an operating surface, not the authority plane.
- **Canonical Commander source noted by the repository:** `worthwyl2022-cloud/cranium-boot-drive/ecosystem/commander`, at the source revision recorded in `PROVENANCE.md`. That source revision is provenance evidence, not proof that every current public artifact is byte-for-byte reproducible from it.
- **OS/bootable image:** this repository alone does not establish a complete, reproducible, bootable ChromiumOS/OS package. Do not describe the public web surface as a verified OS image or infer that it includes every runtime, driver, signer, update channel, or deployment component.
- **Archived material:** historical repositories and artifacts are reference evidence only unless explicitly reactivated and independently validated.

## Authority and execution boundary

Cognition and interface code may propose or present operations; they do not grant themselves authority. Consequential state transitions must be evaluated by the canonical Kernel authority path. A UI response, successful frontend build, package boundary document, or provenance pointer is not evidence that a protected operation was authorized or executed safely.

## Kernel pin and verification lineage

See [`KERNEL_PIN`](./KERNEL_PIN) for the exact Kernel default-branch tip, feature tip, and verification lineage. The pin now points to `710ab844571c704078852b38d9451ffe68900acf`. A pin identifies a revision; it does not itself certify that revision. The last independent full clean-clone verification stamp remains the historical `e36bdba2fe0a448473f94250920e751c95e1d3e0` dated 2026-09-30. A fresh `npm ci && npm run verify && npm run verify:denial-semantics` run against the pinned current tip is required before claiming that current tip is fully verified.

## Release and diligence requirements

Before representing a Commander OS package as production-ready, record and independently validate at least:

1. exact source revisions and reproducible build instructions;
2. package/image contents and software bill of materials;
3. artifact hashes and trusted signing/verification procedure;
4. update, rollback, recovery, and key-rotation behavior;
5. supported hardware/platform and boot path;
6. security test results and explicitly unresolved gaps.

No HSM/KMS custody, independent security audit, certification, complete bootable image, production deployment, customer use, or revenue claim is made by this document.