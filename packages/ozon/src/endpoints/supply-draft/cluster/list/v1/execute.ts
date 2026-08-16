import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listSupplyClustersV1ResponseSchema } from "./contract.js";
import type {
  ListSupplyClustersV1Request,
  ListSupplyClustersV1Response,
} from "./types.js";
export const LIST_SUPPLY_CLUSTERS_V1_OPERATION_ID =
  "SupplyDraftAPI_DraftClusterList";
export async function executeListSupplyClustersV1(
  transport: Transport,
  input: ListSupplyClustersV1Request,
  options: OzonRequestOptions = {},
): Promise<ListSupplyClustersV1Response> {
  const response = await transport.request({
    operationId: LIST_SUPPLY_CLUSTERS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/cluster/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listSupplyClustersV1ResponseSchema,
    response.body,
    LIST_SUPPLY_CLUSTERS_V1_OPERATION_ID,
  );
}
