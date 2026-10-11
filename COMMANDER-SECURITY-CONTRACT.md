# Commander Security Contract

Commander is an operating surface, not an authority plane.

## Authority boundary

- User and model input is untrusted ingress.
- Commander may construct proposals and display proposal state.
- Commander never invents an authority receipt or converts a proposal into authorization.
- Only a recognized Cranium Kernel response containing an allowed authority state and receipt may produce AUTHORIZED, DENIED, or QUARANTINED.
- Missing or malformed Kernel authority is UNKNOWN.
- COMMANDER_REQUIRE_KERNEL=true makes authority unavailable a hard failure.

## Runtime controls

- Request correlation via x-request-id.
- JSON request limit defaults to 64 KiB.
- Per-IP in-memory rate limiting defaults to 60 requests/minute.
- Optional bearer authentication through COMMANDER_API_TOKEN.
- Security response headers disable content sniffing, framing, referrer leakage, and caching.
- Health never reports secret presence.
- Readiness separates liveness from dependency readiness.
- Provider failures return explicit non-authoritative errors.

## Enterprise integration

Set CRANIUM_KERNEL_URL to the approved Kernel authority adapter. The adapter must return a recognized state plus a verifiable receipt. Commander does not accept VERIFIED, OK, or other implicit authority labels.
