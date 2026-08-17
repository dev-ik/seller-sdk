// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV0NormqueryStatsResponse } from "./contract.js";
import type {
  PostV0NormqueryStatsInput,
  PostV0NormqueryStatsResponse,
} from "./types.js";

export const POST_V0_NORMQUERY_STATS_OPERATION_ID = "postV0NormqueryStats";

const definition: WbOperationDefinition<PostV0NormqueryStatsResponse> = {
  operationId: POST_V0_NORMQUERY_STATS_OPERATION_ID,
  method: "POST",
  path: "/adv/v0/normquery/stats",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV0NormqueryStatsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePostV0NormqueryStats(
  execute: WbOperationExecutor,
  input: PostV0NormqueryStatsInput,
  options: WbRequestOptions = {},
): Promise<PostV0NormqueryStatsResponse> {
  return execute(definition, input, options);
}
