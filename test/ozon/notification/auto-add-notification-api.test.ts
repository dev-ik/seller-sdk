import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeListAutoAddProductCandidatesV1 } from "../../../packages/ozon/src/endpoints/actions/auto-add/products/candidates/v1/execute.js";
import { executeDeleteAutoAddProductsV1 } from "../../../packages/ozon/src/endpoints/actions/auto-add/products/delete/v1/execute.js";
import { executeListAutoAddProductsV1 } from "../../../packages/ozon/src/endpoints/actions/auto-add/products/list/v1/execute.js";
import { executeUpdateAutoAddProductsV1 } from "../../../packages/ozon/src/endpoints/actions/auto-add/products/update/v1/execute.js";
import { executeCheckNotificationV1 } from "../../../packages/ozon/src/endpoints/notification/check/v1/execute.js";
import { executeDeleteNotificationV1 } from "../../../packages/ozon/src/endpoints/notification/delete/v1/execute.js";
import { executeEnableNotificationV1 } from "../../../packages/ozon/src/endpoints/notification/enable/v1/execute.js";
import { executeListNotificationsV1 } from "../../../packages/ozon/src/endpoints/notification/list/v1/execute.js";
import { executeSetNotificationV1 } from "../../../packages/ozon/src/endpoints/notification/set/v1/execute.js";
import { executeUpdateNotificationV1 } from "../../../packages/ozon/src/endpoints/notification/update/v1/execute.js";

function transportWith(body: unknown): MockTransport {
  const transport = new MockTransport();
  transport.enqueueResponse({ status: 200, headers: new Headers(), body });
  return transport;
}

describe("Ozon auto-add products and notification API", () => {
  it("maps and validates all ten operations", async () => {
    const calls: Array<[MockTransport, string, "safe" | "unsafe"]> = [];
    const request = {
      action_id: 1,
      auto_add_date: "2026-09-01T00:00:00Z",
      limit: 100,
    };
    const page = { products: [{ product_id: 2, sku: 3 }], total: 1 };

    const list = transportWith(page);
    await executeListAutoAddProductsV1(list, request);
    calls.push([list, "/v1/actions/auto-add/products/list", "safe"]);

    const candidates = transportWith(page);
    await executeListAutoAddProductCandidatesV1(candidates, request);
    calls.push([
      candidates,
      "/v1/actions/auto-add/products/candidates",
      "safe",
    ]);

    const remove = transportWith({ product_ids: ["2"] });
    await executeDeleteAutoAddProductsV1(remove, {
      action_id: 1,
      auto_add_date: request.auto_add_date,
      product_ids: ["2"],
    });
    calls.push([remove, "/v1/actions/auto-add/products/delete", "unsafe"]);

    const update = transportWith({ updated_ids: ["2"] });
    await executeUpdateAutoAddProductsV1(update, {
      action_id: 1,
      auto_add_date: request.auto_add_date,
      to_update: [{ action_price: 100, product_id: 2 }],
    });
    calls.push([update, "/v1/actions/auto-add/products/update", "unsafe"]);

    const set = transportWith(undefined);
    await executeSetNotificationV1(set, {
      types: ["TYPE_NEW_POSTING"],
      url: "https://example.test/webhook",
    });
    calls.push([set, "/v1/notification/set", "unsafe"]);

    const change = transportWith(undefined);
    await executeUpdateNotificationV1(change, {
      id: 1,
      types: ["TYPE_ORDER_NEW"],
    });
    calls.push([change, "/v1/notification/update", "unsafe"]);

    const del = transportWith(undefined);
    await executeDeleteNotificationV1(del, { id: 1 });
    calls.push([del, "/v1/notification/delete", "unsafe"]);

    const check = transportWith({ is_active: true });
    await executeCheckNotificationV1(check, {
      url: "https://example.test/webhook",
    });
    calls.push([check, "/v1/notification/check", "safe"]);

    const enable = transportWith(undefined);
    await executeEnableNotificationV1(enable, { enabled: true, id: 1 });
    calls.push([enable, "/v1/notification/enable", "unsafe"]);

    const notifications = transportWith({
      urls: [
        {
          created_at: "2026-08-15T10:00:00Z",
          enable: true,
          id: 1,
          types: [{ description: "New order", type: "TYPE_ORDER_NEW" }],
          url: "https://example.test/webhook",
        },
      ],
    });
    await executeListNotificationsV1(notifications);
    calls.push([notifications, "/v1/notification/list", "safe"]);

    for (const [transport, path, retrySafety] of calls) {
      expect(transport.requests[0]).toMatchObject({ path, retrySafety });
    }
  });

  it("rejects an unknown nested notification type", async () => {
    await expect(
      executeListNotificationsV1(
        transportWith({
          urls: [
            {
              created_at: "2026-08-15T10:00:00Z",
              enable: true,
              id: 1,
              types: [{ description: "Unknown", type: "UNKNOWN" }],
              url: "https://example.test/webhook",
            },
          ],
        }),
      ),
    ).rejects.toMatchObject({ operationId: "NotificationList" });
  });
});
