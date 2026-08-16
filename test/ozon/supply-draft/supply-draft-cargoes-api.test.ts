import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeGetSupplyDraftInfo,
  GET_SUPPLY_DRAFT_INFO_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/info/create/v2/execute.js";
import {
  executeGetSupplyDraftTimeslots,
  GET_SUPPLY_DRAFT_TIMESLOTS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/info/timeslot/v2/execute.js";
import {
  executeCreateSupplyCargoes,
  CREATE_SUPPLY_CARGOES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/cargoes/create/v1/execute.js";
import {
  executeGetSupplyCargoesCreateInfo,
  GET_SUPPLY_CARGOES_CREATE_INFO_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/cargoes/create-info/v2/execute.js";
import {
  executeGetSupplyCargoes,
  GET_SUPPLY_CARGOES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/cargoes/get/v1/execute.js";
import {
  executeDeleteSupplyCargoes,
  DELETE_SUPPLY_CARGOES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/cargoes/delete/v1/execute.js";
import {
  executeGetSupplyCargoesDeleteStatus,
  GET_SUPPLY_CARGOES_DELETE_STATUS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/cargoes/delete-status/v1/execute.js";
import {
  executeGetSupplyCargoesRules,
  GET_SUPPLY_CARGOES_RULES_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/cargoes/rules/get/v1/execute.js";
import {
  executeCreateSupplyCargoLabels,
  CREATE_SUPPLY_CARGO_LABELS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/cargoes/label/create/v1/execute.js";
import {
  executeGetSupplyCargoLabels,
  GET_SUPPLY_CARGO_LABELS_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/cargoes/label/get/v1/execute.js";
function t(body: unknown) {
  const x = new MockTransport();
  x.enqueueResponse({ status: 200, headers: new Headers(), body });
  return x;
}
const timeslotInput = {
  date_from: "2026-08-20",
  date_to: "2026-08-21",
  draft_id: 1,
  supply_type: "DIRECT" as const,
  selected_cluster_warehouses: [
    { macrolocal_cluster_id: 2, storage_warehouse_id: 3 },
  ],
};
const createInput = {
  cargoes: [
    {
      key: "test-cargo",
      value: {
        type: "BOX" as const,
        items: [{ barcode: "TEST", quantity: 1 }],
      },
    },
  ],
  supply_id: 1,
};
describe("Supply draft cargoes API", () => {
  it("gets draft info", async () => {
    const x = t({ status: "SUCCESS", clusters: [{ supply_type: "DIRECT" }] });
    await executeGetSupplyDraftInfo(x, { draft_id: 1 });
    expect(x.requests[0]).toMatchObject({
      path: "/v2/draft/create/info",
      retrySafety: "safe",
    });
  });
  it("gets draft timeslots", async () => {
    const x = t({
      error_reason: "UNSPECIFIED",
      result: { requested_date_from: "2026-08-20" },
    });
    await executeGetSupplyDraftTimeslots(x, timeslotInput);
    expect(x.requests[0]).toMatchObject({
      path: "/v2/draft/timeslot/info",
      retrySafety: "safe",
    });
  });
  it("creates cargoes unsafely", async () => {
    const x = t({ operation_id: "op" });
    await executeCreateSupplyCargoes(x, createInput);
    expect(x.requests[0]).toMatchObject({
      path: "/v1/cargoes/create",
      retrySafety: "unsafe",
    });
  });
  it("gets cargo creation info", async () => {
    const x = t({
      status: "SUCCESS",
      result: { cargoes: [{ key: "test", value: { cargo_id: 1 } }] },
    });
    await executeGetSupplyCargoesCreateInfo(x, { operation_id: "op" });
    expect(x.requests[0]).toMatchObject({
      path: "/v2/cargoes/create/info",
      retrySafety: "safe",
    });
  });
  it("gets cargoes", async () => {
    const x = t({
      supply: [{ supply_id: 1, cargoes: [{ cargo_id: 2, type: "BOX" }] }],
    });
    await executeGetSupplyCargoes(x, { supply_ids: ["1"] });
    expect(x.requests[0]).toMatchObject({
      path: "/v1/cargoes/get",
      retrySafety: "safe",
    });
  });
  it("deletes cargoes unsafely", async () => {
    const x = t({ operation_id: "op" });
    await executeDeleteSupplyCargoes(x, { cargo_ids: ["2"], supply_id: 1 });
    expect(x.requests[0]).toMatchObject({
      path: "/v1/cargoes/delete",
      retrySafety: "unsafe",
    });
  });
  it("gets deletion status", async () => {
    const x = t({ status: "SUCCESS" });
    await executeGetSupplyCargoesDeleteStatus(x, { operation_id: "op" });
    expect(x.requests[0]).toMatchObject({
      path: "/v1/cargoes/delete/status",
      retrySafety: "safe",
    });
  });
  it("gets cargo rules", async () => {
    const x = t({
      supply_check_lists: [
        { supply_id: 1, cargoes_presents_rule: { count: 1, satisfied: true } },
      ],
    });
    await executeGetSupplyCargoesRules(x, { supply_ids: ["1"] });
    expect(x.requests[0]).toMatchObject({
      path: "/v1/cargoes/rules/get",
      retrySafety: "safe",
    });
  });
  it("creates cargo labels unsafely", async () => {
    const x = t({ operation_id: "op" });
    await executeCreateSupplyCargoLabels(x, {
      supply_id: 1,
      cargoes: [{ cargo_id: 2 }],
    });
    expect(x.requests[0]).toMatchObject({
      path: "/v1/cargoes-label/create",
      retrySafety: "unsafe",
    });
  });
  it("gets cargo labels", async () => {
    const x = t({
      status: "SUCCESS",
      result: {
        file_guid: "test",
        file_url: "https://example.invalid/test.pdf",
      },
    });
    await executeGetSupplyCargoLabels(x, { operation_id: "op" });
    expect(x.requests[0]).toMatchObject({
      path: "/v1/cargoes-label/get",
      retrySafety: "safe",
    });
  });
  it.each([
    [
      GET_SUPPLY_DRAFT_INFO_OPERATION_ID,
      (x: MockTransport) => executeGetSupplyDraftInfo(x, { draft_id: 1 }),
      { status: "UNKNOWN" },
    ],
    [
      GET_SUPPLY_DRAFT_TIMESLOTS_OPERATION_ID,
      (x: MockTransport) => executeGetSupplyDraftTimeslots(x, timeslotInput),
      { error_reason: "UNKNOWN" },
    ],
    [
      CREATE_SUPPLY_CARGOES_OPERATION_ID,
      (x: MockTransport) => executeCreateSupplyCargoes(x, createInput),
      { errors: { error_reasons: ["UNKNOWN"] } },
    ],
    [
      GET_SUPPLY_CARGOES_CREATE_INFO_OPERATION_ID,
      (x: MockTransport) =>
        executeGetSupplyCargoesCreateInfo(x, { operation_id: "op" }),
      { status: "UNKNOWN" },
    ],
    [
      GET_SUPPLY_CARGOES_OPERATION_ID,
      (x: MockTransport) => executeGetSupplyCargoes(x, { supply_ids: ["1"] }),
      { supply: [{ cargoes: [{ type: "UNKNOWN" }] }] },
    ],
    [
      DELETE_SUPPLY_CARGOES_OPERATION_ID,
      (x: MockTransport) =>
        executeDeleteSupplyCargoes(x, { cargo_ids: ["1"], supply_id: 1 }),
      { errors: { supply_error_reasons: ["UNKNOWN"] } },
    ],
    [
      GET_SUPPLY_CARGOES_DELETE_STATUS_OPERATION_ID,
      (x: MockTransport) =>
        executeGetSupplyCargoesDeleteStatus(x, { operation_id: "op" }),
      { status: "UNKNOWN" },
    ],
    [
      GET_SUPPLY_CARGOES_RULES_OPERATION_ID,
      (x: MockTransport) =>
        executeGetSupplyCargoesRules(x, { supply_ids: ["1"] }),
      {
        supply_check_lists: [
          {
            cargoes_presents_rule: {
              cargo_count_per_type: [{ type: "UNKNOWN" }],
            },
          },
        ],
      },
    ],
    [
      CREATE_SUPPLY_CARGO_LABELS_OPERATION_ID,
      (x: MockTransport) => executeCreateSupplyCargoLabels(x, { supply_id: 1 }),
      { errors: { error_reasons: ["UNKNOWN"] } },
    ],
    [
      GET_SUPPLY_CARGO_LABELS_OPERATION_ID,
      (x: MockTransport) =>
        executeGetSupplyCargoLabels(x, { operation_id: "op" }),
      { status: "UNKNOWN" },
    ],
  ] as const)("rejects malformed %s", async (operationId, run, body) => {
    await expect(run(t(body))).rejects.toMatchObject({ operationId });
  });
});
