// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1ConfigResponse } from "./contract.js";
import type { GetV1ConfigResponse } from "./types.js";

export const GET_V1_CONFIG_OPERATION_ID = "getV1Config";

const definition: WbOperationDefinition<GetV1ConfigResponse> = {
  operationId: GET_V1_CONFIG_OPERATION_ID,
  method: "GET",
  path: "/api/advert/v1/config",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1ConfigResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Config(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV1ConfigResponse> {
  return execute(definition, undefined, options);
}
