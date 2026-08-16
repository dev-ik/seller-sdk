import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeGetChatHistoryV3 } from "../../../packages/ozon/src/endpoints/chat/history/v3/execute.js";
import { executeListChatsV3 } from "../../../packages/ozon/src/endpoints/chat/list/v3/execute.js";
import { executeListFinanceCashFlowV1 } from "../../../packages/ozon/src/endpoints/finance/cash-flow/list/v1/execute.js";
import { executeCreateDiscountedReportV1 } from "../../../packages/ozon/src/endpoints/report/discounted/create/v1/execute.js";
import { executeGetReportInfoV1 } from "../../../packages/ozon/src/endpoints/report/info/v1/execute.js";
import { executeListReportsV1 } from "../../../packages/ozon/src/endpoints/report/list/v1/execute.js";
import { executeCreatePostingsReportV1 } from "../../../packages/ozon/src/endpoints/report/postings/create/v1/execute.js";
import { executeCreateProductsReportV1 } from "../../../packages/ozon/src/endpoints/report/products/create/v1/execute.js";
import { executeCreateReturnsReportV2 } from "../../../packages/ozon/src/endpoints/report/returns/create/v2/execute.js";
import { executeCreateWarehouseStockReportV1 } from "../../../packages/ozon/src/endpoints/report/warehouse/stock/create/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon chat, report and finance API", () => {
  it("maps and validates all ten operations", async () => {
    const chats = transportWith({
      chats: [{ chat: { chat_id: "C-1", created_at: "2026-08-15T00:00:00Z" } }],
    });
    await executeListChatsV3(chats, { limit: 20 });
    expect(chats.requests[0]).toMatchObject({
      path: "/v3/chat/list",
      body: { limit: 20 },
      retrySafety: "safe",
    });

    const history = transportWith({
      messages: [{ message_id: 1, data: ["hello"] }],
    });
    await executeGetChatHistoryV3(history, { chat_id: "C-1", limit: 50 });
    expect(history.requests[0]).toMatchObject({
      path: "/v3/chat/history",
      retrySafety: "safe",
    });

    const info = transportWith({ result: { code: "R-1", status: "success" } });
    await executeGetReportInfoV1(info, { code: "R-1" });
    expect(info.requests[0]).toMatchObject({
      path: "/v1/report/info",
      retrySafety: "safe",
    });

    const reports = transportWith({ result: { reports: [], total: 0 } });
    await executeListReportsV1(reports, { page: 1, page_size: 100 });
    expect(reports.requests[0]).toMatchObject({
      path: "/v1/report/list",
      retrySafety: "safe",
    });

    const products = transportWith({ result: { code: "R-2" } });
    await executeCreateProductsReportV1(products, { visibility: "ALL" });
    expect(products.requests[0]).toMatchObject({
      path: "/v1/report/products/create",
      retrySafety: "unsafe",
    });

    const returns = transportWith({ result: { code: "R-3" } });
    await executeCreateReturnsReportV2(returns, {
      filter: {
        date_from: "2026-08-01",
        date_to: "2026-08-15",
        status: "Approved",
      },
    });
    expect(returns.requests[0]).toMatchObject({
      path: "/v2/report/returns/create",
      retrySafety: "unsafe",
    });

    const postings = transportWith({ result: { code: "R-4" } });
    await executeCreatePostingsReportV1(postings, {
      filter: {
        processed_at_from: "2026-08-01T00:00:00Z",
        processed_at_to: "2026-08-15T00:00:00Z",
      },
    });
    expect(postings.requests[0]).toMatchObject({
      path: "/v1/report/postings/create",
      retrySafety: "unsafe",
    });

    const finance = transportWith({
      result: { cash_flows: [{ orders_amount: 100 }], page_count: 1 },
    });
    await executeListFinanceCashFlowV1(finance, {
      date: { from: "2026-08-01T00:00:00Z", to: "2026-08-15T00:00:00Z" },
      page: 1,
      page_size: 100,
    });
    expect(finance.requests[0]).toMatchObject({
      path: "/v1/finance/cash-flow-statement/list",
      retrySafety: "safe",
    });

    const discounted = transportWith({ code: "R-5" });
    await executeCreateDiscountedReportV1(discounted);
    expect(discounted.requests[0]).toMatchObject({
      path: "/v1/report/discounted/create",
      body: {},
      retrySafety: "unsafe",
    });

    const stock = transportWith({ result: { code: "R-6" } });
    await executeCreateWarehouseStockReportV1(stock, { warehouseId: ["W-1"] });
    expect(stock.requests[0]).toMatchObject({
      path: "/v1/report/warehouse/stock",
      retrySafety: "unsafe",
    });
  });

  it("rejects invalid nested finance data", async () => {
    await expect(
      executeListFinanceCashFlowV1(
        transportWith({ result: { cash_flows: [{ period: { id: "bad" } }] } }),
        {
          date: { from: "2026-08-01T00:00:00Z", to: "2026-08-15T00:00:00Z" },
          page: 1,
          page_size: 100,
        },
      ),
    ).rejects.toMatchObject({
      operationId: "FinanceAPI_FinanceCashFlowStatementList",
    });
  });
});
