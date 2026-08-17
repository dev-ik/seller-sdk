// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostApiV2UploadTaskSizeResponse } from "./contract.js";
import type {
  PostApiV2UploadTaskSizeInput,
  PostApiV2UploadTaskSizeResponse,
} from "./types.js";

export const POST_API_V2_UPLOAD_TASK_SIZE_OPERATION_ID =
  "POST /api/v2/upload/task/size";

const definition: WbOperationDefinition<PostApiV2UploadTaskSizeResponse> = {
  operationId: POST_API_V2_UPLOAD_TASK_SIZE_OPERATION_ID,
  method: "POST",
  path: "/api/v2/upload/task/size",
  productionOrigin: "https://discounts-prices-api.wildberries.ru",
  sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostApiV2UploadTaskSizeResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostApiV2UploadTaskSize(
  execute: WbOperationExecutor,
  input: PostApiV2UploadTaskSizeInput,
  options: WbRequestOptions = {},
): Promise<PostApiV2UploadTaskSizeResponse> {
  return execute(definition, input, options);
}
