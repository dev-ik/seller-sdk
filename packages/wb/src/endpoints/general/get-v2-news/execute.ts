// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV2NewsResponse } from "./contract.js";
import type { GetV2NewsInput, GetV2NewsResponse } from "./types.js";

export const GET_V2_NEWS_OPERATION_ID = "getV2News";

const definition: WbOperationDefinition<GetV2NewsResponse> = {
  operationId: GET_V2_NEWS_OPERATION_ID,
  method: "GET",
  path: "/api/communications/v2/news",
  productionOrigin: "https://common-api.wildberries.ru",
  parameters: [
    { name: "from", location: "query", required: false, array: false },
    { name: "fromID", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV2NewsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/api-information",
  verifiedAt: "2026-08-17",
};

export function executeGetV2News(
  execute: WbOperationExecutor,
  input?: GetV2NewsInput,
  options: WbRequestOptions = {},
): Promise<GetV2NewsResponse> {
  return execute(definition, input ?? {}, options);
}
