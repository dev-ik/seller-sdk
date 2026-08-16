import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeApproveCarriageContainersV1 } from "../../../packages/ozon/src/endpoints/carriage/container/approve/v1/execute.js";
import { executeCancelCarriageContainersV1 } from "../../../packages/ozon/src/endpoints/carriage/container/cancel/v1/execute.js";
import { executeCreateCarriageContainersV1 } from "../../../packages/ozon/src/endpoints/carriage/container/create/v1/execute.js";
import { executeFillCarriageContainerV1 } from "../../../packages/ozon/src/endpoints/carriage/container/fill/v1/execute.js";
import { executeGetCarriageContainerV1 } from "../../../packages/ozon/src/endpoints/carriage/container/get/v1/execute.js";
import { executeListCarriageContainersV1 } from "../../../packages/ozon/src/endpoints/carriage/container/list/v1/execute.js";
import { executePlaceCarriageContainersIntoV1 } from "../../../packages/ozon/src/endpoints/carriage/container/place-into/v1/execute.js";
import { executeRemoveCarriageContainersFromV1 } from "../../../packages/ozon/src/endpoints/carriage/container/remove-from/v1/execute.js";
import { executeRemoveCarriageContainerPostingsV1 } from "../../../packages/ozon/src/endpoints/carriage/container/remove-postings/v1/execute.js";
import { executeEditFbpPickupOrderDeliveryV1 } from "../../../packages/ozon/src/endpoints/fbp/order/pick-up/delivery/edit/v1/execute.js";

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}

describe("Ozon FBP pick-up and carriage containers", () => {
  it("maps all ten operations and retry policies", async () => {
    const calls: Array<[MockTransport, string, "safe" | "unsafe"]> = [];

    const pickup = transport({ is_error: false, row_version: 2 });
    await executeEditFbpPickupOrderDeliveryV1(pickup, {
      pickup_details: { sender_name: "Ivan", sender_phone: "+70000000000" },
      row_version: 1,
      supply_id: "s1",
    });
    calls.push([pickup, "/v1/fbp/order/pick-up/dlv/edit", "unsafe"]);

    const create = transport({ container_ids: ["10", "11"] });
    await executeCreateCarriageContainersV1(create, {
      cargo_type: "box",
      containers_count: 2,
      sort_type: "sort",
      warehouse_id: 3,
    });
    calls.push([create, "/v1/carriage/container/create", "unsafe"]);

    const fill = transport({ task_id: 1 });
    await executeFillCarriageContainerV1(fill, {
      container_id: 10,
      posting_numbers: ["p1"],
    });
    calls.push([fill, "/v1/carriage/container/fill", "unsafe"]);

    const approve = transport({ task_id: 2 });
    await executeApproveCarriageContainersV1(approve, {
      container_ids: ["10"],
    });
    calls.push([approve, "/v1/carriage/container/approve", "unsafe"]);

    const place = transport({ task_id: 3 });
    await executePlaceCarriageContainersIntoV1(place, {
      child_container_ids: ["10"],
      parent_container_id: 20,
    });
    calls.push([place, "/v1/carriage/container/place-into", "unsafe"]);

    const removePostings = transport({
      error_postings: [{ error_message: "not found", posting_number: "p2" }],
      task_id: 4,
    });
    await executeRemoveCarriageContainerPostingsV1(removePostings, {
      container_id: 10,
      posting_numbers: ["p2"],
    });
    calls.push([
      removePostings,
      "/v1/carriage/container/remove-postings",
      "unsafe",
    ]);

    const removeFrom = transport({ task_id: 5 });
    await executeRemoveCarriageContainersFromV1(removeFrom, {
      child_container_ids: ["10"],
      parent_container_id: 20,
    });
    calls.push([removeFrom, "/v1/carriage/container/remove-from", "unsafe"]);

    const cancel = transport({ task_id: 6 });
    await executeCancelCarriageContainersV1(cancel, { container_ids: ["10"] });
    calls.push([cancel, "/v1/carriage/container/cancel", "unsafe"]);

    const createdAt = "2026-09-01T10:00:00Z";
    const list = transport({
      containers: [{ container_id: 10, created_at: createdAt, weight: 2.5 }],
      cursor: "next",
    });
    await executeListCarriageContainersV1(list, {
      filter: {
        created_from: "2026-09-01T00:00:00Z",
        created_to: "2026-09-02T00:00:00Z",
        sort_type: "sort",
      },
      limit: 100,
      sort_dir: "ASC",
    });
    calls.push([list, "/v1/carriage/container/list", "safe"]);

    const get = transport({
      container_id: 10,
      created_at: createdAt,
      postings: [
        {
          in_process_at: createdAt,
          posting_number: "p1",
          products: [{ name: "Product", quantity: 1, sku: 101 }],
        },
      ],
      related_container_ids: ["11"],
    });
    await executeGetCarriageContainerV1(get, { container_id: 10 });
    calls.push([get, "/v1/carriage/container/get", "safe"]);

    for (const [mock, path, retrySafety] of calls) {
      expect(mock.requests[0]).toMatchObject({
        method: "POST",
        path,
        retrySafety,
      });
    }
  });

  it("rejects an invalid nested posting timestamp", async () => {
    await expect(
      executeGetCarriageContainerV1(
        transport({ postings: [{ in_process_at: "yesterday" }] }),
        { container_id: 10 },
      ),
    ).rejects.toMatchObject({ operationId: "CarriageContainerGet" });
  });
});
