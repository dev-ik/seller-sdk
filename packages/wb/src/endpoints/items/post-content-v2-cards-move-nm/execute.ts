// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostContentV2CardsMoveNmResponse } from "./contract.js";
import type {
  PostContentV2CardsMoveNmInput,
  PostContentV2CardsMoveNmResponse,
} from "./types.js";

export const POST_CONTENT_V2_CARDS_MOVE_NM_OPERATION_ID =
  "POST /content/v2/cards/moveNm";

const definition: WbOperationDefinition<PostContentV2CardsMoveNmResponse> = {
  operationId: POST_CONTENT_V2_CARDS_MOVE_NM_OPERATION_ID,
  method: "POST",
  path: "/content/v2/cards/moveNm",
  productionOrigin: "https://content-api.wildberries.ru",
  sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostContentV2CardsMoveNmResponse,
  source: "https://dev.wildberries.ru/docs/openapi/items",
  verifiedAt: "2026-08-17",
};

export function executePostContentV2CardsMoveNm(
  execute: WbOperationExecutor,
  input?: PostContentV2CardsMoveNmInput,
  options: WbRequestOptions = {},
): Promise<PostContentV2CardsMoveNmResponse> {
  return execute(definition, input ?? {}, options);
}
