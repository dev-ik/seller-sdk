import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeListFbsCarriageDeliveriesV1,
  LIST_FBS_CARRIAGE_DELIVERIES_V1_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/delivery/fbs/carriage/delivery-list/v1/execute.js";
import {
  executeListFbsCarriageDeliveriesV2,
  LIST_FBS_CARRIAGE_DELIVERIES_V2_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/delivery/fbs/carriage/delivery-list/v2/execute.js";
import {
  CREATE_FBS_ACT_OPERATION_ID,
  executeCreateFbsAct,
} from "../../../packages/ozon/src/endpoints/posting/fbs/act/create/v2/execute.js";
import {
  executeListAvailableFbsCarriages,
  LIST_AVAILABLE_FBS_CARRIAGES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/delivery/fbs/carriage/available-list/v1/execute.js";
import {
  executeGetFbsCarriage,
  GET_FBS_CARRIAGE_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/delivery/fbs/carriage/get/v1/execute.js";
import {
  executeSplitFbsPosting,
  SPLIT_FBS_POSTING_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/split/v1/execute.js";
import {
  executeListFbsActPostings,
  LIST_FBS_ACT_POSTINGS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/act/postings/v2/execute.js";
import {
  executeGetFbsActContainerLabels,
  GET_FBS_ACT_CONTAINER_LABELS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/act/container-labels/v2/execute.js";
import {
  executeGetFbsActBarcode,
  GET_FBS_ACT_BARCODE_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/act/barcode/v2/execute.js";
import {
  executeGetFbsActBarcodeText,
  GET_FBS_ACT_BARCODE_TEXT_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/posting/fbs/act/barcode-text/v2/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon FBS delivery and act API", () => {
  it("maps and validates all ten successful operations", async () => {
    const cases = [
      [
        executeListFbsCarriageDeliveriesV1(
          transportWith({ result: [{ warehouse_id: 1 }] }),
          {},
        ),
        "/v1/carriage/delivery/list",
      ],
      [
        executeListFbsCarriageDeliveriesV2(
          transportWith({ cursor: "next", has_next: true, methods: [] }),
          { limit: 100 },
        ),
        "/v2/carriage/delivery/list",
      ],
      [
        executeCreateFbsAct(transportWith({ result: { id: 1 } }), {
          delivery_method_id: 1,
        }),
        "/v2/posting/fbs/act/create",
      ],
      [
        executeListAvailableFbsCarriages(
          transportWith({ result: [{ carriage_id: 1 }] }),
          { delivery_method_id: 1 },
        ),
        "/v1/posting/carriage-available/list",
      ],
      [
        executeGetFbsCarriage(
          transportWith({ carriage_id: 1, available_actions: [] }),
          { carriage_id: 1 },
        ),
        "/v1/carriage/get",
      ],
      [
        executeSplitFbsPosting(
          transportWith({
            postings: [
              {
                posting_number: "TEST",
                products: [{ product_id: 1, quantity: 1 }],
              },
            ],
          }),
        ),
        "/v1/posting/fbs/split",
      ],
      [
        executeListFbsActPostings(
          transportWith({ result: [{ id: 1, products: [{ sku: 1 }] }] }),
          { id: 1 },
        ),
        "/v2/posting/fbs/act/get-postings",
      ],
      [
        executeGetFbsActContainerLabels(transportWith(new ArrayBuffer(2)), {
          id: 1,
        }),
        "/v2/posting/fbs/act/get-container-labels",
      ],
      [
        executeGetFbsActBarcode(transportWith(new ArrayBuffer(2)), { id: 1 }),
        "/v2/posting/fbs/act/get-barcode",
      ],
      [
        executeGetFbsActBarcodeText(transportWith({ result: "TEST" }), {
          id: 1,
        }),
        "/v2/posting/fbs/act/get-barcode/text",
      ],
    ] as const;
    for (const [result] of cases) await expect(result).resolves.toBeDefined();
  });

  it("uses the documented binary media types", async () => {
    const pdf = transportWith(new ArrayBuffer(1));
    await executeGetFbsActContainerLabels(pdf, { id: 1 });
    expect(pdf.requests[0]).toMatchObject({
      accept: "application/pdf",
      responseType: "array-buffer",
      retrySafety: "safe",
    });
    const png = transportWith(new ArrayBuffer(1));
    await executeGetFbsActBarcode(png, { id: 1 });
    expect(png.requests[0]).toMatchObject({
      accept: "image/png",
      responseType: "array-buffer",
      retrySafety: "safe",
    });
  });

  it.each([
    [
      LIST_FBS_CARRIAGE_DELIVERIES_V1_OPERATION_ID,
      (t: MockTransport) => executeListFbsCarriageDeliveriesV1(t, {}),
      { result: [{ warehouse_id: "bad" }] },
    ],
    [
      LIST_FBS_CARRIAGE_DELIVERIES_V2_OPERATION_ID,
      (t: MockTransport) => executeListFbsCarriageDeliveriesV2(t, { limit: 1 }),
      { has_next: "yes" },
    ],
    [
      CREATE_FBS_ACT_OPERATION_ID,
      (t: MockTransport) => executeCreateFbsAct(t, { delivery_method_id: 1 }),
      { result: { id: "bad" } },
    ],
    [
      LIST_AVAILABLE_FBS_CARRIAGES_OPERATION_ID,
      (t: MockTransport) =>
        executeListAvailableFbsCarriages(t, { delivery_method_id: 1 }),
      { result: [{ carriage_id: "bad" }] },
    ],
    [
      GET_FBS_CARRIAGE_OPERATION_ID,
      (t: MockTransport) => executeGetFbsCarriage(t, { carriage_id: 1 }),
      { carriage_id: "bad" },
    ],
    [
      SPLIT_FBS_POSTING_OPERATION_ID,
      (t: MockTransport) => executeSplitFbsPosting(t),
      { postings: [{ products: [{ product_id: "bad", quantity: 1 }] }] },
    ],
    [
      LIST_FBS_ACT_POSTINGS_OPERATION_ID,
      (t: MockTransport) => executeListFbsActPostings(t, { id: 1 }),
      { result: [{ id: "bad" }] },
    ],
    [
      GET_FBS_ACT_CONTAINER_LABELS_OPERATION_ID,
      (t: MockTransport) => executeGetFbsActContainerLabels(t, { id: 1 }),
      {},
    ],
    [
      GET_FBS_ACT_BARCODE_OPERATION_ID,
      (t: MockTransport) => executeGetFbsActBarcode(t, { id: 1 }),
      {},
    ],
    [
      GET_FBS_ACT_BARCODE_TEXT_OPERATION_ID,
      (t: MockTransport) => executeGetFbsActBarcodeText(t, { id: 1 }),
      { result: 1 },
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
