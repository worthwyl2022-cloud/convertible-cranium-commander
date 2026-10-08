export type AuthorityState = "PROPOSED" | "AUTHORIZED" | "DENIED" | "QUARANTINED" | "UNKNOWN";

export interface AuthorityEnvelope {
  state: AuthorityState;
  receipt: unknown | null;
  source: "commander" | "cranium-kernel";
  reason?: string;
}

export function proposedEnvelope(reason = "Awaiting Cranium Kernel authority"): AuthorityEnvelope {
  return { state: "PROPOSED", receipt: null, source: "commander", reason };
}

export function unknownEnvelope(reason: string): AuthorityEnvelope {
  return { state: "UNKNOWN", receipt: null, source: "commander", reason };
}

export function kernelEnvelope(payload: any): AuthorityEnvelope {
  const state = payload?.state;
  if (!["AUTHORIZED", "DENIED", "QUARANTINED"].includes(state) || !payload.receipt) {
    return unknownEnvelope("Kernel response did not contain a recognized authority state and receipt");
  }
  return { state, receipt: payload.receipt, source: "cranium-kernel", reason: payload.reason };
}
