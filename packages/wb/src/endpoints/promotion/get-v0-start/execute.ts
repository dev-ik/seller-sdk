// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV0StartResponse } from "./contract.js";
import type { GetV0StartInput, GetV0StartResponse } from "./types.js";

export const GET_V0_START_OPERATION_ID = "getV0Start";

const definition: WbOperationDefinition<GetV0StartResponse> = {
  operationId: GET_V0_START_OPERATION_ID,
  method: "GET",
  path: "/adv/v0/start",
  productionOrigin: "https://advert-api.wildberries.ru",
  sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
  parameters: [{ name: "id", location: "query", required: true, array: false }],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV0StartResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV0Start(
  execute: WbOperationExecutor,
  input: GetV0StartInput,
  options: WbRequestOptions = {},
): Promise<GetV0StartResponse> {
  return execute(definition, input, options);
}
