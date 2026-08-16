import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeOpenFbsPostingArbitrationV2 } from "../../../packages/ozon/src/endpoints/posting/fbs/arbitration/open/v2/execute.js";
import { executeCancelFbsPostingV2 } from "../../../packages/ozon/src/endpoints/posting/fbs/cancel/v2/execute.js";
import { executeGetFbsPostingCancelReasonsV1 } from "../../../packages/ozon/src/endpoints/posting/fbs/cancel-reason/get/v1/execute.js";
import { executeListFbsPostingCancelReasonsV2 } from "../../../packages/ozon/src/endpoints/posting/fbs/cancel-reason/list/v2/execute.js";
import { executeCreateFbsPackageLabelBatchV1 } from "../../../packages/ozon/src/endpoints/posting/fbs/package-label/create/v1/execute.js";
import { executeCreateFbsPackageLabelBatchV2 } from "../../../packages/ozon/src/endpoints/posting/fbs/package-label/create/v2/execute.js";
import { executeGetFbsPackageLabelBatchV1 } from "../../../packages/ozon/src/endpoints/posting/fbs/package-label/get/v1/execute.js";
import { executePrintFbsPackageLabelsV2 } from "../../../packages/ozon/src/endpoints/posting/fbs/package-label/print/v2/execute.js";
import { executeCancelFbsPostingProductsV2 } from "../../../packages/ozon/src/endpoints/posting/fbs/product/cancel/v2/execute.js";
import { executeSetFbsPostingsAwaitingDeliveryV2 } from "../../../packages/ozon/src/endpoints/posting/fbs/status/awaiting-delivery/v2/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon FBS labels and cancellation API", () => {
  it("maps all ten operations with correct retry safety", async () => {
    const pdf = transportWith(new ArrayBuffer(4));
    await executePrintFbsPackageLabelsV2(pdf, { posting_number: ["P-1"] });
    expect(pdf.requests[0]).toMatchObject({
      path: "/v2/posting/fbs/package-label",
      responseType: "array-buffer",
      retrySafety: "safe",
    });

    const createV1 = transportWith({ result: { task_id: 1 } });
    await executeCreateFbsPackageLabelBatchV1(createV1, {
      posting_number: ["P-1"],
    });
    expect(createV1.requests[0]).toMatchObject({
      path: "/v1/posting/fbs/package-label/create",
      retrySafety: "unsafe",
    });

    const createV2 = transportWith({
      result: { tasks: [{ task_id: 2, task_type: "big_label" }] },
    });
    await executeCreateFbsPackageLabelBatchV2(createV2, {
      posting_number: ["P-1"],
    });
    expect(createV2.requests[0]).toMatchObject({
      path: "/v2/posting/fbs/package-label/create",
      retrySafety: "unsafe",
    });

    const get = transportWith({
      result: {
        file_url: "https://example.test/labels.pdf",
        printed_postings_count: 1,
        status: "completed",
      },
    });
    await executeGetFbsPackageLabelBatchV1(get, { task_id: 2 });
    expect(get.requests[0]).toMatchObject({
      path: "/v1/posting/fbs/package-label/get",
      retrySafety: "safe",
    });

    const reasons = transportWith({
      result: [
        {
          posting_number: "P-1",
          reasons: [{ id: 352, title: "Нет товара", type_id: "seller" }],
        },
      ],
    });
    await executeGetFbsPostingCancelReasonsV1(reasons, {
      related_posting_numbers: ["P-1"],
    });
    expect(reasons.requests[0]).toMatchObject({
      path: "/v1/posting/fbs/cancel-reason",
      retrySafety: "safe",
    });

    const reasonList = transportWith({
      result: [{ id: 352, is_available_for_cancellation: true }],
    });
    await executeListFbsPostingCancelReasonsV2(reasonList);
    expect(reasonList.requests[0]).toMatchObject({
      path: "/v2/posting/fbs/cancel-reason/list",
      retrySafety: "safe",
    });

    const products = transportWith({ result: "P-2" });
    await executeCancelFbsPostingProductsV2(products, {
      cancel_reason_id: 352,
      cancel_reason_message: "Нет товара",
      items: [{ quantity: 1, sku: 10 }],
      posting_number: "P-1",
    });
    expect(products.requests[0]).toMatchObject({
      path: "/v2/posting/fbs/product/cancel",
      retrySafety: "unsafe",
    });

    const cancel = transportWith({ result: true });
    await executeCancelFbsPostingV2(cancel, {
      cancel_reason_id: 352,
      posting_number: "P-1",
    });
    expect(cancel.requests[0]).toMatchObject({
      path: "/v2/posting/fbs/cancel",
      retrySafety: "unsafe",
    });

    const arbitration = transportWith({ result: true });
    await executeOpenFbsPostingArbitrationV2(arbitration, {
      posting_number: ["P-1"],
    });
    expect(arbitration.requests[0]).toMatchObject({
      path: "/v2/posting/fbs/arbitration",
      retrySafety: "unsafe",
    });

    const awaiting = transportWith({ result: true });
    await executeSetFbsPostingsAwaitingDeliveryV2(awaiting, {
      posting_number: ["P-1"],
    });
    expect(awaiting.requests[0]).toMatchObject({
      path: "/v2/posting/fbs/awaiting-delivery",
      retrySafety: "unsafe",
    });
  });

  it("rejects non-binary label responses", async () => {
    await expect(
      executePrintFbsPackageLabelsV2(transportWith({}), {
        posting_number: ["P-1"],
      }),
    ).rejects.toMatchObject({
      operationId: "PostingAPI_PostingFBSPackageLabel",
    });
  });
});
