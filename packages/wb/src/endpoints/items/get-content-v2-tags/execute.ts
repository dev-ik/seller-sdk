// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetContentV2TagsResponse } from "./contract.js";
import type { GetContentV2TagsResponse } from "./types.js";

export const GET_CONTENT_V2_TAGS_OPERATION_ID = "GET /content/v2/tags";

const definition: WbOperationDefinition<GetContentV2TagsResponse> = {
  operationId: GET_CONTENT_V2_TAGS_OPERATION_ID,
  method: "GET",
  path: "/content/v2/tags",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetContentV2TagsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executeGetContentV2Tags(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetContentV2TagsResponse> {
  return execute(definition, undefined, options);
}
