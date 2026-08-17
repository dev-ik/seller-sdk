// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostContentV2CardsErrorListResponse } from "./contract.js";
import type {
  PostContentV2CardsErrorListInput,
  PostContentV2CardsErrorListResponse,
} from "./types.js";

export const POST_CONTENT_V2_CARDS_ERROR_LIST_OPERATION_ID =
  "POST /content/v2/cards/error/list";

const definition: WbOperationDefinition<PostContentV2CardsErrorListResponse> = {
  operationId: POST_CONTENT_V2_CARDS_ERROR_LIST_OPERATION_ID,
  method: "POST",
  path: "/content/v2/cards/error/list",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [
    { name: "locale", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostContentV2CardsErrorListResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostContentV2CardsErrorList(
  execute: WbOperationExecutor,
  input: PostContentV2CardsErrorListInput,
  options: WbRequestOptions = {},
): Promise<PostContentV2CardsErrorListResponse> {
  return execute(definition, input, options);
}
