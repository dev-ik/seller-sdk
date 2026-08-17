// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetContentV2DirectoryCountriesResponse } from "./contract.js";
import type {
  GetContentV2DirectoryCountriesInput,
  GetContentV2DirectoryCountriesResponse,
} from "./types.js";

export const GET_CONTENT_V2_DIRECTORY_COUNTRIES_OPERATION_ID =
  "GET /content/v2/directory/countries";

const definition: WbOperationDefinition<GetContentV2DirectoryCountriesResponse> =
  {
    operationId: GET_CONTENT_V2_DIRECTORY_COUNTRIES_OPERATION_ID,
    method: "GET",
    path: "/content/v2/directory/countries",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    parameters: [
      { name: "locale", location: "query", required: false, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetContentV2DirectoryCountriesResponse,
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  };

export function executeGetContentV2DirectoryCountries(
  execute: WbOperationExecutor,
  input?: GetContentV2DirectoryCountriesInput,
  options: WbRequestOptions = {},
): Promise<GetContentV2DirectoryCountriesResponse> {
  return execute(definition, input ?? {}, options);
}
