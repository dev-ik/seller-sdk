// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1RatingResponse } from "./contract.js";
import type { GetV1RatingResponse } from "./types.js";

export const GET_V1_RATING_OPERATION_ID = "getV1Rating";

const definition: WbOperationDefinition<GetV1RatingResponse> = {
  operationId: GET_V1_RATING_OPERATION_ID,
  method: "GET",
  path: "/api/common/v1/rating",
  productionOrigin: "https://feedbacks-api.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1RatingResponse,
  source: "https://dev.wildberries.ru/docs/openapi/api-information",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Rating(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV1RatingResponse> {
  return execute(definition, undefined, options);
}
