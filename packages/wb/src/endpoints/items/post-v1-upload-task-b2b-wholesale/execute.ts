// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1UploadTaskB2bWholesaleResponse } from "./contract.js";
import type {
  PostV1UploadTaskB2bWholesaleInput,
  PostV1UploadTaskB2bWholesaleResponse,
} from "./types.js";

export const POST_V1_UPLOAD_TASK_B2B_WHOLESALE_OPERATION_ID =
  "postV1UploadTaskB2bWholesale";

const definition: WbOperationDefinition<PostV1UploadTaskB2bWholesaleResponse> =
  {
    operationId: POST_V1_UPLOAD_TASK_B2B_WHOLESALE_OPERATION_ID,
    method: "POST",
    path: "/api/discounts-prices/v1/upload/task/b2b/wholesale",
    productionOrigin: "https://discounts-prices-api.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostV1UploadTaskB2bWholesaleResponse,
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  };

export function executePostV1UploadTaskB2bWholesale(
  execute: WbOperationExecutor,
  input: PostV1UploadTaskB2bWholesaleInput,
  options: WbRequestOptions = {},
): Promise<PostV1UploadTaskB2bWholesaleResponse> {
  return execute(definition, input, options);
}
