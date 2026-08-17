// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetContentV2DirectoryTnvedResponse } from "./contract.js";
import type {
  GetContentV2DirectoryTnvedInput,
  GetContentV2DirectoryTnvedResponse,
} from "./types.js";

export const GET_CONTENT_V2_DIRECTORY_TNVED_OPERATION_ID =
  "GET /content/v2/directory/tnved";

const definition: WbOperationDefinition<GetContentV2DirectoryTnvedResponse> = {
  operationId: GET_CONTENT_V2_DIRECTORY_TNVED_OPERATION_ID,
  method: "GET",
  path: "/content/v2/directory/tnved",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [
    { name: "subjectID", location: "query", required: true, array: false },
    { name: "search", location: "query", required: false, array: false },
    { name: "locale", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetContentV2DirectoryTnvedResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetContentV2DirectoryTnved(
  execute: WbOperationExecutor,
  input: GetContentV2DirectoryTnvedInput,
  options: WbRequestOptions = {},
): Promise<GetContentV2DirectoryTnvedResponse> {
  return execute(definition, input, options);
}
