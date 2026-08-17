// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1DocumentsCategoriesResponse } from "./contract.js";
import type {
  GetV1DocumentsCategoriesInput,
  GetV1DocumentsCategoriesResponse,
} from "./types.js";

export const GET_V1_DOCUMENTS_CATEGORIES_OPERATION_ID =
  "getV1DocumentsCategories";

const definition: WbOperationDefinition<GetV1DocumentsCategoriesResponse> = {
  operationId: GET_V1_DOCUMENTS_CATEGORIES_OPERATION_ID,
  method: "GET",
  path: "/api/v1/documents/categories",
  productionOrigin: "https://documents-api.wildberries.ru",
  parameters: [
    { name: "locale", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1DocumentsCategoriesResponse,
  source: "https://dev.wildberries.ru/docs/openapi/finances",
  verifiedAt: "2026-08-17",
};

export function executeGetV1DocumentsCategories(
  execute: WbOperationExecutor,
  input?: GetV1DocumentsCategoriesInput,
  options: WbRequestOptions = {},
): Promise<GetV1DocumentsCategoriesResponse> {
  return execute(definition, input ?? {}, options);
}
