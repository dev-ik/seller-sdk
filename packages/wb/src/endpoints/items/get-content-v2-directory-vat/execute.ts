// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetContentV2DirectoryVatResponse } from "./contract.js";
import type {
  GetContentV2DirectoryVatInput,
  GetContentV2DirectoryVatResponse,
} from "./types.js";

export const GET_CONTENT_V2_DIRECTORY_VAT_OPERATION_ID =
  "GET /content/v2/directory/vat";

const definition: WbOperationDefinition<GetContentV2DirectoryVatResponse> = {
  operationId: GET_CONTENT_V2_DIRECTORY_VAT_OPERATION_ID,
  method: "GET",
  path: "/content/v2/directory/vat",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [
    { name: "locale", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetContentV2DirectoryVatResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetContentV2DirectoryVat(
  execute: WbOperationExecutor,
  input?: GetContentV2DirectoryVatInput,
  options: WbRequestOptions = {},
): Promise<GetContentV2DirectoryVatResponse> {
  return execute(definition, input ?? {}, options);
}
