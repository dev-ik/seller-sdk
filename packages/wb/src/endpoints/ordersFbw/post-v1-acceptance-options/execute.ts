// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1AcceptanceOptionsResponse } from "./contract.js";
import type {
  PostV1AcceptanceOptionsInput,
  PostV1AcceptanceOptionsResponse,
} from "./types.js";

export const POST_V1_ACCEPTANCE_OPTIONS_OPERATION_ID =
  "postV1AcceptanceOptions";

const definition: WbOperationDefinition<PostV1AcceptanceOptionsResponse> = {
  operationId: POST_V1_ACCEPTANCE_OPTIONS_OPERATION_ID,
  method: "POST",
  path: "/api/v1/acceptance/options",
  productionOrigin: "https://supplies-api.wildberries.ru",
  sandboxOrigin: "https://supplies-api-sandbox.wildberries.ru",
  parameters: [
    { name: "warehouseID", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1AcceptanceOptionsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbw",
  verifiedAt: "2026-08-17",
};

export function executePostV1AcceptanceOptions(
  execute: WbOperationExecutor,
  input: PostV1AcceptanceOptionsInput,
  options: WbRequestOptions = {},
): Promise<PostV1AcceptanceOptionsResponse> {
  return execute(definition, input, options);
}
