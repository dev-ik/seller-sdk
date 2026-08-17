// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV2SupplierNmsResponse } from "./contract.js";
import type {
  PostV2SupplierNmsInput,
  PostV2SupplierNmsResponse,
} from "./types.js";

export const POST_V2_SUPPLIER_NMS_OPERATION_ID = "postV2SupplierNms";

const definition: WbOperationDefinition<PostV2SupplierNmsResponse> = {
  operationId: POST_V2_SUPPLIER_NMS_OPERATION_ID,
  method: "POST",
  path: "/adv/v2/supplier/nms",
  productionOrigin: "https://advert-api.wildberries.ru",
  sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV2SupplierNmsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePostV2SupplierNms(
  execute: WbOperationExecutor,
  input?: PostV2SupplierNmsInput,
  options: WbRequestOptions = {},
): Promise<PostV2SupplierNmsResponse> {
  return execute(definition, input ?? {}, options);
}
