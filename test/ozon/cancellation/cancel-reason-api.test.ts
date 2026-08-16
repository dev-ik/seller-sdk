import { readFile } from "node:fs/promises";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  ResponseValidationError,
  SellerClient,
} from "../../../packages/seller-sdk/src/index.js";
import {
  executeListCancelReasons,
  LIST_CANCEL_REASONS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/cancellation/list-reasons/execute.js";
import {
  executeListCancelReasonsByOrder,
  LIST_CANCEL_REASONS_BY_ORDER_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/cancellation/list-reasons-by-order/execute.js";
import {
  executeListCancelReasonsByPosting,
  LIST_CANCEL_REASONS_BY_POSTING_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/cancellation/list-reasons-by-posting/execute.js";

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

function jsonResponse(body: unknown): Response {
  return new Response(JSON.stringify(body), { status: 200 });
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Ozon CancelReasonAPI endpoints", () => {
  it("maps listCancelReasons without a request body", async () => {
    const body = await fixture("list-cancel-reasons.success.json");
    const transport = transportWith(body);

    await expect(executeListCancelReasons(transport)).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: LIST_CANCEL_REASONS_OPERATION_ID,
        method: "POST",
        path: "/v1/cancel-reason/list",
        retrySafety: "safe",
      },
    ]);
  });

  it("maps listCancelReasonsByOrder", async () => {
    const body = await fixture("list-cancel-reasons.success.json");
    const transport = transportWith(body);
    const input = { order_number: "TEST-ORDER-001" };

    await expect(
      executeListCancelReasonsByOrder(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: LIST_CANCEL_REASONS_BY_ORDER_OPERATION_ID,
        method: "POST",
        path: "/v1/cancel-reason/list-by-order",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it("maps listCancelReasonsByPosting", async () => {
    const body = await fixture("list-cancel-reasons.success.json");
    const transport = transportWith(body);
    const input = { posting_number: "TEST-POSTING-001" };

    await expect(
      executeListCancelReasonsByPosting(transport, input),
    ).resolves.toEqual(body);
    expect(transport.requests).toEqual([
      {
        operationId: LIST_CANCEL_REASONS_BY_POSTING_OPERATION_ID,
        method: "POST",
        path: "/v1/cancel-reason/list-by-posting",
        body: input,
        retrySafety: "safe",
      },
    ]);
  });

  it.each([
    [
      LIST_CANCEL_REASONS_OPERATION_ID,
      (transport: MockTransport) => executeListCancelReasons(transport),
    ],
    [
      LIST_CANCEL_REASONS_BY_ORDER_OPERATION_ID,
      (transport: MockTransport) =>
        executeListCancelReasonsByOrder(transport, {
          order_number: "TEST-ORDER-001",
        }),
    ],
    [
      LIST_CANCEL_REASONS_BY_POSTING_OPERATION_ID,
      (transport: MockTransport) =>
        executeListCancelReasonsByPosting(transport, {
          posting_number: "TEST-POSTING-001",
        }),
    ],
  ])("rejects malformed reasons for %s", async (operationId, execute) => {
    const transport = transportWith(
      await fixture("list-cancel-reasons.malformed.json"),
    );

    await expect(execute(transport)).rejects.toMatchObject({
      name: ResponseValidationError.name,
      operationId,
    });
  });

  it("exposes all methods through SellerClient with auth headers", async () => {
    const body = await fixture("list-cancel-reasons.success.json");
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () => jsonResponse(body));
    vi.stubGlobal("fetch", fetchMock);
    const seller = new SellerClient({ marketplace: "ozon", credentials });

    await seller.ozon.cancellations.listCancelReasons();
    await seller.ozon.cancellations.listCancelReasonsByOrder({
      order_number: "TEST-ORDER-001",
    });
    await seller.ozon.cancellations.listCancelReasonsByPosting({
      posting_number: "TEST-POSTING-001",
    });

    expect(fetchMock.mock.calls.map(([url]) => String(url))).toEqual([
      "https://api-seller.ozon.ru/v1/cancel-reason/list",
      "https://api-seller.ozon.ru/v1/cancel-reason/list-by-order",
      "https://api-seller.ozon.ru/v1/cancel-reason/list-by-posting",
    ]);
    for (const [, init] of fetchMock.mock.calls) {
      const headers = new Headers(init?.headers);
      expect(headers.get("Client-Id")).toBe(credentials.clientId);
      expect(headers.get("Api-Key")).toBe(credentials.apiKey);
    }
  });
});
