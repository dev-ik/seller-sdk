import { readFile } from "node:fs/promises";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  ApiError,
  ResponseValidationError,
  SellerClient,
} from "../../../packages/seller-sdk/src/index.js";
import {
  APPROVE_CONDITIONAL_CANCELLATION_OPERATION_ID,
  executeApproveConditionalCancellation,
} from "../../../packages/ozon/src/endpoints/cancellation/conditional/approve/execute.js";
import {
  executeListConditionalCancellations,
  LIST_CONDITIONAL_CANCELLATIONS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/cancellation/conditional/list/execute.js";
import {
  executeRejectConditionalCancellation,
  REJECT_CONDITIONAL_CANCELLATION_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/cancellation/conditional/reject/execute.js";

const credentials = {
  clientId: "test-client-id",
  apiKey: "test-api-key",
};

async function fixture(name: string): Promise<unknown> {
  const fileUrl = new URL(`../../fixtures/ozon/${name}`, import.meta.url);
  return JSON.parse(await readFile(fileUrl, "utf8")) as unknown;
}

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status });
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Ozon CancellationAPI endpoints", () => {
  it("maps the conditional cancellation list as a safe paginated request", async () => {
    const body = await fixture("list-conditional-cancellations.success.json");
    const transport = transportWith(body);
    const input = {
      filters: {
        cancellation_initiator: ["CLIENT" as const],
        posting_number: ["TEST-POSTING-001"],
        state: "ON_APPROVAL" as const,
      },
      last_id: 0,
      limit: 500,
      with: { counter: true },
    };

    await expect(
      executeListConditionalCancellations(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: LIST_CONDITIONAL_CANCELLATIONS_OPERATION_ID,
        method: "POST",
        path: "/v2/conditional-cancellation/list",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it("rejects a malformed cancellation list response", async () => {
    const transport = transportWith(
      await fixture("list-conditional-cancellations.malformed.json"),
    );

    await expect(
      executeListConditionalCancellations(transport, { limit: 100 }),
    ).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: LIST_CONDITIONAL_CANCELLATIONS_OPERATION_ID,
    });
  });

  it.each([
    [
      APPROVE_CONDITIONAL_CANCELLATION_OPERATION_ID,
      "/v2/conditional-cancellation/approve",
      executeApproveConditionalCancellation,
    ],
    [
      REJECT_CONDITIONAL_CANCELLATION_OPERATION_ID,
      "/v2/conditional-cancellation/reject",
      executeRejectConditionalCancellation,
    ],
  ])("maps %s as an unsafe mutation", async (operationId, path, execute) => {
    const transport = transportWith(
      await fixture("conditional-cancellation-decision.success.json"),
    );
    const input = { cancellation_id: 700000001, comment: "Тест" };

    await expect(execute(transport, input)).resolves.toBeUndefined();
    expect(transport.requests).toEqual([
      {
        operationId,
        method: "POST",
        path,
        body: input,
        retrySafety: "unsafe",
      },
    ]);
  });

  it("rejects an undocumented structured mutation response", async () => {
    const transport = transportWith(
      await fixture("conditional-cancellation-decision.malformed.json"),
    );

    await expect(
      executeApproveConditionalCancellation(transport, {
        cancellation_id: 700000001,
      }),
    ).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId: APPROVE_CONDITIONAL_CANCELLATION_OPERATION_ID,
    });
  });

  it("exposes all three methods through SellerClient with auth headers", async () => {
    const listBody = await fixture(
      "list-conditional-cancellations.success.json",
    );
    const responses = [jsonResponse(listBody), new Response(), new Response()];
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () => responses.shift()!);
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await seller.ozon.cancellations.listConditionalCancellations({
      limit: 100,
    });
    await seller.ozon.cancellations.approveConditionalCancellation({
      cancellation_id: 700000001,
    });
    await seller.ozon.cancellations.rejectConditionalCancellation({
      cancellation_id: 700000002,
      comment: "Тестовая причина",
    });

    expect(fetchMock.mock.calls.map(([url]) => String(url))).toEqual([
      "https://api-seller.ozon.ru/v2/conditional-cancellation/list",
      "https://api-seller.ozon.ru/v2/conditional-cancellation/approve",
      "https://api-seller.ozon.ru/v2/conditional-cancellation/reject",
    ]);
    for (const [, init] of fetchMock.mock.calls) {
      const headers = new Headers(init?.headers);
      expect(headers.get("Client-Id")).toBe(credentials.clientId);
      expect(headers.get("Api-Key")).toBe(credentials.apiKey);
    }
  });

  it("does not retry an indeterminate decision failure", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () =>
        jsonResponse({ code: "UNAVAILABLE", message: "Try later" }, 503),
      );
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await expect(
      seller.ozon.cancellations.approveConditionalCancellation({
        cancellation_id: 700000001,
      }),
    ).rejects.toBeInstanceOf(ApiError);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
