import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  CREATE_FBS_CARRIAGE_OPERATION_ID,
  executeCreateFbsCarriage,
} from "../../../packages/ozon/src/endpoints/delivery/fbs/carriage/create/v1/execute.js";
import {
  APPROVE_FBS_CARRIAGE_OPERATION_ID,
  executeApproveFbsCarriage,
} from "../../../packages/ozon/src/endpoints/delivery/fbs/carriage/approve/v1/execute.js";
import {
  executeSetFbsCarriagePostings,
  SET_FBS_CARRIAGE_POSTINGS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/delivery/fbs/carriage/set-postings/v1/execute.js";
import {
  CANCEL_FBS_CARRIAGE_OPERATION_ID,
  executeCancelFbsCarriage,
} from "../../../packages/ozon/src/endpoints/delivery/fbs/carriage/cancel/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon FBS carriage API", () => {
  it("creates a carriage without retries", async () => {
    const input = {
      all_blr_traceable: false,
      delivery_method_id: 1001,
      departure_date: "2026-08-20T10:00:00Z",
    };
    const transport = transportWith({ carriage_id: 2001 });

    await expect(executeCreateFbsCarriage(transport, input)).resolves.toEqual({
      carriage_id: 2001,
    });
    expect(transport.requests[0]).toMatchObject({
      operationId: CREATE_FBS_CARRIAGE_OPERATION_ID,
      method: "POST",
      path: "/v1/carriage/create",
      body: input,
      retrySafety: "unsafe",
    });
  });

  it("approves a carriage without retries", async () => {
    const transport = transportWith({});

    await expect(
      executeApproveFbsCarriage(transport, {
        carriage_id: 2001,
        containers_count: 2,
      }),
    ).resolves.toEqual({});
    expect(transport.requests[0]).toMatchObject({
      path: "/v1/carriage/approve",
      retrySafety: "unsafe",
    });
  });

  it("changes carriage postings without retries", async () => {
    const input = { carriage_id: 2001, posting_numbers: ["TEST-POSTING"] };
    const body = {
      result: [{ error: "", posting_number: "TEST-POSTING", result: true }],
    };
    const transport = transportWith(body);

    await expect(
      executeSetFbsCarriagePostings(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests[0]).toMatchObject({
      path: "/v1/carriage/set-postings",
      body: input,
      retrySafety: "unsafe",
    });
  });

  it("cancels a carriage without retries", async () => {
    const transport = transportWith({
      carriage_status: "cancelled",
      error: "",
    });

    await expect(
      executeCancelFbsCarriage(transport, { carriage_id: 2001 }),
    ).resolves.toEqual({ carriage_status: "cancelled", error: "" });
    expect(transport.requests[0]).toMatchObject({
      path: "/v1/carriage/cancel",
      retrySafety: "unsafe",
    });
  });

  it.each([
    [
      CREATE_FBS_CARRIAGE_OPERATION_ID,
      (transport: MockTransport) => executeCreateFbsCarriage(transport, {}),
      { carriage_id: "bad" },
    ],
    [
      APPROVE_FBS_CARRIAGE_OPERATION_ID,
      (transport: MockTransport) =>
        executeApproveFbsCarriage(transport, { carriage_id: 1 }),
      null,
    ],
    [
      SET_FBS_CARRIAGE_POSTINGS_OPERATION_ID,
      (transport: MockTransport) =>
        executeSetFbsCarriagePostings(transport, {
          carriage_id: 1,
          posting_numbers: [],
        }),
      { result: [{ result: "yes" }] },
    ],
    [
      CANCEL_FBS_CARRIAGE_OPERATION_ID,
      (transport: MockTransport) =>
        executeCancelFbsCarriage(transport, { carriage_id: 1 }),
      { carriage_status: 1 },
    ],
  ] as const)(
    "rejects malformed response for %s",
    async (operationId, run, body) => {
      await expect(run(transportWith(body))).rejects.toMatchObject({
        operationId,
      });
    },
  );
});
