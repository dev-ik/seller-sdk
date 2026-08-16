import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeCreateB2BSalesReportV1 } from "../../../packages/ozon/src/endpoints/finance/document/b2b-sales/create/v1/execute.js";
import { executeGetB2BSalesJsonReportV1 } from "../../../packages/ozon/src/endpoints/finance/document/b2b-sales/json/v1/execute.js";
import { executeCreateMutualSettlementReportV1 } from "../../../packages/ozon/src/endpoints/finance/mutual-settlement/create/v1/execute.js";
import { executeGetRealizationReportV2 } from "../../../packages/ozon/src/endpoints/finance/realization/get/v2/execute.js";
import { executeGetRealizationPostingReportV1 } from "../../../packages/ozon/src/endpoints/finance/realization/posting/v1/execute.js";
import { executeListFinanceTransactionsV3 } from "../../../packages/ozon/src/endpoints/finance/transaction/list/v3/execute.js";
import { executeGetFinanceTransactionTotalsV3 } from "../../../packages/ozon/src/endpoints/finance/transaction/totals/v3/execute.js";
import { OzonValues } from "../../../packages/ozon/src/index.js";
import { executeCreateMarkedProductsSalesReportV1 } from "../../../packages/ozon/src/endpoints/report/marked-products/sales/create/v1/execute.js";
import { executeCreatePlacementByProductsReportV1 } from "../../../packages/ozon/src/endpoints/report/placement/by-products/create/v1/execute.js";
import { executeCreatePlacementBySuppliesReportV1 } from "../../../packages/ozon/src/endpoints/report/placement/by-supplies/create/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon report and finance documents API", () => {
  it("exports selectable finance transaction type values", () => {
    expect(OzonValues.FinanceTransactionType).toEqual({
      All: "all",
      Orders: "orders",
      Returns: "returns",
      Services: "services",
      Compensation: "compensation",
      TransferDelivery: "transferDelivery",
      Other: "other",
    });
    expect(OzonValues.ProductListVisibility.Visible).toBe("VISIBLE");
    expect(OzonValues.ProductReportVisibility.InSale).toBe("IN_SALE");
    expect(OzonValues.ReturnReportStatus.Approved).toBe("Approved");
    expect(OzonValues.ChatListStatus.Opened).toBe("OPENED");
    expect(OzonValues.Language.Ru).toBe("RU");
  });

  it("maps and validates all ten operations", async () => {
    const products = transportWith({ code: "R-1" });
    await executeCreatePlacementByProductsReportV1(products, {
      date_from: "2026-08-01",
      date_to: "2026-08-15",
    });
    expect(products.requests[0]).toMatchObject({
      path: "/v1/report/placement/by-products/create",
      retrySafety: "unsafe",
    });

    const supplies = transportWith({ code: "R-2" });
    await executeCreatePlacementBySuppliesReportV1(supplies, {
      date_from: "2026-08-01",
      date_to: "2026-08-15",
    });
    expect(supplies.requests[0]).toMatchObject({
      path: "/v1/report/placement/by-supplies/create",
      retrySafety: "unsafe",
    });

    const marked = transportWith({ result: { code: "R-3" } });
    await executeCreateMarkedProductsSalesReportV1(marked, {
      date: { from: "2026-08-01", to: "2026-08-15" },
    });
    expect(marked.requests[0]).toMatchObject({
      path: "/v1/report/marked-products-sales/create",
      retrySafety: "unsafe",
    });

    const realization = transportWith({
      result: { rows: [{ rowNumber: 1, item: { sku: 123 } }] },
    });
    await executeGetRealizationReportV2(realization, { month: 7, year: 2026 });
    expect(realization.requests[0]).toMatchObject({
      path: "/v2/finance/realization",
      retrySafety: "safe",
    });

    const posting = transportWith({
      rows: [{ row_number: 1, order: { posting_number: "P-1" } }],
    });
    await executeGetRealizationPostingReportV1(posting, {
      month: 7,
      year: 2026,
    });
    expect(posting.requests[0]).toMatchObject({
      path: "/v1/finance/realization/posting",
      retrySafety: "safe",
    });

    const transactions = transportWith({
      result: { operations: [{ operation_id: 1, amount: -5 }], page_count: 1 },
    });
    await executeListFinanceTransactionsV3(transactions, {
      filter: { posting_number: "P-1" },
      page: 1,
      page_size: 100,
    });
    expect(transactions.requests[0]).toMatchObject({
      path: "/v3/finance/transaction/list",
      retrySafety: "safe",
    });

    const totals = transportWith({ result: { accruals_for_sale: 100 } });
    await executeGetFinanceTransactionTotalsV3(totals, {
      date: { from: "2026-08-01T00:00:00Z", to: "2026-08-15T00:00:00Z" },
    });
    expect(totals.requests[0]).toMatchObject({
      path: "/v3/finance/transaction/totals",
      retrySafety: "safe",
    });

    const b2b = transportWith({ result: { code: "R-4" } });
    await executeCreateB2BSalesReportV1(b2b, { date: "2026-07" });
    expect(b2b.requests[0]).toMatchObject({
      path: "/v1/finance/document-b2b-sales",
      retrySafety: "unsafe",
    });

    const b2bJson = transportWith({
      invoices: [{ info: { type: "UPD" }, operations: [{ type: "DELIVERY" }] }],
    });
    await executeGetB2BSalesJsonReportV1(b2bJson, { date: "2019-01" });
    expect(b2bJson.requests[0]).toMatchObject({
      path: "/v1/finance/document-b2b-sales/json",
      retrySafety: "safe",
    });

    const mutual = transportWith({ result: { code: "R-5" } });
    await executeCreateMutualSettlementReportV1(mutual, { date: "2026-07" });
    expect(mutual.requests[0]).toMatchObject({
      path: "/v1/finance/mutual-settlement",
      retrySafety: "unsafe",
    });
  });

  it("rejects an unknown B2B operation enum value", async () => {
    await expect(
      executeGetB2BSalesJsonReportV1(
        transportWith({ invoices: [{ operations: [{ type: "UNKNOWN" }] }] }),
        { date: "2019-01" },
      ),
    ).rejects.toMatchObject({
      operationId: "ReportAPI_CreateDocumentB2BSalesJSONReport",
    });
  });
});
