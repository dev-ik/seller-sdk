// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetContentV2DirectorySeasonsResponse } from "./contract.js";
import type {
  GetContentV2DirectorySeasonsInput,
  GetContentV2DirectorySeasonsResponse,
} from "./types.js";

export const GET_CONTENT_V2_DIRECTORY_SEASONS_OPERATION_ID =
  "GET /content/v2/directory/seasons";

const definition: WbOperationDefinition<GetContentV2DirectorySeasonsResponse> =
  {
    operationId: GET_CONTENT_V2_DIRECTORY_SEASONS_OPERATION_ID,
    method: "GET",
    path: "/content/v2/directory/seasons",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    parameters: [
      { name: "locale", location: "query", required: false, array: false },
    ],
    retrySafety: "safe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parseGetContentV2DirectorySeasonsResponse,
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  };

export function executeGetContentV2DirectorySeasons(
  execute: WbOperationExecutor,
  input?: GetContentV2DirectorySeasonsInput,
  options: WbRequestOptions = {},
): Promise<GetContentV2DirectorySeasonsResponse> {
  return execute(definition, input ?? {}, options);
}
