// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostContentV2GetCardsTrashResponse } from "./contract.js";
import type {
  PostContentV2GetCardsTrashInput,
  PostContentV2GetCardsTrashResponse,
} from "./types.js";

export const POST_CONTENT_V2_GET_CARDS_TRASH_OPERATION_ID =
  "POST /content/v2/get/cards/trash";

const definition: WbOperationDefinition<PostContentV2GetCardsTrashResponse> = {
  operationId: POST_CONTENT_V2_GET_CARDS_TRASH_OPERATION_ID,
  method: "POST",
  path: "/content/v2/get/cards/trash",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [
    { name: "locale", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostContentV2GetCardsTrashResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostContentV2GetCardsTrash(
  execute: WbOperationExecutor,
  input: PostContentV2GetCardsTrashInput,
  options: WbRequestOptions = {},
): Promise<PostContentV2GetCardsTrashResponse> {
  return execute(definition, input, options);
}
