// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1SellerEventsResponse } from "./contract.js";
import type {
  GetV1SellerEventsInput,
  GetV1SellerEventsResponse,
} from "./types.js";

export const GET_V1_SELLER_EVENTS_OPERATION_ID = "getV1SellerEvents";

const definition: WbOperationDefinition<GetV1SellerEventsResponse> = {
  operationId: GET_V1_SELLER_EVENTS_OPERATION_ID,
  method: "GET",
  path: "/api/v1/seller/events",
  productionOrigin: "https://buyer-chat-api.wildberries.ru",
  parameters: [
    { name: "next", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1SellerEventsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/communications",
  verifiedAt: "2026-08-17",
};

export function executeGetV1SellerEvents(
  execute: WbOperationExecutor,
  input?: GetV1SellerEventsInput,
  options: WbRequestOptions = {},
): Promise<GetV1SellerEventsResponse> {
  return execute(definition, input ?? {}, options);
}
