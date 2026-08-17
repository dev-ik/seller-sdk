// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV3ClickCollectOrdersMetaImeiResponse } from "./contract.js";
import type {
  PostV3ClickCollectOrdersMetaImeiInput,
  PostV3ClickCollectOrdersMetaImeiResponse,
} from "./types.js";

export const POST_V3_CLICK_COLLECT_ORDERS_META_IMEI_OPERATION_ID =
  "postV3ClickCollectOrdersMetaImei";

const definition: WbOperationDefinition<PostV3ClickCollectOrdersMetaImeiResponse> =
  {
    operationId: POST_V3_CLICK_COLLECT_ORDERS_META_IMEI_OPERATION_ID,
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/meta/imei",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV3ClickCollectOrdersMetaImeiResponse,
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  };

export function executePostV3ClickCollectOrdersMetaImei(
  execute: WbOperationExecutor,
  input: PostV3ClickCollectOrdersMetaImeiInput,
  options: WbRequestOptions = {},
): Promise<PostV3ClickCollectOrdersMetaImeiResponse> {
  return execute(definition, input, options);
}
