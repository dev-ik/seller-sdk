// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV3ClickCollectOrdersNewResponse } from "./contract.js";
import type { GetV3ClickCollectOrdersNewResponse } from "./types.js";

export const GET_V3_CLICK_COLLECT_ORDERS_NEW_OPERATION_ID =
  "getV3ClickCollectOrdersNew";

const definition: WbOperationDefinition<GetV3ClickCollectOrdersNewResponse> = {
  operationId: GET_V3_CLICK_COLLECT_ORDERS_NEW_OPERATION_ID,
  method: "GET",
  path: "/api/v3/click-collect/orders/new",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV3ClickCollectOrdersNewResponse,
  source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
  verifiedAt: "2026-08-17",
};

export function executeGetV3ClickCollectOrdersNew(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV3ClickCollectOrdersNewResponse> {
  return execute(definition, undefined, options);
}
