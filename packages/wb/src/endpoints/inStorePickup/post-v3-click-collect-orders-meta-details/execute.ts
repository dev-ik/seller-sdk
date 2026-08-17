// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3ClickCollectOrdersMetaDetailsResponse } from "./contract.js";
import type {
  PostV3ClickCollectOrdersMetaDetailsInput,
  PostV3ClickCollectOrdersMetaDetailsResponse,
} from "./types.js";

export const POST_V3_CLICK_COLLECT_ORDERS_META_DETAILS_OPERATION_ID =
  "postV3ClickCollectOrdersMetaDetails";

const definition: WbOperationDefinition<PostV3ClickCollectOrdersMetaDetailsResponse> =
  {
    operationId: POST_V3_CLICK_COLLECT_ORDERS_META_DETAILS_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/meta/details",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3ClickCollectOrdersMetaDetailsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  };

export function executePostV3ClickCollectOrdersMetaDetails(
  execute: WbOperationExecutor,
  input: PostV3ClickCollectOrdersMetaDetailsInput,
  options: WbRequestOptions = {},
): Promise<PostV3ClickCollectOrdersMetaDetailsResponse> {
  return execute(definition, input, options);
}
