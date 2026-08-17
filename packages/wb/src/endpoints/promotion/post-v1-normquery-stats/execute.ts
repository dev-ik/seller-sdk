// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1NormqueryStatsResponse } from "./contract.js";
import type {
  PostV1NormqueryStatsInput,
  PostV1NormqueryStatsResponse,
} from "./types.js";

export const POST_V1_NORMQUERY_STATS_OPERATION_ID = "postV1NormqueryStats";

const definition: WbOperationDefinition<PostV1NormqueryStatsResponse> = {
  operationId: POST_V1_NORMQUERY_STATS_OPERATION_ID,
  method: "POST",
  path: "/adv/v1/normquery/stats",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1NormqueryStatsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePostV1NormqueryStats(
  execute: WbOperationExecutor,
  input: PostV1NormqueryStatsInput,
  options: WbRequestOptions = {},
): Promise<PostV1NormqueryStatsResponse> {
  return execute(definition, input, options);
}
