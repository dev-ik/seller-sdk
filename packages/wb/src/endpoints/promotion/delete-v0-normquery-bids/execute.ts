// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseDeleteV0NormqueryBidsResponse } from "./contract.js";
import type {
  DeleteV0NormqueryBidsInput,
  DeleteV0NormqueryBidsResponse,
} from "./types.js";

export const DELETE_V0_NORMQUERY_BIDS_OPERATION_ID = "deleteV0NormqueryBids";

const definition: WbOperationDefinition<DeleteV0NormqueryBidsResponse> = {
  operationId: DELETE_V0_NORMQUERY_BIDS_OPERATION_ID,
  method: "DELETE",
  path: "/adv/v0/normquery/bids",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseDeleteV0NormqueryBidsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeDeleteV0NormqueryBids(
  execute: WbOperationExecutor,
  input: DeleteV0NormqueryBidsInput,
  options: WbRequestOptions = {},
): Promise<DeleteV0NormqueryBidsResponse> {
  return execute(definition, input, options);
}
