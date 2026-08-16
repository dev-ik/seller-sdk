import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeCreateFbpDirectTplDeliveryDraftV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/direct/tpl-delivery/create/v1/execute.js";
import { executeEditFbpDirectTplDeliveryDraftV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/direct/tpl-delivery/edit/v1/execute.js";
import { executeListFbpDraftsV1 } from "../../../packages/ozon/src/endpoints/fbp/draft/list/v1/execute.js";
import { executeCancelFbpDropOffOrderV1 } from "../../../packages/ozon/src/endpoints/fbp/order/drop-off/cancel/v1/execute.js";
import { executeEditFbpDropOffOrderDeliveryV1 } from "../../../packages/ozon/src/endpoints/fbp/order/drop-off/delivery/edit/v1/execute.js";
import { executeGetFbpDropOffOrderTimetableV1 } from "../../../packages/ozon/src/endpoints/fbp/order/drop-off/timetable/v1/execute.js";
import { executeGetFbpOrderV1 } from "../../../packages/ozon/src/endpoints/fbp/order/get/v1/execute.js";
import { executeListFbpOrdersV1 } from "../../../packages/ozon/src/endpoints/fbp/order/list/v1/execute.js";
import { executeCancelFbpPickupOrderV1 } from "../../../packages/ozon/src/endpoints/fbp/order/pick-up/cancel/v1/execute.js";
import { executeListFbpPostingsV1 } from "../../../packages/ozon/src/endpoints/posting/fbp/list/v1/execute.js";

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

describe("Ozon FBP draft, order, and posting lists", () => {
  it("maps all ten operations and retry policies", async () => {
    const calls: Array<[MockTransport, string, "safe" | "unsafe"]> = [];
    const start = "2026-09-01T10:00:00Z";

    const drafts = transport({
      has_next: false,
      items: [{ created_at: start, status: "NEW", supply_id: "s1" }],
      last_id: 1,
    });
    await executeListFbpDraftsV1(drafts, { count: 50 });
    calls.push([drafts, "/v1/fbp/draft/list", "safe"]);

    const createTpl = transport({
      draft_id: 2,
      row_version: 1,
      supply_id: "s2",
    });
    await executeCreateFbpDirectTplDeliveryDraftV1(createTpl, {
      bundle_id: "b1",
      delivery_details: {
        timeslot_start: start,
        tracking_number: "track-1",
        transport_company_name: "Carrier",
      },
      package_units_count: 2,
      warehouse_id: 3,
    });
    calls.push([createTpl, "/v1/fbp/draft/direct/tpl-dlv/create", "unsafe"]);

    const editTpl = transport({ is_error: false, row_version: 2 });
    await executeEditFbpDirectTplDeliveryDraftV1(editTpl, {
      row_version: 1,
      supply_id: "s2",
      tracking_number: "track-2",
      transport_company_name: "Carrier",
    });
    calls.push([editTpl, "/v1/fbp/draft/direct/tpl-dlv/edit", "unsafe"]);

    const cancelDropOff = transport({ is_error: false, row_version: 2 });
    await executeCancelFbpDropOffOrderV1(cancelDropOff, { supply_id: "s3" });
    calls.push([cancelDropOff, "/v1/fbp/order/drop-off/cancel", "unsafe"]);

    const editDropOff = transport({ row_version: 3 });
    await executeEditFbpDropOffOrderDeliveryV1(editDropOff, {
      drop_off_date: "2026-09-02",
      row_version: 2,
      supply_id: "s3",
    });
    calls.push([editDropOff, "/v1/fbp/order/drop-off/dlv/edit", "unsafe"]);

    const timetable = transport({
      calendar: [
        { calendar_item: { is_holiday: false }, day_of_week: "MONDAY" },
      ],
    });
    await executeGetFbpDropOffOrderTimetableV1(timetable, {
      drop_off_point_id: 4,
      province_uuid: "p1",
      warehouse_id: 3,
    });
    calls.push([timetable, "/v1/fbp/order/drop-off/timetable", "safe"]);

    const order = transport({
      attention_reasons: ["OLD"],
      created_date: start,
      status: "READY_TO_SUPPLY",
      supply_id: "s3",
    });
    await executeGetFbpOrderV1(order, { supply_id: "s3" });
    calls.push([order, "/v1/fbp/order/get", "safe"]);

    const orders = transport({
      has_next: false,
      items: [{ status: "READY_TO_SUPPLY", supply_id: "s3" }],
      last_id: 3,
    });
    await executeListFbpOrdersV1(orders, { count: 50 });
    calls.push([orders, "/v1/fbp/order/list", "safe"]);

    const postings = transport({
      cursor: "next",
      postings: [
        {
          financial_data: {
            products: [
              {
                actions: [{ action_id: "a1", is_from_seller: true }],
                posting_commission: { amount: 10, percent: 5 },
                product_id: 101,
              },
            ],
          },
          posting_number: "p1",
          products: [
            { customer_price: { amount: "100", currency: "RUB" }, sku: 101 },
          ],
          status: "delivered",
        },
      ],
    });
    await executeListFbpPostingsV1(postings, {
      filter: { since: start, statuses: ["delivered"] },
      limit: 50,
      sort_dir: "DESC",
    });
    calls.push([postings, "/v1/posting/fbp/list", "safe"]);

    const cancelPickup = transport({ is_error: false, row_version: 4 });
    await executeCancelFbpPickupOrderV1(cancelPickup, { supply_id: "s4" });
    calls.push([cancelPickup, "/v1/fbp/order/pick-up/cancel", "unsafe"]);

    for (const [mock, path, retrySafety] of calls) {
      expect(mock.requests[0]).toMatchObject({
        method: "POST",
        path,
        retrySafety,
      });
    }
  });

  it("rejects an undocumented nested order status", async () => {
    await expect(
      executeListFbpOrdersV1(transport({ items: [{ status: "TELEPORTED" }] }), {
        count: 1,
      }),
    ).rejects.toMatchObject({ operationId: "FbpAPI_FbpOrderList" });
  });
});
