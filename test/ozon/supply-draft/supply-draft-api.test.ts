import { describe, expect, it } from "vitest";
import { MockTransport } from "../../../packages/core/src/core/mock-transport.js";
import {
  executeListSupplyClustersV1,
  LIST_SUPPLY_CLUSTERS_V1_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/cluster/list/v1/execute.js";
import {
  executeListSupplyClustersV2,
  LIST_SUPPLY_CLUSTERS_V2_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/cluster/list/v2/execute.js";
import {
  executeCreateCrossdockSupplyDraft,
  CREATE_CROSSDOCK_SUPPLY_DRAFT_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/create/crossdock/v1/execute.js";
import {
  executeCreateDirectSupplyDraft,
  CREATE_DIRECT_SUPPLY_DRAFT_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/create/direct/v1/execute.js";
import {
  executeCreateMultiClusterSupplyDraft,
  CREATE_MULTI_CLUSTER_SUPPLY_DRAFT_OPERATION_ID,
} from "../../../packages/ozon/src/endpoints/supply-draft/create/multi-cluster/v1/execute.js";

function transport(body: unknown): MockTransport {
  const result = new MockTransport();
  result.enqueueResponse({ status: 200, headers: new Headers(), body });
  return result;
}
const clusterInfo = {
  items: [{ quantity: 2, sku: 100000001 }],
  macrolocal_cluster_id: 200000001,
};
const deliveryInfo = {
  type: "DROPOFF" as const,
  drop_off_warehouse: {
    warehouse_id: 300000001,
    warehouse_type: "CROSS_DOCK" as const,
  },
};

describe("Supply draft API", () => {
  it("lists supply clusters v1", async () => {
    const input = { cluster_type: "CLUSTER_TYPE_OZON" as const };
    const mock = transport({
      clusters: [
        {
          id: 1,
          name: "Synthetic cluster",
          type: "CLUSTER_TYPE_OZON",
          logistic_clusters: [
            { warehouses: [{ warehouse_id: 2, type: "FULL_FILLMENT" }] },
          ],
        },
      ],
    });
    const response = await executeListSupplyClustersV1(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_SUPPLY_CLUSTERS_V1_OPERATION_ID,
      path: "/v1/cluster/list",
      body: input,
      retrySafety: "safe",
    });
    expect(response.clusters?.[0]?.id).toBe(1);
  });

  it("lists supply clusters v2", async () => {
    const mock = transport({
      result: [
        {
          macrolocal_cluster_id: 1,
          data: {
            fulfillments: [{ name: "Synthetic fulfillment", warehouse_id: 2 }],
            macrolocal_cluster: {
              name: "Synthetic macro",
              country: { name: "Test country", uid: "test-country" },
            },
          },
        },
      ],
    });
    const response = await executeListSupplyClustersV2(mock);
    expect(mock.requests[0]).toMatchObject({
      operationId: LIST_SUPPLY_CLUSTERS_V2_OPERATION_ID,
      path: "/v2/cluster/list",
      retrySafety: "safe",
    });
    expect(response.result?.[0]?.data?.fulfillments?.[0]?.warehouse_id).toBe(2);
  });

  it("creates a crossdock draft without automatic retries", async () => {
    const input = {
      cluster_info: clusterInfo,
      deletion_sku_mode: "PARTIAL" as const,
      delivery_info: deliveryInfo,
    };
    const mock = transport({ draft_id: 1, errors: [] });
    const response = await executeCreateCrossdockSupplyDraft(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: CREATE_CROSSDOCK_SUPPLY_DRAFT_OPERATION_ID,
      path: "/v1/draft/crossdock/create",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.draft_id).toBe(1);
  });

  it("creates a direct draft without automatic retries", async () => {
    const input = {
      cluster_info: clusterInfo,
      deletion_sku_mode: "FULL" as const,
    };
    const mock = transport({ draft_id: 2, errors: [] });
    const response = await executeCreateDirectSupplyDraft(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: CREATE_DIRECT_SUPPLY_DRAFT_OPERATION_ID,
      path: "/v1/draft/direct/create",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.draft_id).toBe(2);
  });

  it("creates a multi-cluster draft without automatic retries", async () => {
    const input = {
      clusters_info: [clusterInfo],
      deletion_sku_mode: "PARTIAL" as const,
      delivery_info: deliveryInfo,
    };
    const mock = transport({ draft_id: 3, errors: [] });
    const response = await executeCreateMultiClusterSupplyDraft(mock, input);
    expect(mock.requests[0]).toMatchObject({
      operationId: CREATE_MULTI_CLUSTER_SUPPLY_DRAFT_OPERATION_ID,
      path: "/v1/draft/multi-cluster/create",
      body: input,
      retrySafety: "unsafe",
    });
    expect(response.draft_id).toBe(3);
  });

  it.each([
    [
      LIST_SUPPLY_CLUSTERS_V1_OPERATION_ID,
      (mock: MockTransport) =>
        executeListSupplyClustersV1(mock, {
          cluster_type: "CLUSTER_TYPE_OZON",
        }),
      { clusters: [{ type: "UNKNOWN" }] },
    ],
    [
      LIST_SUPPLY_CLUSTERS_V2_OPERATION_ID,
      (mock: MockTransport) => executeListSupplyClustersV2(mock),
      { result: [{ data: { fulfillments: [{ warehouse_id: "bad" }] } }] },
    ],
    [
      CREATE_CROSSDOCK_SUPPLY_DRAFT_OPERATION_ID,
      (mock: MockTransport) =>
        executeCreateCrossdockSupplyDraft(mock, {
          cluster_info: clusterInfo,
          deletion_sku_mode: "PARTIAL",
          delivery_info: deliveryInfo,
        }),
      { errors: [{ error_message: "UNKNOWN" }] },
    ],
    [
      CREATE_DIRECT_SUPPLY_DRAFT_OPERATION_ID,
      (mock: MockTransport) =>
        executeCreateDirectSupplyDraft(mock, {
          cluster_info: clusterInfo,
          deletion_sku_mode: "FULL",
        }),
      { errors: [{ error_reasons: ["UNKNOWN"] }] },
    ],
    [
      CREATE_MULTI_CLUSTER_SUPPLY_DRAFT_OPERATION_ID,
      (mock: MockTransport) =>
        executeCreateMultiClusterSupplyDraft(mock, {
          clusters_info: [clusterInfo],
          deletion_sku_mode: "PARTIAL",
          delivery_info: deliveryInfo,
        }),
      {
        errors: [
          {
            items_validation: [{ rejected_items: [{ reasons: ["UNKNOWN"] }] }],
          },
        ],
      },
    ],
  ] as const)(
    "rejects malformed %s responses",
    async (operationId, run, body) => {
      await expect(run(transport(body))).rejects.toMatchObject({ operationId });
    },
  );
});
