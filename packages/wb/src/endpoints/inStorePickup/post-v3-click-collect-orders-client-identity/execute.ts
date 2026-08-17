// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3ClickCollectOrdersClientIdentityResponse } from "./contract.js";
import type {
  PostV3ClickCollectOrdersClientIdentityInput,
  PostV3ClickCollectOrdersClientIdentityResponse,
} from "./types.js";

export const POST_V3_CLICK_COLLECT_ORDERS_CLIENT_IDENTITY_OPERATION_ID =
  "postV3ClickCollectOrdersClientIdentity";

const definition: WbOperationDefinition<PostV3ClickCollectOrdersClientIdentityResponse> =
  {
    operationId: POST_V3_CLICK_COLLECT_ORDERS_CLIENT_IDENTITY_OPERATION_ID,
    method: "POST",
    path: "/api/v3/click-collect/orders/client/identity",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3ClickCollectOrdersClientIdentityResponse,
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  };

export function executePostV3ClickCollectOrdersClientIdentity(
  execute: WbOperationExecutor,
  input: PostV3ClickCollectOrdersClientIdentityInput,
  options: WbRequestOptions = {},
): Promise<PostV3ClickCollectOrdersClientIdentityResponse> {
  return execute(definition, input, options);
}
