// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostContentV2CardsRecoverResponse } from "./contract.js";
import type {
  PostContentV2CardsRecoverInput,
  PostContentV2CardsRecoverResponse,
} from "./types.js";

export const POST_CONTENT_V2_CARDS_RECOVER_OPERATION_ID =
  "POST /content/v2/cards/recover";

const definition: WbOperationDefinition<PostContentV2CardsRecoverResponse> = {
  operationId: POST_CONTENT_V2_CARDS_RECOVER_OPERATION_ID,
  method: "POST",
  path: "/content/v2/cards/recover",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostContentV2CardsRecoverResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostContentV2CardsRecover(
  execute: WbOperationExecutor,
  input: PostContentV2CardsRecoverInput,
  options: WbRequestOptions = {},
): Promise<PostContentV2CardsRecoverResponse> {
  return execute(definition, input, options);
}
