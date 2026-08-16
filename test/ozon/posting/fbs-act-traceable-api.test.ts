import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetFbsDigitalActStatus,
  GET_FBS_DIGITAL_ACT_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/act/digital/status/v2/execute.js";
import {
  executeGetFbsActPdf,
  GET_FBS_ACT_PDF_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/act/pdf/v2/execute.js";
import {
  executeGetFbsCarriageDiscrepancyAct,
  GET_FBS_CARRIAGE_DISCREPANCY_ACT_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/delivery/fbs/carriage/discrepancy/pdf/v1/execute.js";
import {
  executeListFbsActs,
  LIST_FBS_ACTS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/act/list/v2/execute.js";
import {
  executeGetFbsDigitalActPdf,
  GET_FBS_DIGITAL_ACT_PDF_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/act/digital/pdf/v2/execute.js";
import {
  executeGetFbsActStatus,
  GET_FBS_ACT_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/act/status/v2/execute.js";
import {
  executeSplitTraceableFbsPosting,
  SPLIT_TRACEABLE_FBS_POSTING_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/traceable/split/v1/execute.js";
import {
  executeGetFbsTraceableAttributes,
  GET_FBS_TRACEABLE_ATTRIBUTES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/traceable/attributes/v1/execute.js";
import {
  executeGetFbsCarriageEttnStatus,
  GET_FBS_CARRIAGE_ETTN_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/delivery/fbs/carriage/ettn/status/v1/execute.js";
import {
  executeListFbsAssemblyCarriagePostings,
  LIST_FBS_ASSEMBLY_CARRIAGE_POSTINGS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/delivery/fbs/assembly/carriage/posting/list/v1/execute.js";

function t(body: unknown) {
  const x = new MockTransport();
  x.enqueueResponse({ status: 200, headers: new Headers(), body });
  return x;
}

describe("Ozon FBS act and traceable API", () => {
  it("maps and validates all ten successful operations", async () => {
    await expect(
      executeGetFbsDigitalActStatus(t({ id: 1, status: "ready" }), { id: 1 }),
    ).resolves.toEqual({ id: 1, status: "ready" });
    await expect(
      executeGetFbsActPdf(t(new ArrayBuffer(1)), { id: 1 }),
    ).resolves.toBeInstanceOf(ArrayBuffer);
    await expect(
      executeGetFbsCarriageDiscrepancyAct(
        t({ content: "BASE64", name: "act.pdf", type: "application/pdf" }),
        { carriage_id: 1 },
      ),
    ).resolves.toMatchObject({ name: "act.pdf" });
    await expect(
      executeListFbsActs(
        t({
          result: [
            {
              id: 1,
              related_docs: { act_of_acceptance: { document_status: "ready" } },
            },
          ],
        }),
        { limit: 50 },
      ),
    ).resolves.toHaveProperty("result");
    await expect(
      executeGetFbsDigitalActPdf(t(new ArrayBuffer(1)), { id: 1 }),
    ).resolves.toBeInstanceOf(ArrayBuffer);
    await expect(
      executeGetFbsActStatus(
        t({ result: { status: "ready", added_to_act: [] } }),
        { id: 1 },
      ),
    ).resolves.toHaveProperty("result.status", "ready");
    await expect(
      executeSplitTraceableFbsPosting(
        t({
          postings: [
            { posting_number: "TEST", products: [{ quantity: 1, sku: 1 }] },
          ],
        }),
        { posting_number: "TEST" },
      ),
    ).resolves.toHaveProperty("postings");
    await expect(
      executeGetFbsTraceableAttributes(
        t({ products: [{ required_attributes: ["RNPT"], sku: 1 }] }),
        { posting_number: "TEST" },
      ),
    ).resolves.toHaveProperty("products");
    await expect(
      executeGetFbsCarriageEttnStatus(t({ errors: [], status: "SUCCESS" }), {
        carriage_id: 1,
      }),
    ).resolves.toEqual({ errors: [], status: "SUCCESS" });
    await expect(
      executeListFbsAssemblyCarriagePostings(
        t({
          can_print_mass_label: true,
          cursor: "next",
          postings: [{ products: [{ quantity: 1, sku: 1 }] }],
        }),
        { filter: { carriage_id: 1 }, limit: 100 },
      ),
    ).resolves.toHaveProperty("cursor", "next");
  });

  it("marks PDF operations as safe binary reads", async () => {
    const act = t(new ArrayBuffer(1));
    await executeGetFbsActPdf(act, { id: 1 });
    expect(act.requests[0]).toMatchObject({
      accept: "application/pdf",
      responseType: "array-buffer",
      retrySafety: "safe",
    });
    const digital = t(new ArrayBuffer(1));
    await executeGetFbsDigitalActPdf(digital, { id: 1 });
    expect(digital.requests[0]).toMatchObject({
      accept: "application/pdf",
      responseType: "array-buffer",
      retrySafety: "safe",
    });
  });

  it.each([
    [
      GET_FBS_DIGITAL_ACT_STATUS_OPERATION_ID,
      (x: MockTransport) => executeGetFbsDigitalActStatus(x, { id: 1 }),
      { id: "bad" },
    ],
    [
      GET_FBS_ACT_PDF_OPERATION_ID,
      (x: MockTransport) => executeGetFbsActPdf(x, { id: 1 }),
      {},
    ],
    [
      GET_FBS_CARRIAGE_DISCREPANCY_ACT_OPERATION_ID,
      (x: MockTransport) =>
        executeGetFbsCarriageDiscrepancyAct(x, { carriage_id: 1 }),
      { content: 1 },
    ],
    [
      LIST_FBS_ACTS_OPERATION_ID,
      (x: MockTransport) => executeListFbsActs(x, { limit: 1 }),
      { result: [{ id: "bad" }] },
    ],
    [
      GET_FBS_DIGITAL_ACT_PDF_OPERATION_ID,
      (x: MockTransport) => executeGetFbsDigitalActPdf(x, { id: 1 }),
      {},
    ],
    [
      GET_FBS_ACT_STATUS_OPERATION_ID,
      (x: MockTransport) => executeGetFbsActStatus(x, { id: 1 }),
      { result: { is_partial: "yes" } },
    ],
    [
      SPLIT_TRACEABLE_FBS_POSTING_OPERATION_ID,
      (x: MockTransport) =>
        executeSplitTraceableFbsPosting(x, { posting_number: "TEST" }),
      { postings: [{ potential_blr_traceable: "yes" }] },
    ],
    [
      GET_FBS_TRACEABLE_ATTRIBUTES_OPERATION_ID,
      (x: MockTransport) =>
        executeGetFbsTraceableAttributes(x, { posting_number: "TEST" }),
      { products: [{ sku: "bad" }] },
    ],
    [
      GET_FBS_CARRIAGE_ETTN_STATUS_OPERATION_ID,
      (x: MockTransport) =>
        executeGetFbsCarriageEttnStatus(x, { carriage_id: 1 }),
      { status: "UNKNOWN" },
    ],
    [
      LIST_FBS_ASSEMBLY_CARRIAGE_POSTINGS_OPERATION_ID,
      (x: MockTransport) =>
        executeListFbsAssemblyCarriagePostings(x, {
          filter: { carriage_id: 1 },
          limit: 1,
        }),
      { postings: [{ can_print_label: "yes" }] },
    ],
  ] as const)(
    "rejects malformed response for %s",
    async (operationId, run, body) => {
      await expect(run(t(body))).rejects.toMatchObject({ operationId });
    },
  );
});
