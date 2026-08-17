// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostApiV2UploadTaskResponse } from "./contract.js";
import type {
  PostApiV2UploadTaskInput,
  PostApiV2UploadTaskResponse,
} from "./types.js";

export const POST_API_V2_UPLOAD_TASK_OPERATION_ID = "POST /api/v2/upload/task";

const definition: WbOperationDefinition<PostApiV2UploadTaskResponse> = {
  operationId: POST_API_V2_UPLOAD_TASK_OPERATION_ID,
  method: "POST",
  path: "/api/v2/upload/task",
  productionOrigin: "https://discounts-prices-api.wildberries.ru",
  sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostApiV2UploadTaskResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostApiV2UploadTask(
  execute: WbOperationExecutor,
  input: PostApiV2UploadTaskInput,
  options: WbRequestOptions = {},
): Promise<PostApiV2UploadTaskResponse> {
  return execute(definition, input, options);
}
