// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3DbsOrdersMetaCustomsDeclarationResponse } from "./contract.js";
import type {
  PostV3DbsOrdersMetaCustomsDeclarationInput,
  PostV3DbsOrdersMetaCustomsDeclarationResponse,
} from "./types.js";

export const POST_V3_DBS_ORDERS_META_CUSTOMS_DECLARATION_OPERATION_ID =
  "postV3DbsOrdersMetaCustomsDeclaration";

const definition: WbOperationDefinition<PostV3DbsOrdersMetaCustomsDeclarationResponse> =
  {
    operationId: POST_V3_DBS_ORDERS_META_CUSTOMS_DECLARATION_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/meta/customs-declaration",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3DbsOrdersMetaCustomsDeclarationResponse,
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  };

export function executePostV3DbsOrdersMetaCustomsDeclaration(
  execute: WbOperationExecutor,
  input: PostV3DbsOrdersMetaCustomsDeclarationInput,
  options: WbRequestOptions = {},
): Promise<PostV3DbsOrdersMetaCustomsDeclarationResponse> {
  return execute(definition, input, options);
}
