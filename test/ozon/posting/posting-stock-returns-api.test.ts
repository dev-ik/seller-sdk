import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeVerifyFbsPickupCodeV1 } from "../../../packages/ozon/src/endpoints/posting/fbs/pickup-code/verify/v1/execute.js";
import { executeGetEtgbDeclarationsV1 } from "../../../packages/ozon/src/endpoints/posting/global/etgb/get/v1/execute.js";
import { executeListUnpaidLegalProductsV1 } from "../../../packages/ozon/src/endpoints/posting/unpaid-legal/product/list/v1/execute.js";
import { executeListFboProductStocksByWarehouseV1 } from "../../../packages/ozon/src/endpoints/product/info/stocks-by-warehouse/fbo/v1/execute.js";
import { executeGetFbsReturnCompanyInfoV1 } from "../../../packages/ozon/src/endpoints/returns/company/fbs/info/v1/execute.js";
import { executeListReturnsV1 } from "../../../packages/ozon/src/endpoints/returns/list/v1/execute.js";
import { executeSetRfbsReturnActionV1 } from "../../../packages/ozon/src/endpoints/returns/rfbs/action/set/v1/execute.js";
import { executeGetRfbsReturnV2 } from "../../../packages/ozon/src/endpoints/returns/rfbs/get/v2/execute.js";
import { executeListRfbsReturnsV2 } from "../../../packages/ozon/src/endpoints/returns/rfbs/list/v2/execute.js";
import { executeGetUtilizationHistoryV1 } from "../../../packages/ozon/src/endpoints/returns/settings/utilization/history/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}
const from = "2026-08-01T00:00:00Z";
const to = "2026-08-15T00:00:00Z";

describe("Ozon posting, FBO stock and returns API", () => {
  it("maps and validates all ten operations", async () => {
    const pickup = transportWith({ valid: true });
    await executeVerifyFbsPickupCodeV1(pickup, {
      pickup_code: "1234",
      posting_number: "P-1",
    });
    expect(pickup.requests[0]).toMatchObject({
      path: "/v1/posting/fbs/pick-up-code/verify",
      retrySafety: "safe",
    });

    const etgb = transportWith({
      result: [
        {
          posting_number: "P-1",
          etgb: {
            date: "2026-08-01",
            number: "E-1",
            url: "https://example.test/e.pdf",
          },
        },
      ],
    });
    await executeGetEtgbDeclarationsV1(etgb, { date: { from, to } });
    expect(etgb.requests[0]).toMatchObject({
      path: "/v1/posting/global/etgb",
      retrySafety: "safe",
    });

    const unpaid = transportWith({
      cursor: "next",
      products: [{ product_id: 1, quantity: 2 }],
    });
    await executeListUnpaidLegalProductsV1(unpaid, { limit: 100 });
    expect(unpaid.requests[0]).toMatchObject({
      path: "/v1/posting/unpaid-legal/product/list",
      retrySafety: "safe",
    });

    const stocks = transportWith({
      cursor: "next",
      has_next: true,
      products: [{ present: 5, reserved: 1, sku: 10, warehouse_id: 20 }],
    });
    await executeListFboProductStocksByWarehouseV1(stocks, {
      limit: 100,
      skus: ["10"],
    });
    expect(stocks.requests[0]).toMatchObject({
      path: "/v1/product/info/stocks-by-warehouse/fbo",
      retrySafety: "safe",
    });

    const rfbsList = transportWith({
      returns: {
        return_id: 1,
        created_at: from,
        product: { price: 100, sku: 10 },
      },
    });
    await executeListRfbsReturnsV2(rfbsList, { limit: 50 });
    expect(rfbsList.requests[0]).toMatchObject({
      path: "/v2/returns/rfbs/list",
      retrySafety: "safe",
    });

    const rfbsGet = transportWith({
      returns: {
        return_number: "R-1",
        available_actions: [{ id: 1, name: "Approve" }],
        rejection_reason: [{ id: 2, is_comment_required: true }],
      },
    });
    await executeGetRfbsReturnV2(rfbsGet, { return_id: 1 });
    expect(rfbsGet.requests[0]).toMatchObject({
      path: "/v2/returns/rfbs/get",
      retrySafety: "safe",
    });

    const action = transportWith(undefined);
    await executeSetRfbsReturnActionV1(action, { id: 1, return_id: 1 });
    expect(action.requests[0]).toMatchObject({
      path: "/v1/returns/rfbs/action/set",
      retrySafety: "unsafe",
    });

    const returns = transportWith({
      has_next: false,
      returns: [
        {
          id: 1,
          product: { price: { currency_code: "RUB", price: 100 }, quantity: 1 },
          visual: { change_moment: from, status: { id: 1 } },
        },
      ],
    });
    await executeListReturnsV1(returns, { limit: 100 });
    expect(returns.requests[0]).toMatchObject({
      path: "/v1/returns/list",
      retrySafety: "safe",
    });

    const company = transportWith({
      drop_off_points: [
        {
          id: 1,
          box_count: 2,
          pass_info: { count: 1, is_required: true },
          warehouses_ids: ["10"],
        },
      ],
      has_next: false,
    });
    await executeGetFbsReturnCompanyInfoV1(company, {
      pagination: { limit: 100 },
    });
    expect(company.requests[0]).toMatchObject({
      path: "/v1/returns/company/fbs/info",
      retrySafety: "safe",
    });

    const history = transportWith({
      history: [
        { descriptions: ["enabled"], updated_at: from, user_name: "operator" },
      ],
    });
    await executeGetUtilizationHistoryV1(history);
    expect(history.requests[0]).toMatchObject({
      path: "/v1/returns/settings/utilization/history",
      retrySafety: "safe",
    });
  });

  it("rejects invalid nested return data", async () => {
    await expect(
      executeListReturnsV1(
        transportWith({ returns: [{ product: { quantity: "bad" } }] }),
        { limit: 1 },
      ),
    ).rejects.toMatchObject({ operationId: "returnsList" });
  });
});
