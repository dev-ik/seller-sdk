import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeArchiveSellerActionV1 } from "../../../packages/ozon/src/endpoints/seller-action/archive/v1/execute.js";
import { executeChangeSellerActionActivityV1 } from "../../../packages/ozon/src/endpoints/seller-action/change-activity/v1/execute.js";
import { executeListSellerActionsV1 } from "../../../packages/ozon/src/endpoints/seller-action/list/v1/execute.js";
import { executeAddSellerActionProductsV1 } from "../../../packages/ozon/src/endpoints/seller-action/products/add/v1/execute.js";
import { executeListSellerActionProductCandidatesV1 } from "../../../packages/ozon/src/endpoints/seller-action/products/candidates/v1/execute.js";
import { executeDeleteSellerActionProductsV1 } from "../../../packages/ozon/src/endpoints/seller-action/products/delete/v1/execute.js";
import { executeListSellerActionProductsV1 } from "../../../packages/ozon/src/endpoints/seller-action/products/list/v1/execute.js";
import { executeUpdateSellerMultiLevelDiscountActionV1 } from "../../../packages/ozon/src/endpoints/seller-action/update/multi-level-discount/v1/execute.js";
import { executeUpdateSellerVoucherActionV1 } from "../../../packages/ozon/src/endpoints/seller-action/update/voucher/v1/execute.js";
import { executeGetSellerActionVoucherFileV1 } from "../../../packages/ozon/src/endpoints/seller-action/voucher/get/v1/execute.js";
function t(body: unknown) {
  const x = new MockTransport();
  x.enqueueResponse({ status: 200, headers: new Headers(), body });
  return x;
}
describe("Ozon seller action management API", () => {
  it("maps all ten operations", async () => {
    const calls: Array<[MockTransport, string, string]> = [];
    const period = {
      date_start: "2026-09-01T00:00:00Z",
      date_end: "2026-09-30T23:59:59Z",
    };
    const multi = t(undefined);
    await executeUpdateSellerMultiLevelDiscountActionV1(multi, {
      action_id: 1,
      action_parameters: {
        ...period,
        discount_levels: [
          { discount_value: 5, order_amount: 1000 },
          { discount_value: 10, order_amount: 2000 },
        ],
        title: "Levels",
      },
    });
    calls.push([
      multi,
      "/v1/seller-actions/update/multi-level-discount",
      "unsafe",
    ]);
    const voucher = t(undefined);
    await executeUpdateSellerVoucherActionV1(voucher, {
      action_id: 1,
      action_parameters: {
        ...period,
        budget: 1000,
        discount_value: 100,
        title: "Voucher",
      },
    });
    calls.push([voucher, "/v1/seller-actions/update/voucher", "unsafe"]);
    const add = t(undefined);
    await executeAddSellerActionProductsV1(add, {
      action_id: 1,
      products: [{ sku: 123, discount_percent: 10 }],
    });
    calls.push([add, "/v1/seller-actions/products/add", "unsafe"]);
    const page = {
      cursor: 2,
      has_next: false,
      products: [{ product_id: 1, quant_type: "BOX", sku: ["123"] }],
    };
    const candidates = t(page);
    await executeListSellerActionProductCandidatesV1(candidates, {
      action_id: 1,
      limit: 100,
    });
    calls.push([candidates, "/v1/seller-actions/products/candidates", "safe"]);
    const del = t(undefined);
    await executeDeleteSellerActionProductsV1(del, {
      action_id: 1,
      skus: ["123"],
    });
    calls.push([del, "/v1/seller-actions/products/delete", "unsafe"]);
    const products = t(page);
    await executeListSellerActionProductsV1(products, {
      action_id: 1,
      limit: 100,
    });
    calls.push([products, "/v1/seller-actions/products/list", "safe"]);
    const archive = t(undefined);
    await executeArchiveSellerActionV1(archive, { action_id: 1 });
    calls.push([archive, "/v1/seller-actions/archive", "unsafe"]);
    const activity = t(undefined);
    await executeChangeSellerActionActivityV1(activity, {
      action_id: 1,
      is_turn_on: true,
    });
    calls.push([activity, "/v1/seller-actions/change-activity", "unsafe"]);
    const list = t({
      actions: [
        {
          action_id: 1,
          action_parameters: { status: "ACTIVE", type: "DISCOUNT" },
        },
      ],
      total: 1,
    });
    await executeListSellerActionsV1(list, { limit: 100 });
    calls.push([list, "/v1/seller-actions/list", "safe"]);
    const file = t({ file: "https://example.test/vouchers.csv" });
    await executeGetSellerActionVoucherFileV1(file, { action_id: 1 });
    calls.push([file, "/v1/seller-actions/voucher/get", "safe"]);
    for (const [transport, path, retrySafety] of calls)
      expect(transport.requests[0]).toMatchObject({ path, retrySafety });
  });
  it("rejects an invalid nested quant type", async () => {
    await expect(
      executeListSellerActionProductCandidatesV1(
        t({ products: [{ quant_type: "UNKNOWN" }] }),
        { action_id: 1, limit: 100 },
      ),
    ).rejects.toMatchObject({ operationId: "SellerActionsProductsCandidates" });
  });
});
