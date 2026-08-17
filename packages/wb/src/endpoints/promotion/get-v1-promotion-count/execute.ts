// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1PromotionCountResponse } from "./contract.js";
import type { GetV1PromotionCountResponse } from "./types.js";

export const GET_V1_PROMOTION_COUNT_OPERATION_ID = "getV1PromotionCount";

const definition: WbOperationDefinition<GetV1PromotionCountResponse> = {
  operationId: GET_V1_PROMOTION_COUNT_OPERATION_ID,
  method: "GET",
  path: "/adv/v1/promotion/count",
  productionOrigin: "https://advert-api.wildberries.ru",
  sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1PromotionCountResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV1PromotionCount(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV1PromotionCountResponse> {
  return execute(definition, undefined, options);
}
