# Commander Threat Model

| Threat | Control |
|---|---|
| Prompt injection | All model input is treated as untrusted proposal data |
| Oversized request | 64 KiB body limit and 16 KiB message limit |
| Replay/correlation ambiguity | Request IDs are generated or validated at ingress |
| Unauthorized API access | Optional bearer token enforcement |
| Provider outage | 503/502 explicit non-authoritative failure |
| False authority claim | Authority envelope requires Kernel state plus receipt |
| Kernel outage | UNKNOWN, or fail-closed when COMMANDER_REQUIRE_KERNEL=true |
| IP spoofing through proxy metadata | Rate limiter keys on Express request IP; deployment must set trusted proxy explicitly |
| Secret disclosure | Health/readiness never expose credential presence |
| UI/server drift | CI runs tests, typecheck, production build, and production dependency audit |
