// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostContentV2TagResponse } from "./contract.js";
import type {
  PostContentV2TagInput,
  PostContentV2TagResponse,
} from "./types.js";

export const POST_CONTENT_V2_TAG_OPERATION_ID = "POST /content/v2/tag";

const definition: WbOperationDefinition<PostContentV2TagResponse> = {
  operationId: POST_CONTENT_V2_TAG_OPERATION_ID,
  method: "POST",
  path: "/content/v2/tag",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostContentV2TagResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostContentV2Tag(
  execute: WbOperationExecutor,
  input: PostContentV2TagInput,
  options: WbRequestOptions = {},
): Promise<PostContentV2TagResponse> {
  return execute(definition, input, options);
}
