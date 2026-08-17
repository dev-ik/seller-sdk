// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1SubscriptionsResponse } from "./contract.js";
import type { GetV1SubscriptionsResponse } from "./types.js";

export const GET_V1_SUBSCRIPTIONS_OPERATION_ID = "getV1Subscriptions";

const definition: WbOperationDefinition<GetV1SubscriptionsResponse> = {
  operationId: GET_V1_SUBSCRIPTIONS_OPERATION_ID,
  method: "GET",
  path: "/api/common/v1/subscriptions",
  productionOrigin: "https://common-api.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1SubscriptionsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/api-information",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Subscriptions(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV1SubscriptionsResponse> {
  return execute(definition, undefined, options);
}
