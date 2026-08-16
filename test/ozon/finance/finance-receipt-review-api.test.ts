import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeCreateCompensationReportV1 } from "../../../packages/ozon/src/endpoints/finance/compensation/create/v1/execute.js";
import { executeCreateDecompensationReportV1 } from "../../../packages/ozon/src/endpoints/finance/compensation/reversal/create/v1/execute.js";
import { executeGetFinanceProductsBuyoutV1 } from "../../../packages/ozon/src/endpoints/finance/products/buyout/v1/execute.js";
import { executeGetReceiptV1 } from "../../../packages/ozon/src/endpoints/receipt/get/v1/execute.js";
import { executeListSellerReceiptsV1 } from "../../../packages/ozon/src/endpoints/receipt/list/v1/execute.js";
import { executeUploadReceiptV1 } from "../../../packages/ozon/src/endpoints/receipt/upload/v1/execute.js";
import { executeCreateReviewCommentV1 } from "../../../packages/ozon/src/endpoints/review/comment/create/v1/execute.js";
import { executeDeleteReviewCommentV1 } from "../../../packages/ozon/src/endpoints/review/comment/delete/v1/execute.js";
import { executeDeleteReviewCommentV2 } from "../../../packages/ozon/src/endpoints/review/comment/delete/v2/execute.js";
import { executeListReviewCommentsV1 } from "../../../packages/ozon/src/endpoints/review/comment/list/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon finance, receipt and review API", () => {
  it("maps and validates all ten operations", async () => {
    const buyout = transportWith({ products: [{ sku: 1, amount: 100 }] });
    await executeGetFinanceProductsBuyoutV1(buyout, {
      date_from: "2026-08-01",
      date_to: "2026-08-15",
    });
    expect(buyout.requests[0]).toMatchObject({
      path: "/v1/finance/products/buyout",
      retrySafety: "safe",
    });

    const compensation = transportWith({ result: { code: "R-1" } });
    await executeCreateCompensationReportV1(compensation, { date: "2026-07" });
    expect(compensation.requests[0]).toMatchObject({
      path: "/v1/finance/compensation",
      retrySafety: "unsafe",
    });

    const decompensation = transportWith({ result: { code: "R-2" } });
    await executeCreateDecompensationReportV1(decompensation, {
      date: "2026-07",
    });
    expect(decompensation.requests[0]).toMatchObject({
      path: "/v1/finance/decompensation",
      retrySafety: "unsafe",
    });

    const receipt = transportWith({ content: "JVBERi0xLjQ=" });
    await executeGetReceiptV1(receipt, { receipt_id: "receipt-1" });
    expect(receipt.requests[0]).toMatchObject({
      path: "/v1/receipts/get",
      retrySafety: "safe",
    });

    const receipts = transportWith({
      has_next: false,
      receipts: [{ receipt_id: "receipt-1", type: "INCOMING" }],
    });
    await executeListSellerReceiptsV1(receipts, { page: 0, page_size: 100 });
    expect(receipts.requests[0]).toMatchObject({
      path: "/v1/receipts/seller/list",
      retrySafety: "safe",
    });

    const upload = transportWith({ receipt_id: "receipt-2" });
    await executeUploadReceiptV1(upload, {
      content: new Blob(["pdf"], { type: "application/pdf" }),
      filename: "receipt.pdf",
      operation_type: "COMMODITY",
      posting_numbers: ["P-1", "P-2"],
      receipt_number: "N-1",
      type: "INCOMING",
    });
    expect(upload.requests[0]).toMatchObject({
      path: "/v1/receipts/upload",
      bodyEncoding: "form-data",
      retrySafety: "unsafe",
    });
    const uploadBody = upload.requests[0]?.body;
    expect(uploadBody).toBeInstanceOf(FormData);
    if (!(uploadBody instanceof FormData)) throw new Error("Expected FormData");
    expect(uploadBody.getAll("posting_numbers")).toEqual(["P-1", "P-2"]);

    const createComment = transportWith({ comment_id: "C-1" });
    await executeCreateReviewCommentV1(createComment, {
      review_id: "R-1",
      text: "Спасибо!",
    });
    expect(createComment.requests[0]).toMatchObject({
      path: "/v1/review/comment/create",
      retrySafety: "unsafe",
    });

    const deleteV1 = transportWith({});
    await executeDeleteReviewCommentV1(deleteV1, { comment_id: "C-1" });
    expect(deleteV1.requests[0]).toMatchObject({
      path: "/v1/review/comment/delete",
      retrySafety: "unsafe",
    });

    const deleteV2 = transportWith(undefined);
    await executeDeleteReviewCommentV2(deleteV2, { comment_id: "C-2", sku: 1 });
    expect(deleteV2.requests[0]).toMatchObject({
      path: "/v2/review/comment/delete",
      retrySafety: "unsafe",
    });

    const comments = transportWith({
      comments: [{ id: "C-3", published_at: "2026-08-15T00:00:00Z" }],
      offset: 1,
    });
    await executeListReviewCommentsV1(comments, {
      limit: 20,
      review_id: "R-1",
    });
    expect(comments.requests[0]).toMatchObject({
      path: "/v1/review/comment/list",
      retrySafety: "safe",
    });
  });

  it("rejects invalid receipt enum values", async () => {
    await expect(
      executeListSellerReceiptsV1(
        transportWith({ receipts: [{ type: "UNKNOWN" }] }),
      ),
    ).rejects.toMatchObject({ operationId: "ReceiptsSellerList" });
  });
});
