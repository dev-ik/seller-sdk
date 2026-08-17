// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostContentV2CardsUploadResponse } from "./contract.js";
import type {
  PostContentV2CardsUploadInput,
  PostContentV2CardsUploadResponse,
} from "./types.js";

export const POST_CONTENT_V2_CARDS_UPLOAD_OPERATION_ID =
  "POST /content/v2/cards/upload";

const definition: WbOperationDefinition<PostContentV2CardsUploadResponse> = {
  operationId: POST_CONTENT_V2_CARDS_UPLOAD_OPERATION_ID,
  method: "POST",
  path: "/content/v2/cards/upload",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostContentV2CardsUploadResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostContentV2CardsUpload(
  execute: WbOperationExecutor,
  input?: PostContentV2CardsUploadInput,
  options: WbRequestOptions = {},
): Promise<PostContentV2CardsUploadResponse> {
  return execute(definition, input ?? {}, options);
}
