// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1DocumentsListResponse } from "./contract.js";
import type {
  GetV1DocumentsListInput,
  GetV1DocumentsListResponse,
} from "./types.js";

export const GET_V1_DOCUMENTS_LIST_OPERATION_ID = "getV1DocumentsList";

const definition: WbOperationDefinition<GetV1DocumentsListResponse> = {
  operationId: GET_V1_DOCUMENTS_LIST_OPERATION_ID,
  method: "GET",
  path: "/api/v1/documents/list",
  productionOrigin: "https://documents-api.wildberries.ru",
  parameters: [
    { name: "locale", location: "query", required: false, array: false },
    { name: "beginTime", location: "query", required: false, array: false },
    { name: "endTime", location: "query", required: false, array: false },
    { name: "sort", location: "query", required: false, array: false },
    { name: "order", location: "query", required: false, array: false },
    { name: "category", location: "query", required: false, array: false },
    { name: "serviceName", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
    { name: "offset", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1DocumentsListResponse,
  source: "https://dev.wildberries.ru/docs/openapi/finances",
  verifiedAt: "2026-08-17",
};

export function executeGetV1DocumentsList(
  execute: WbOperationExecutor,
  input?: GetV1DocumentsListInput,
  options: WbRequestOptions = {},
): Promise<GetV1DocumentsListResponse> {
  return execute(definition, input ?? {}, options);
}
