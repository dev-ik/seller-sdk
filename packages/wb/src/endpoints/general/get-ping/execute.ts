// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetPingResponse } from "./contract.js";
import type { GetPingResponse } from "./types.js";

export const GET_PING_OPERATION_ID = "getPing";

const definition: WbOperationDefinition<GetPingResponse> = {
  operationId: GET_PING_OPERATION_ID,
  method: "GET",
  path: "/ping",
  productionOrigin: "https://common-api.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetPingResponse,
  source: "https://dev.wildberries.ru/docs/openapi/api-information",
  verifiedAt: "2026-08-17",
};

export function executeGetPing(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetPingResponse> {
  return execute(definition, undefined, options);
}
