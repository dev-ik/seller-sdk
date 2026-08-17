// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseDeleteApiV3PassesPassIdResponse } from "./contract.js";
import type {
  DeleteApiV3PassesPassIdInput,
  DeleteApiV3PassesPassIdResponse,
} from "./types.js";

export const DELETE_API_V3_PASSES_PASS_ID_OPERATION_ID =
  "DELETE /api/v3/passes/{passId}";

const definition: WbOperationDefinition<DeleteApiV3PassesPassIdResponse> = {
  operationId: DELETE_API_V3_PASSES_PASS_ID_OPERATION_ID,
  method: "DELETE",
  path: "/api/v3/passes/{passId}",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [
    { name: "passId", location: "path", required: true, array: false },
  ],
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseDeleteApiV3PassesPassIdResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
  verifiedAt: "2026-08-17",
};

export function executeDeleteApiV3PassesPassId(
  execute: WbOperationExecutor,
  input: DeleteApiV3PassesPassIdInput,
  options: WbRequestOptions = {},
): Promise<DeleteApiV3PassesPassIdResponse> {
  return execute(definition, input, options);
}
