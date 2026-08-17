// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostContentV2CardsUploadAddResponse } from "./contract.js";
import type {
  PostContentV2CardsUploadAddInput,
  PostContentV2CardsUploadAddResponse,
} from "./types.js";

export const POST_CONTENT_V2_CARDS_UPLOAD_ADD_OPERATION_ID =
  "POST /content/v2/cards/upload/add";

const definition: WbOperationDefinition<PostContentV2CardsUploadAddResponse> = {
  operationId: POST_CONTENT_V2_CARDS_UPLOAD_ADD_OPERATION_ID,
  method: "POST",
  path: "/content/v2/cards/upload/add",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostContentV2CardsUploadAddResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostContentV2CardsUploadAdd(
  execute: WbOperationExecutor,
  input?: PostContentV2CardsUploadAddInput,
  options: WbRequestOptions = {},
): Promise<PostContentV2CardsUploadAddResponse> {
  return execute(definition, input ?? {}, options);
}
