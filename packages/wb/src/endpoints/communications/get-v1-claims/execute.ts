// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1ClaimsResponse } from "./contract.js";
import type { GetV1ClaimsInput, GetV1ClaimsResponse } from "./types.js";

export const GET_V1_CLAIMS_OPERATION_ID = "getV1Claims";

const definition: WbOperationDefinition<GetV1ClaimsResponse> = {
  operationId: GET_V1_CLAIMS_OPERATION_ID,
  method: "GET",
  path: "/api/v1/claims",
  productionOrigin: "https://returns-api.wildberries.ru",
  parameters: [
    { name: "is_archive", location: "query", required: true, array: false },
    { name: "id", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
    { name: "offset", location: "query", required: false, array: false },
    { name: "nm_id", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1ClaimsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Claims(
  execute: WbOperationExecutor,
  input: GetV1ClaimsInput,
  options: WbRequestOptions = {},
): Promise<GetV1ClaimsResponse> {
  return execute(definition, input, options);
}
