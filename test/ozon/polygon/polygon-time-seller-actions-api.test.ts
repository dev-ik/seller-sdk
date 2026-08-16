import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeSetDeliveryPolygonTimeV1 } from "../../../packages/ozon/src/endpoints/polygon/time/set/v1/execute.js";
import { executeUpdateDeliveryPolygonCoordinatesV1 } from "../../../packages/ozon/src/endpoints/polygon/time/coordinates/update/v1/execute.js";
import { executeCreateSellerDiscountActionV1 } from "../../../packages/ozon/src/endpoints/seller-action/create/discount/v1/execute.js";
import { executeCreateSellerDiscountWithConditionActionV1 } from "../../../packages/ozon/src/endpoints/seller-action/create/discount-with-condition/v1/execute.js";
import { executeCreateSellerInstallmentActionV1 } from "../../../packages/ozon/src/endpoints/seller-action/create/installment/v1/execute.js";
import { executeCreateSellerMultiLevelDiscountActionV1 } from "../../../packages/ozon/src/endpoints/seller-action/create/multi-level-discount/v1/execute.js";
import { executeCreateSellerVoucherActionV1 } from "../../../packages/ozon/src/endpoints/seller-action/create/voucher/v1/execute.js";
import { executeUpdateSellerDiscountActionV1 } from "../../../packages/ozon/src/endpoints/seller-action/update/discount/v1/execute.js";
import { executeUpdateSellerDiscountWithConditionActionV1 } from "../../../packages/ozon/src/endpoints/seller-action/update/discount-with-condition/v1/execute.js";
import { executeUpdateSellerInstallmentActionV1 } from "../../../packages/ozon/src/endpoints/seller-action/update/installment/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

const period = {
  date_end: "2026-09-30T23:59:59Z",
  date_start: "2026-09-01T00:00:00Z",
};

describe("Ozon polygon time and seller actions API", () => {
  it("maps all ten mutations without automatic retry", async () => {
    const calls: Array<[MockTransport, string]> = [];
    const coordinates = transportWith(undefined);
    await executeUpdateDeliveryPolygonCoordinatesV1(coordinates, {
      coordinates: "[[[55.7,37.6]]]",
      delivery_method_id: 2,
      polygon_id: 3,
      warehouse_id: 1,
    });
    calls.push([coordinates, "/v1/polygon/time/coordinates/update"]);

    const time = transportWith(undefined);
    await executeSetDeliveryPolygonTimeV1(time, {
      current_time: 30,
      delivery_method_id: 2,
      new_time: 45,
      polygon_id: 3,
      warehouse_id: 1,
    });
    calls.push([time, "/v1/polygon/time/set"]);

    const discount = transportWith({ action_id: 1 });
    await executeCreateSellerDiscountActionV1(discount, {
      ...period,
      min_action_percent: 10,
      title: "Discount",
    });
    calls.push([discount, "/v1/seller-actions/create/discount"]);

    const conditional = transportWith({ action_id: 2 });
    await executeCreateSellerDiscountWithConditionActionV1(conditional, {
      ...period,
      discount_type: "PERCENT",
      discount_value: 10,
      min_order_amount: 1000,
      title: "Order discount",
    });
    calls.push([
      conditional,
      "/v1/seller-actions/create/discount-with-condition",
    ]);

    const installment = transportWith({ action_id: 3 });
    await executeCreateSellerInstallmentActionV1(installment, {
      date_start: period.date_start,
      title: "Installment",
    });
    calls.push([installment, "/v1/seller-actions/create/installment"]);

    const levels = transportWith({ action_id: 4 });
    await executeCreateSellerMultiLevelDiscountActionV1(levels, {
      ...period,
      discount_levels: [
        { discount_value: 5, order_amount: 1000 },
        { discount_value: 10, order_amount: 2000 },
      ],
      discount_type: "PERCENT",
      title: "Levels",
    });
    calls.push([levels, "/v1/seller-actions/create/multi-level-discount"]);

    const voucher = transportWith({ action_id: 5 });
    await executeCreateSellerVoucherActionV1(voucher, {
      ...period,
      budget: 10000,
      discount_type: "CURRENCY",
      discount_value: 500,
      title: "Voucher",
      voucher_parameters: { count_codes: 100, is_private: false, type: "ONE" },
    });
    calls.push([voucher, "/v1/seller-actions/create/voucher"]);

    const updateDiscount = transportWith(undefined);
    await executeUpdateSellerDiscountActionV1(updateDiscount, {
      action_id: 1,
      action_parameters: { ...period, title: "Updated" },
    });
    calls.push([updateDiscount, "/v1/seller-actions/update/discount"]);

    const updateConditional = transportWith(undefined);
    await executeUpdateSellerDiscountWithConditionActionV1(updateConditional, {
      action_id: 2,
      action_parameters: {
        ...period,
        discount_value: 15,
        min_order_amount: 1500,
        title: "Updated",
      },
    });
    calls.push([
      updateConditional,
      "/v1/seller-actions/update/discount-with-condition",
    ]);

    const updateInstallment = transportWith(undefined);
    await executeUpdateSellerInstallmentActionV1(updateInstallment, {
      action_id: 3,
      action_parameters: { date_start: period.date_start, title: "Updated" },
    });
    calls.push([updateInstallment, "/v1/seller-actions/update/installment"]);

    for (const [transport, path] of calls) {
      expect(transport.requests[0]).toMatchObject({
        path,
        retrySafety: "unsafe",
      });
    }
  });

  it("rejects a non-integer action identifier", async () => {
    await expect(
      executeCreateSellerDiscountActionV1(transportWith({ action_id: 1.5 }), {
        ...period,
        min_action_percent: 10,
      }),
    ).rejects.toMatchObject({ operationId: "SellerActionsCreateDiscount" });
  });
});
