// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostContentV2CardsUpdateResponse } from "./contract.js";
import type {
  PostContentV2CardsUpdateInput,
  PostContentV2CardsUpdateResponse,
} from "./types.js";

export const POST_CONTENT_V2_CARDS_UPDATE_OPERATION_ID =
  "POST /content/v2/cards/update";

const definition: WbOperationDefinition<PostContentV2CardsUpdateResponse> = {
  operationId: POST_CONTENT_V2_CARDS_UPDATE_OPERATION_ID,
  method: "POST",
  path: "/content/v2/cards/update",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostContentV2CardsUpdateResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostContentV2CardsUpdate(
  execute: WbOperationExecutor,
  input?: PostContentV2CardsUpdateInput,
  options: WbRequestOptions = {},
): Promise<PostContentV2CardsUpdateResponse> {
  return execute(definition, input ?? {}, options);
}
