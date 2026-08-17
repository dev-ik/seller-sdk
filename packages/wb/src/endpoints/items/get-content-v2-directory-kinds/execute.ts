// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetContentV2DirectoryKindsResponse } from "./contract.js";
import type {
  GetContentV2DirectoryKindsInput,
  GetContentV2DirectoryKindsResponse,
} from "./types.js";

export const GET_CONTENT_V2_DIRECTORY_KINDS_OPERATION_ID =
  "GET /content/v2/directory/kinds";

const definition: WbOperationDefinition<GetContentV2DirectoryKindsResponse> = {
  operationId: GET_CONTENT_V2_DIRECTORY_KINDS_OPERATION_ID,
  method: "GET",
  path: "/content/v2/directory/kinds",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [
    { name: "locale", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetContentV2DirectoryKindsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetContentV2DirectoryKinds(
  execute: WbOperationExecutor,
  input?: GetContentV2DirectoryKindsInput,
  options: WbRequestOptions = {},
): Promise<GetContentV2DirectoryKindsResponse> {
  return execute(definition, input ?? {}, options);
}
