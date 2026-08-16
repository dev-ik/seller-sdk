import { readFile } from "node:fs/promises";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  ApiError,
  ResponseValidationError,
  SellerClient,
} from "../../../packages/seller-sdk/src/index.js";
import {
  CANCEL_ORDER_OPERATION_ID,
  executeCancelOrder,
} from "../../../packages/ozon/src/endpoints/order/cancel/execute.js";
import {
  CHECK_ORDER_CANCELLATION_OPERATION_ID,
  executeCheckOrderCancellation,
} from "../../../packages/ozon/src/endpoints/order/check-cancellation/execute.js";
import {
  CREATE_ORDER_OPERATION_ID,
  executeCreateOrder,
} from "../../../packages/ozon/src/endpoints/order/create/execute.js";
import type { CreateOrderRequest } from "../../../packages/ozon/src/endpoints/order/create/types.js";
import {
  executeGetOrderCancellationStatus,
  GET_ORDER_CANCELLATION_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/order/get-cancellation-status/execute.js";

const credentials = { clientId: "test-client-id", apiKey: "test-api-key" };
async function fixture(name: string): Promise<unknown> {
  return JSON.parse(
    await readFile(
      new URL(`../../fixtures/ozon/${name}`, import.meta.url),
      "utf8",
    ),
  ) as unknown;
}
function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}
function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status });
}
const createInput: CreateOrderRequest = {
  buyer: { first_name: "TEST", last_name: "BUYER", phone: "+00000000000" },
  recipient: {
    recipient_first_name: "TEST",
    recipient_last_name: "RECIPIENT",
    recipient_phone: "+00000000000",
  },
  delivery: { pick_up: { map_point_id: 100000001 } },
  delivery_schema: "FBO",
  splits: [
    {
      delivery_method: {
        delivery_method_id: 200000001,
        delivery_type: "PVZ",
        logistic_date_range: {
          from: "2026-08-15T10:00:00Z",
          to: "2026-08-16T10:00:00Z",
        },
        timeslot_id: 300000001,
      },
      items: [
        {
          price: { currency_code: "RUB", units: 100 },
          quantity: 1,
          sku: 400000001,
        },
      ],
      warehouse_id: 500000001,
    },
  ],
};

afterEach(() => vi.unstubAllGlobals());

describe("Ozon OrderAPI endpoints", () => {
  it.each([
    [
      CREATE_ORDER_OPERATION_ID,
      "/v2/order/create",
      "unsafe",
      "create-order.success.json",
      createInput,
      executeCreateOrder,
    ],
    [
      CANCEL_ORDER_OPERATION_ID,
      "/v1/order/cancel",
      "unsafe",
      "cancel-order.success.json",
      { order_number: "TEST-ORDER-004", reason_id: 101 },
      executeCancelOrder,
    ],
    [
      CHECK_ORDER_CANCELLATION_OPERATION_ID,
      "/v1/order/cancel/check",
      "safe",
      "check-order-cancellation.success.json",
      { order_number: "TEST-ORDER-004" },
      executeCheckOrderCancellation,
    ],
    [
      GET_ORDER_CANCELLATION_STATUS_OPERATION_ID,
      "/v1/order/cancel/status",
      "safe",
      "get-order-cancellation-status.success.json",
      { order_number: "TEST-ORDER-004" },
      executeGetOrderCancellationStatus,
    ],
  ])(
    "maps %s",
    async (operationId, path, retrySafety, fixtureName, input, execute) => {
      const body = await fixture(fixtureName as string);
      const transport = transportWith(body);
      await expect(
        (execute as (t: MockTransport, i: never) => Promise<unknown>)(
          transport,
          input as never,
        ),
      ).resolves.toEqual(body);
      expect(transport.requests).toEqual([
        { operationId, method: "POST", path, body: input, retrySafety },
      ]);
    },
  );

  it.each([
    [
      CREATE_ORDER_OPERATION_ID,
      "create-order.malformed.json",
      (t: MockTransport) => executeCreateOrder(t, createInput),
    ],
    [
      CANCEL_ORDER_OPERATION_ID,
      "cancel-order.malformed.json",
      (t: MockTransport) =>
        executeCancelOrder(t, {
          order_number: "TEST-ORDER-004",
          reason_id: 101,
        }),
    ],
    [
      CHECK_ORDER_CANCELLATION_OPERATION_ID,
      "check-order-cancellation.malformed.json",
      (t: MockTransport) =>
        executeCheckOrderCancellation(t, { order_number: "TEST-ORDER-004" }),
    ],
    [
      GET_ORDER_CANCELLATION_STATUS_OPERATION_ID,
      "get-order-cancellation-status.malformed.json",
      (t: MockTransport) =>
        executeGetOrderCancellationStatus(t, {
          order_number: "TEST-ORDER-004",
        }),
    ],
  ])(
    "rejects malformed response for %s",
    async (operationId, fixtureName, execute) => {
      await expect(
        execute(transportWith(await fixture(fixtureName))),
      ).rejects.toMatchObject({
        name: ResponseValidationError.name,
        operationId,
      });
    },
  );

  it("exposes all methods through SellerClient", async () => {
    const responses = await Promise.all([
      fixture("create-order.success.json"),
      fixture("cancel-order.success.json"),
      fixture("check-order-cancellation.success.json"),
      fixture("get-order-cancellation-status.success.json"),
    ]);
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () => jsonResponse(responses.shift()));
    vi.stubGlobal("fetch", fetchMock);
    const ozon = new SellerClient({ marketplace: "ozon", credentials }).ozon;
    await ozon.orders.createOrder(createInput);
    await ozon.orders.cancelOrder({
      order_number: "TEST-ORDER-004",
      reason_id: 101,
    });
    await ozon.orders.checkOrderCancellation({
      order_number: "TEST-ORDER-004",
    });
    await ozon.orders.getOrderCancellationStatus({
      order_number: "TEST-ORDER-004",
    });
    expect(fetchMock.mock.calls.map(([url]) => String(url))).toEqual([
      "https://api-seller.ozon.ru/v2/order/create",
      "https://api-seller.ozon.ru/v1/order/cancel",
      "https://api-seller.ozon.ru/v1/order/cancel/check",
      "https://api-seller.ozon.ru/v1/order/cancel/status",
    ]);
  });

  it("does not retry create failures", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementation(async () =>
        jsonResponse({ code: "UNAVAILABLE" }, 503),
      );
    vi.stubGlobal("fetch", fetchMock);
    const ozon = new SellerClient({ marketplace: "ozon", credentials }).ozon;
    await expect(ozon.orders.createOrder(createInput)).rejects.toBeInstanceOf(
      ApiError,
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
