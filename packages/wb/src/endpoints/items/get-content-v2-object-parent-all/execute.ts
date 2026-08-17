// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetContentV2ObjectParentAllResponse } from "./contract.js";
import type {
  GetContentV2ObjectParentAllInput,
  GetContentV2ObjectParentAllResponse,
} from "./types.js";

export const GET_CONTENT_V2_OBJECT_PARENT_ALL_OPERATION_ID =
  "GET /content/v2/object/parent/all";

const definition: WbOperationDefinition<GetContentV2ObjectParentAllResponse> = {
  operationId: GET_CONTENT_V2_OBJECT_PARENT_ALL_OPERATION_ID,
  method: "GET",
  path: "/content/v2/object/parent/all",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [
    { name: "locale", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetContentV2ObjectParentAllResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetContentV2ObjectParentAll(
  execute: WbOperationExecutor,
  input?: GetContentV2ObjectParentAllInput,
  options: WbRequestOptions = {},
): Promise<GetContentV2ObjectParentAllResponse> {
  return execute(definition, input ?? {}, options);
}
