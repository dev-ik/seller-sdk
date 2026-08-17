// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetContentV2DirectoryColorsResponse } from "./contract.js";
import type {
  GetContentV2DirectoryColorsInput,
  GetContentV2DirectoryColorsResponse,
} from "./types.js";

export const GET_CONTENT_V2_DIRECTORY_COLORS_OPERATION_ID =
  "GET /content/v2/directory/colors";

const definition: WbOperationDefinition<GetContentV2DirectoryColorsResponse> = {
  operationId: GET_CONTENT_V2_DIRECTORY_COLORS_OPERATION_ID,
  method: "GET",
  path: "/content/v2/directory/colors",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [
    { name: "locale", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetContentV2DirectoryColorsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetContentV2DirectoryColors(
  execute: WbOperationExecutor,
  input?: GetContentV2DirectoryColorsInput,
  options: WbRequestOptions = {},
): Promise<GetContentV2DirectoryColorsResponse> {
  return execute(definition, input ?? {}, options);
}
