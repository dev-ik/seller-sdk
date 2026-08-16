import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { createMultiClusterSupplyDraftResponseSchema } from "./contract.js";
import type {
  CreateMultiClusterSupplyDraftRequest,
  CreateMultiClusterSupplyDraftResponse,
} from "./types.js";
export const CREATE_MULTI_CLUSTER_SUPPLY_DRAFT_OPERATION_ID =
  "DraftMultiClusterCreate";
export async function executeCreateMultiClusterSupplyDraft(
  transport: Transport,
  input: CreateMultiClusterSupplyDraftRequest,
  options: OzonRequestOptions = {},
): Promise<CreateMultiClusterSupplyDraftResponse> {
  const response = await transport.request({
    operationId: CREATE_MULTI_CLUSTER_SUPPLY_DRAFT_OPERATION_ID,
    method: "POST",
    path: "/v1/draft/multi-cluster/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createMultiClusterSupplyDraftResponseSchema,
    response.body,
    CREATE_MULTI_CLUSTER_SUPPLY_DRAFT_OPERATION_ID,
  );
}
