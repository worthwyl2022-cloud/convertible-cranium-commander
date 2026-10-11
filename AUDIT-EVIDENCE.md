# Audit Evidence Register

## Current Commander hardening

- Source: local Commander engineering tree at cranium-operator-os audit snapshot.
- Package identity: cranium-commander version 1.0.1.
- Authority contract tests: 3 passed, 0 failed.
- TypeScript check: passed.
- Vite production build: passed.
- Node server bundle: passed.
- Production dependency audit: 0 vulnerabilities after npm audit fix --omit=dev.
- Live HTTP health check: 200.
- Live readiness check without provider: 503.
- Invalid chat request: 400 with non-authoritative UNKNOWN state.
- Oversized request: 413 with non-authoritative UNKNOWN state.

## Authority boundary

Commander does not claim authorization locally. Without a configured Kernel adapter, responses remain proposal/non-authoritative or fail when COMMANDER_REQUIRE_KERNEL=true. A Kernel response is accepted only when it contains a recognized authority state and receipt.

## CI controls

GitHub Actions checkout and setup-node actions are pinned to immutable commit SHAs. CI runs tests, typecheck, build, and production dependency audit.

## Remaining deployment requirement

A real Cranium Kernel authority endpoint must be configured and independently verified before declaring an enterprise deployment fully authorized. Commander itself does not manufacture that evidence.
