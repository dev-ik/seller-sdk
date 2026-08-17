// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostContentV3MediaSaveResponse } from "./contract.js";
import type {
  PostContentV3MediaSaveInput,
  PostContentV3MediaSaveResponse,
} from "./types.js";

export const POST_CONTENT_V3_MEDIA_SAVE_OPERATION_ID =
  "POST /content/v3/media/save";

const definition: WbOperationDefinition<PostContentV3MediaSaveResponse> = {
  operationId: POST_CONTENT_V3_MEDIA_SAVE_OPERATION_ID,
  method: "POST",
  path: "/content/v3/media/save",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostContentV3MediaSaveResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostContentV3MediaSave(
  execute: WbOperationExecutor,
  input: PostContentV3MediaSaveInput,
  options: WbRequestOptions = {},
): Promise<PostContentV3MediaSaveResponse> {
  return execute(definition, input, options);
}
