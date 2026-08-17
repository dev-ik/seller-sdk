// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV3ClickCollectOrdersResponse } from "./contract.js";
import type {
  GetV3ClickCollectOrdersInput,
  GetV3ClickCollectOrdersResponse,
} from "./types.js";

export const GET_V3_CLICK_COLLECT_ORDERS_OPERATION_ID =
  "getV3ClickCollectOrders";

const definition: WbOperationDefinition<GetV3ClickCollectOrdersResponse> = {
  operationId: GET_V3_CLICK_COLLECT_ORDERS_OPERATION_ID,
  method: "GET",
  path: "/api/v3/click-collect/orders",
  productionOrigin: "https://marketplace-api.wildberries.ru",
  sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
  parameters: [
    { name: "limit", location: "query", required: true, array: false },
    { name: "next", location: "query", required: true, array: false },
    { name: "dateFrom", location: "query", required: true, array: false },
    { name: "dateTo", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV3ClickCollectOrdersResponse,
  source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
  verifiedAt: "2026-08-17",
};

export function executeGetV3ClickCollectOrders(
  execute: WbOperationExecutor,
  input: GetV3ClickCollectOrdersInput,
  options: WbRequestOptions = {},
): Promise<GetV3ClickCollectOrdersResponse> {
  return execute(definition, input, options);
}
