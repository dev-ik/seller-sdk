// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3ClickCollectOrdersStatusInfoResponse } from "./contract.js";
import type {
  PostV3ClickCollectOrdersStatusInfoInput,
  PostV3ClickCollectOrdersStatusInfoResponse,
} from "./types.js";

export const POST_V3_CLICK_COLLECT_ORDERS_STATUS_INFO_OPERATION_ID =
  "postV3ClickCollectOrdersStatusInfo";

const definition: WbOperationDefinition<PostV3ClickCollectOrdersStatusInfoResponse> =
  {
    operationId: POST_V3_CLICK_COLLECT_ORDERS_STATUS_INFO_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/status/info",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3ClickCollectOrdersStatusInfoResponse,
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  };

export function executePostV3ClickCollectOrdersStatusInfo(
  execute: WbOperationExecutor,
  input: PostV3ClickCollectOrdersStatusInfoInput,
  options: WbRequestOptions = {},
): Promise<PostV3ClickCollectOrdersStatusInfoResponse> {
  return execute(definition, input, options);
}
