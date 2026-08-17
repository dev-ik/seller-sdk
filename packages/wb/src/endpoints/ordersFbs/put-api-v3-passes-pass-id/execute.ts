// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePutApiV3PassesPassIdResponse } from "./contract.js";
import type {
  PutApiV3PassesPassIdInput,
  PutApiV3PassesPassIdResponse,
} from "./types.js";

export const PUT_API_V3_PASSES_PASS_ID_OPERATION_ID =
  "PUT /api/v3/passes/{passId}";

const definition: WbOperationDefinition<PutApiV3PassesPassIdResponse> = {
  operationId: PUT_API_V3_PASSES_PASS_ID_OPERATION_ID,
  method: "PUT",
  path: "/api/v3/passes/{passId}",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [
    { name: "passId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePutApiV3PassesPassIdResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
  verifiedAt: "2026-08-17",
};

export function executePutApiV3PassesPassId(
  execute: WbOperationExecutor,
  input: PutApiV3PassesPassIdInput,
  options: WbRequestOptions = {},
): Promise<PutApiV3PassesPassIdResponse> {
  return execute(definition, input, options);
}
