// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3ClickCollectOrdersMetaCustomsDeclarationResponse } from "./contract.js";
import type {
  PostV3ClickCollectOrdersMetaCustomsDeclarationInput,
  PostV3ClickCollectOrdersMetaCustomsDeclarationResponse,
} from "./types.js";

export const POST_V3_CLICK_COLLECT_ORDERS_META_CUSTOMS_DECLARATION_OPERATION_ID =
  "postV3ClickCollectOrdersMetaCustomsDeclaration";

const definition: WbOperationDefinition<PostV3ClickCollectOrdersMetaCustomsDeclarationResponse> =
  {
    operationId:
      POST_V3_CLICK_COLLECT_ORDERS_META_CUSTOMS_DECLARATION_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/meta/customs-declaration",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3ClickCollectOrdersMetaCustomsDeclarationResponse,
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  };

export function executePostV3ClickCollectOrdersMetaCustomsDeclaration(
  execute: WbOperationExecutor,
  input: PostV3ClickCollectOrdersMetaCustomsDeclarationInput,
  options: WbRequestOptions = {},
): Promise<PostV3ClickCollectOrdersMetaCustomsDeclarationResponse> {
  return execute(definition, input, options);
}
