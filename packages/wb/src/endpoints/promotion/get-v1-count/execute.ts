// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1CountResponse } from "./contract.js";
import type { GetV1CountResponse } from "./types.js";

export const GET_V1_COUNT_OPERATION_ID = "getV1Count";

const definition: WbOperationDefinition<GetV1CountResponse> = {
  operationId: GET_V1_COUNT_OPERATION_ID,
  method: "GET",
  path: "/adv/v1/count",
  productionOrigin: "https://advert-media-api.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1CountResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Count(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV1CountResponse> {
  return execute(definition, undefined, options);
}
