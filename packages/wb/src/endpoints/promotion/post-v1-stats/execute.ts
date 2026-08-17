// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1StatsResponse } from "./contract.js";
import type { PostV1StatsInput, PostV1StatsResponse } from "./types.js";

export const POST_V1_STATS_OPERATION_ID = "postV1Stats";

const definition: WbOperationDefinition<PostV1StatsResponse> = {
  operationId: POST_V1_STATS_OPERATION_ID,
  method: "POST",
  path: "/adv/v1/stats",
  productionOrigin: "https://advert-media-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1StatsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePostV1Stats(
  execute: WbOperationExecutor,
  input: PostV1StatsInput,
  options: WbRequestOptions = {},
): Promise<PostV1StatsResponse> {
  return execute(definition, input, options);
}
