// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV0PauseResponse } from "./contract.js";
import type { GetV0PauseInput, GetV0PauseResponse } from "./types.js";

export const GET_V0_PAUSE_OPERATION_ID = "getV0Pause";

const definition: WbOperationDefinition<GetV0PauseResponse> = {
  operationId: GET_V0_PAUSE_OPERATION_ID,
  method: "GET",
  path: "/adv/v0/pause",
  productionOrigin: "https://advert-api.wildberries.ru",
  sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
  parameters: [{ name: "id", location: "query", required: true, array: false }],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV0PauseResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV0Pause(
  execute: WbOperationExecutor,
  input: GetV0PauseInput,
  options: WbRequestOptions = {},
): Promise<GetV0PauseResponse> {
  return execute(definition, input, options);
}
