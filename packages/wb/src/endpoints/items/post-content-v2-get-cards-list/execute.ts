// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostContentV2GetCardsListResponse } from "./contract.js";
import type {
  PostContentV2GetCardsListInput,
  PostContentV2GetCardsListResponse,
} from "./types.js";

export const POST_CONTENT_V2_GET_CARDS_LIST_OPERATION_ID =
  "POST /content/v2/get/cards/list";

const definition: WbOperationDefinition<PostContentV2GetCardsListResponse> = {
  operationId: POST_CONTENT_V2_GET_CARDS_LIST_OPERATION_ID,
  method: "POST",
  path: "/content/v2/get/cards/list",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [
    { name: "locale", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostContentV2GetCardsListResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostContentV2GetCardsList(
  execute: WbOperationExecutor,
  input: PostContentV2GetCardsListInput,
  options: WbRequestOptions = {},
): Promise<PostContentV2GetCardsListResponse> {
  return execute(definition, input, options);
}
