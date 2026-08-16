import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listSupplyClustersV2ResponseSchema } from "./contract.js";
import type { ListSupplyClustersV2Response } from "./types.js";
export const LIST_SUPPLY_CLUSTERS_V2_OPERATION_ID = "DraftClusterList";
export async function executeListSupplyClustersV2(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ListSupplyClustersV2Response> {
  const response = await transport.request({
    operationId: LIST_SUPPLY_CLUSTERS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/cluster/list",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listSupplyClustersV2ResponseSchema,
    response.body,
    LIST_SUPPLY_CLUSTERS_V2_OPERATION_ID,
  );
}
