import test from "node:test";
import assert from "node:assert/strict";
import { kernelEnvelope, proposedEnvelope, unknownEnvelope } from "../src/server/authority.ts";

test("Commander never creates authority from a proposal", () => {
  const result = proposedEnvelope();
  assert.equal(result.state, "PROPOSED");
  assert.equal(result.receipt, null);
  assert.equal(result.source, "commander");
});

test("Kernel authority requires a recognized state and receipt", () => {
  assert.equal(kernelEnvelope({ state: "AUTHORIZED" }).state, "UNKNOWN");
  assert.equal(kernelEnvelope({ state: "AUTHORIZED", receipt: { id: "r1" } }).state, "AUTHORIZED");
  assert.equal(kernelEnvelope({ state: "VERIFIED", receipt: { id: "r1" } }).state, "UNKNOWN");
});

test("Provider failure is explicitly non-authoritative", () => {
  const result = unknownEnvelope("provider unavailable");
  assert.equal(result.state, "UNKNOWN");
  assert.equal(result.receipt, null);
});
