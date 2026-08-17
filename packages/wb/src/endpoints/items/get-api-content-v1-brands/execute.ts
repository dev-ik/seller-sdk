// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetApiContentV1BrandsResponse } from "./contract.js";
import type {
  GetApiContentV1BrandsInput,
  GetApiContentV1BrandsResponse,
} from "./types.js";

export const GET_API_CONTENT_V1_BRANDS_OPERATION_ID =
  "GET /api/content/v1/brands";

const definition: WbOperationDefinition<GetApiContentV1BrandsResponse> = {
  operationId: GET_API_CONTENT_V1_BRANDS_OPERATION_ID,
  method: "GET",
  path: "/api/content/v1/brands",
  productionOrigin: "https://content-api.wildberries.ru",
  parameters: [
    { name: "subjectId", location: "query", required: true, array: false },
    { name: "next", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetApiContentV1BrandsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetApiContentV1Brands(
  execute: WbOperationExecutor,
  input: GetApiContentV1BrandsInput,
  options: WbRequestOptions = {},
): Promise<GetApiContentV1BrandsResponse> {
  return execute(definition, input, options);
}
