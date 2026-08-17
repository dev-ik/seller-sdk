// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1DocumentsDownloadResponse } from "./contract.js";
import type {
  GetV1DocumentsDownloadInput,
  GetV1DocumentsDownloadResponse,
} from "./types.js";

export const GET_V1_DOCUMENTS_DOWNLOAD_OPERATION_ID = "getV1DocumentsDownload";

const definition: WbOperationDefinition<GetV1DocumentsDownloadResponse> = {
  operationId: GET_V1_DOCUMENTS_DOWNLOAD_OPERATION_ID,
  method: "GET",
  path: "/api/v1/documents/download",
  productionOrigin: "https://documents-api.wildberries.ru",
  parameters: [
    { name: "serviceName", location: "query", required: true, array: false },
    { name: "extension", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1DocumentsDownloadResponse,
  source: "https://dev.wildberries.ru/docs/openapi/finances",
  verifiedAt: "2026-08-17",
};

export function executeGetV1DocumentsDownload(
  execute: WbOperationExecutor,
  input: GetV1DocumentsDownloadInput,
  options: WbRequestOptions = {},
): Promise<GetV1DocumentsDownloadResponse> {
  return execute(definition, input, options);
}
