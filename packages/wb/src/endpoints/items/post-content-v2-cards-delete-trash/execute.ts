// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostContentV2CardsDeleteTrashResponse } from "./contract.js";
import type {
  PostContentV2CardsDeleteTrashInput,
  PostContentV2CardsDeleteTrashResponse,
} from "./types.js";

export const POST_CONTENT_V2_CARDS_DELETE_TRASH_OPERATION_ID =
  "POST /content/v2/cards/delete/trash";

const definition: WbOperationDefinition<PostContentV2CardsDeleteTrashResponse> =
  {
    operationId: POST_CONTENT_V2_CARDS_DELETE_TRASH_OPERATION_ID,
    method: "POST",
    path: "/content/v2/cards/delete/trash",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    parameters: [],
    requestContentType: "application/json",
    retrySafety: "unsafe",
    responseType: "json",
    accept: "application/json",
    parseResponse: parsePostContentV2CardsDeleteTrashResponse,
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  };

export function executePostContentV2CardsDeleteTrash(
  execute: WbOperationExecutor,
  input: PostContentV2CardsDeleteTrashInput,
  options: WbRequestOptions = {},
): Promise<PostContentV2CardsDeleteTrashResponse> {
  return execute(definition, input, options);
}
