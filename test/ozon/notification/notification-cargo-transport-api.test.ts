import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import { executeGetCargoesV2 } from "../../../packages/ozon/src/endpoints/cargoes/get/v2/execute.js";
import { executeDeleteCargoesV2 } from "../../../packages/ozon/src/endpoints/cargoes/delete/v2/execute.js";
import { executeGetCargoesDeleteStatusV2 } from "../../../packages/ozon/src/endpoints/cargoes/delete/status/v2/execute.js";
import { executeActivateTransportCargoesV1 } from "../../../packages/ozon/src/endpoints/cargoes/transport/activate/v1/execute.js";
import { executeGetTransportCargoesActivationStatusV1 } from "../../../packages/ozon/src/endpoints/cargoes/transport/activate/status/v1/execute.js";
import { executeCreateTransportCargoesV1 } from "../../../packages/ozon/src/endpoints/cargoes/transport/create/v1/execute.js";
import { executeGetTransportCargoesCreateStatusV1 } from "../../../packages/ozon/src/endpoints/cargoes/transport/create/status/v1/execute.js";
import { executeBindTransportCargoesV1 } from "../../../packages/ozon/src/endpoints/cargoes/transport/bind/v1/execute.js";
import { executeGetTransportCargoesBindStatusV1 } from "../../../packages/ozon/src/endpoints/cargoes/transport/bind/status/v1/execute.js";
import { executeListNotificationPushTypesV1 } from "../../../packages/ozon/src/endpoints/notification/push-type/list/v1/execute.js";
function t(body: unknown) {
  const x = new MockTransport();
  x.enqueueResponse({ status: 200, headers: new Headers(), body });
  return x;
}
describe("Ozon notification and cargo transport API", () => {
  it("maps all ten operations", async () => {
    const calls: Array<[MockTransport, string, string]> = [];
    const push = t({
      types: [{ description: "Order", type: "TYPE_ORDER_NEW" }],
    });
    await executeListNotificationPushTypesV1(push);
    calls.push([push, "/v1/notification/push-type/list", "safe"]);
    const get = t({
      supplies: [{ cargoes: [{ cargo_id: 1, type: "BOX" }], supply_id: 2 }],
    });
    await executeGetCargoesV2(get, {
      supplies: [{ cargo_ids: ["1"], supply_id: 2 }],
    });
    calls.push([get, "/v2/cargoes/get", "safe"]);
    const del = t({ operation_id: "op-1" });
    await executeDeleteCargoesV2(del, {
      cargo_ids: ["1"],
      supply_id: 2,
      transport_cargo_deletion_type: "UNBIND_CONTAINED_CARGOES",
    });
    calls.push([del, "/v2/cargoes/delete", "unsafe"]);
    const delStatus = t({ status: "SUCCESS" });
    await executeGetCargoesDeleteStatusV2(delStatus, { operation_id: "op-1" });
    calls.push([delStatus, "/v2/cargoes/delete/status", "safe"]);
    const activate = t({ operation_id: "op-2" });
    await executeActivateTransportCargoesV1(activate, {
      is_transport: true,
      supply_id: 2,
    });
    calls.push([activate, "/v1/cargoes/transport/activate", "unsafe"]);
    const activateStatus = t({ status: "SUCCESS" });
    await executeGetTransportCargoesActivationStatusV1(activateStatus, {
      operation_id: "op-2",
    });
    calls.push([
      activateStatus,
      "/v1/cargoes/transport/activate/status",
      "safe",
    ]);
    const create = t({ operation_id: "op-3" });
    await executeCreateTransportCargoesV1(create, {
      supply_id: 2,
      transport_cargoes: [{ count: 1, type: "PALLET" }],
    });
    calls.push([create, "/v1/cargoes/transport/create", "unsafe"]);
    const createStatus = t({
      result: { transport_cargoes: [{ id: 3, type: "PALLET" }] },
      status: "SUCCESS",
    });
    await executeGetTransportCargoesCreateStatusV1(createStatus, {
      operation_id: "op-3",
    });
    calls.push([createStatus, "/v1/cargoes/transport/create/status", "safe"]);
    const bind = t({ operation_id: "op-4" });
    await executeBindTransportCargoesV1(bind, {
      supply_id: 2,
      transport_cargo_bind: [{ cargo_ids: ["1"], transport_cargo_id: 3 }],
    });
    calls.push([bind, "/v1/cargoes/transport/bind", "unsafe"]);
    const bindStatus = t({ status: "SUCCESS" });
    await executeGetTransportCargoesBindStatusV1(bindStatus, {
      operation_id: "op-4",
    });
    calls.push([bindStatus, "/v1/cargoes/transport/bind/status", "safe"]);
    for (const [transport, path, retrySafety] of calls)
      expect(transport.requests[0]).toMatchObject({ path, retrySafety });
  });
  it("rejects an invalid nested cargo status", async () => {
    await expect(
      executeGetCargoesV2(
        t({
          supplies: [{ cargoes: [{ tracking_info: { status: "UNKNOWN" } }] }],
        }),
        { supplies: [{ cargo_ids: [], supply_id: 2 }] },
      ),
    ).rejects.toMatchObject({ operationId: "CargoesGetV2" });
  });
});
