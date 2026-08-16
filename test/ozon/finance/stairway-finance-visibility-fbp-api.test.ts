import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeGetFinanceAccrualByDayV1 } from "../../../packages/ozon/src/endpoints/finance/accrual/by-day/get/v1/execute.js";
import { executeGetFinanceAccrualPostingsV1 } from "../../../packages/ozon/src/endpoints/finance/accrual/postings/get/v1/execute.js";
import { executeListFinanceAccrualTypesV1 } from "../../../packages/ozon/src/endpoints/finance/accrual/types/list/v1/execute.js";
import { executeGetFinanceBalanceV1 } from "../../../packages/ozon/src/endpoints/finance/balance/get/v1/execute.js";
import { executeGetFbpPostingV1 } from "../../../packages/ozon/src/endpoints/posting/fbp/get/v1/execute.js";
import { executeGetProductStairwayDiscountByQuantityV1 } from "../../../packages/ozon/src/endpoints/product/stairway-discount/by-quantity/get/v1/execute.js";
import { executeGetProductVisibilityInfoV1 } from "../../../packages/ozon/src/endpoints/product/visibility/info/v1/execute.js";
import { executeSetProductVisibilityV1 } from "../../../packages/ozon/src/endpoints/product/visibility/set/v1/execute.js";
import { executeListDiscountTasksV2 } from "../../../packages/ozon/src/endpoints/promotion/discount-task/list/v2/execute.js";
import { executeCreateRealizationPostingReportV1 } from "../../../packages/ozon/src/endpoints/report/realization/posting/create/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon stairway, finance, visibility and FBP API", () => {
  it("maps and validates all ten operations", async () => {
    const stairway = transportWith({
      stairways: [
        {
          enabled: true,
          sku: 1001,
          stairway: { steps: [{ discount: 5, quantity: 2, step: 1 }] },
          status: "SUCCESS",
        },
      ],
    });
    await executeGetProductStairwayDiscountByQuantityV1(stairway, {
      skus: ["1001"],
    });
    expect(stairway.requests[0]).toMatchObject({
      path: "/v1/product/stairway-discount/by-quantity/get",
      retrySafety: "safe",
    });

    const balance = transportWith({
      total: { accrued: { currency_code: "RUB", value: 10 } },
    });
    await executeGetFinanceBalanceV1(balance, {
      date_from: "2026-08-01",
      date_to: "2026-08-15",
    });
    expect(balance.requests[0]).toMatchObject({
      path: "/v1/finance/balance",
      retrySafety: "safe",
    });

    const tasks = transportWith({
      tasks: [
        {
          id: 1,
          created_at: "2026-08-15T10:00:00Z",
          status: "NEW",
        },
      ],
    });
    await executeListDiscountTasksV2(tasks, { limit: 50, status: "ALL" });
    expect(tasks.requests[0]).toMatchObject({
      path: "/v2/actions/discounts-task/list",
      retrySafety: "safe",
    });

    const visibilitySet = transportWith({
      items: [
        {
          seller_item_placement: "OZON_SELECT",
          showcases_visibility_list: ["OZON", "SELECT"],
          sku: 1001,
        },
      ],
    });
    await executeSetProductVisibilityV1(visibilitySet, {
      item_placement: [{ placement: "OZON", sku: 1001 }],
    });
    expect(visibilitySet.requests[0]).toMatchObject({
      path: "/v1/product/visibility/set",
      retrySafety: "unsafe",
    });

    const postingAccruals = transportWith({
      posting_accruals: [
        {
          posting_number: "P-1",
          accruals: [
            {
              accrued: { amount: "10.00", currency: "RUB" },
              quantity: null,
            },
          ],
        },
      ],
    });
    await executeGetFinanceAccrualPostingsV1(postingAccruals, {
      posting_numbers: ["P-1"],
    });
    expect(postingAccruals.requests[0]).toMatchObject({
      path: "/v1/finance/accrual/postings",
      retrySafety: "safe",
    });

    const accrualTypes = transportWith({
      accrual_types: [{ id: 1, name: "sale" }],
    });
    await executeListFinanceAccrualTypesV1(accrualTypes);
    expect(accrualTypes.requests[0]).toMatchObject({
      path: "/v1/finance/accrual/types",
      retrySafety: "safe",
    });

    const accruals = transportWith({
      accruals: [
        {
          accrual_id: 1,
          accrued_category: "POSTING",
          posting: {
            products: [
              {
                sku: 1001,
                commission: {
                  sale_amount: { amount: "10.00", currency: "RUB" },
                },
              },
            ],
          },
        },
      ],
      last_id: "next",
    });
    await executeGetFinanceAccrualByDayV1(accruals, {
      date: "2026-08-15",
      last_id: "",
    });
    expect(accruals.requests[0]).toMatchObject({
      path: "/v1/finance/accrual/by-day",
      retrySafety: "safe",
    });

    const visibilityInfo = transportWith({
      items: [{ showcases_visibility: "SELECT", sku: 1001 }],
    });
    await executeGetProductVisibilityInfoV1(visibilityInfo, {
      skus: ["1001"],
    });
    expect(visibilityInfo.requests[0]).toMatchObject({
      path: "/v1/product/visibility/info",
      retrySafety: "safe",
    });

    const fbp = transportWith({
      posting: {
        order_date: "2026-08-15T10:00:00Z",
        posting_number: "P-1",
        products: [{ has_imei: false, quantity: 1, sku: 1001 }],
      },
    });
    await executeGetFbpPostingV1(fbp, { posting_number: "P-1" });
    expect(fbp.requests[0]).toMatchObject({
      path: "/v1/posting/fbp/get",
      retrySafety: "safe",
    });

    const report = transportWith({ code: "R-1" });
    await executeCreateRealizationPostingReportV1(report, {
      month: 8,
      year: 2023,
    });
    expect(report.requests[0]).toMatchObject({
      path: "/v1/report/realization/posting/create",
      retrySafety: "unsafe",
    });
  });

  it("rejects an invalid nested FBP timestamp", async () => {
    await expect(
      executeGetFbpPostingV1(
        transportWith({ posting: { order_date: "not-a-date" } }),
        { posting_number: "P-1" },
      ),
    ).rejects.toMatchObject({ operationId: "GetFbpPosting" });
  });
});
