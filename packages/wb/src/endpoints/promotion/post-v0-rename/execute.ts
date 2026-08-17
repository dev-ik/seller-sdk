// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV0RenameResponse } from "./contract.js";
import type { PostV0RenameInput, PostV0RenameResponse } from "./types.js";

export const POST_V0_RENAME_OPERATION_ID = "postV0Rename";

const definition: WbOperationDefinition<PostV0RenameResponse> = {
  operationId: POST_V0_RENAME_OPERATION_ID,
  method: "POST",
  path: "/adv/v0/rename",
  productionOrigin: "https://advert-api.wildberries.ru",
  sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV0RenameResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePostV0Rename(
  execute: WbOperationExecutor,
  input?: PostV0RenameInput,
  options: WbRequestOptions = {},
): Promise<PostV0RenameResponse> {
  return execute(definition, input ?? {}, options);
}
