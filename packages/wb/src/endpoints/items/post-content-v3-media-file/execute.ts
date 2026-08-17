// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostContentV3MediaFileResponse } from "./contract.js";
import type {
  PostContentV3MediaFileInput,
  PostContentV3MediaFileResponse,
} from "./types.js";

export const POST_CONTENT_V3_MEDIA_FILE_OPERATION_ID =
  "POST /content/v3/media/file";

const definition: WbOperationDefinition<PostContentV3MediaFileResponse> = {
  operationId: POST_CONTENT_V3_MEDIA_FILE_OPERATION_ID,
  method: "POST",
  path: "/content/v3/media/file",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [
    { name: "X-Nm-Id", location: "header", required: true, array: false },
    {
      name: "X-Photo-Number",
      location: "header",
      required: true,
      array: false,
    },
  ],
  requestContentType: "multipart/form-data",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostContentV3MediaFileResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostContentV3MediaFile(
  execute: WbOperationExecutor,
  input: PostContentV3MediaFileInput,
  options: WbRequestOptions = {},
): Promise<PostContentV3MediaFileResponse> {
  return execute(definition, input, options);
}
