// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetContentV2ObjectAllResponse } from "./contract.js";
import type {
  GetContentV2ObjectAllInput,
  GetContentV2ObjectAllResponse,
} from "./types.js";

export const GET_CONTENT_V2_OBJECT_ALL_OPERATION_ID =
  "GET /content/v2/object/all";

const definition: WbOperationDefinition<GetContentV2ObjectAllResponse> = {
  operationId: GET_CONTENT_V2_OBJECT_ALL_OPERATION_ID,
  method: "GET",
  path: "/content/v2/object/all",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [
    { name: "locale", location: "query", required: false, array: false },
    { name: "name", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
    { name: "offset", location: "query", required: false, array: false },
    { name: "parentID", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetContentV2ObjectAllResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetContentV2ObjectAll(
  execute: WbOperationExecutor,
  input?: GetContentV2ObjectAllInput,
  options: WbRequestOptions = {},
): Promise<GetContentV2ObjectAllResponse> {
  return execute(definition, input ?? {}, options);
}
