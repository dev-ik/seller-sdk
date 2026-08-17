// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1DocumentsDownloadAllResponse } from "./contract.js";
import type {
  PostV1DocumentsDownloadAllInput,
  PostV1DocumentsDownloadAllResponse,
} from "./types.js";

export const POST_V1_DOCUMENTS_DOWNLOAD_ALL_OPERATION_ID =
  "postV1DocumentsDownloadAll";

const definition: WbOperationDefinition<PostV1DocumentsDownloadAllResponse> = {
  operationId: POST_V1_DOCUMENTS_DOWNLOAD_ALL_OPERATION_ID,
  method: "POST",
  path: "/api/v1/documents/download/all",
  productionOrigin: "https://documents-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1DocumentsDownloadAllResponse,
  source: "https://dev.wildberries.ru/docs/openapi/finances",
  verifiedAt: "2026-08-17",
};

export function executePostV1DocumentsDownloadAll(
  execute: WbOperationExecutor,
  input?: PostV1DocumentsDownloadAllInput,
  options: WbRequestOptions = {},
): Promise<PostV1DocumentsDownloadAllResponse> {
  return execute(definition, input ?? {}, options);
}
