// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV0StopResponse } from "./contract.js";
import type { GetV0StopInput, GetV0StopResponse } from "./types.js";

export const GET_V0_STOP_OPERATION_ID = "getV0Stop";

const definition: WbOperationDefinition<GetV0StopResponse> = {
  operationId: GET_V0_STOP_OPERATION_ID,
  method: "GET",
  path: "/adv/v0/stop",
  productionOrigin: "https://advert-api.wildberries.ru",
  sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
  parameters: [{ name: "id", location: "query", required: true, array: false }],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV0StopResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV0Stop(
  execute: WbOperationExecutor,
  input: GetV0StopInput,
  options: WbRequestOptions = {},
): Promise<GetV0StopResponse> {
  return execute(definition, input, options);
}
