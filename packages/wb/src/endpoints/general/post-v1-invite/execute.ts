// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1InviteResponse } from "./contract.js";
import type { PostV1InviteInput, PostV1InviteResponse } from "./types.js";

export const POST_V1_INVITE_OPERATION_ID = "postV1Invite";

const definition: WbOperationDefinition<PostV1InviteResponse> = {
  operationId: POST_V1_INVITE_OPERATION_ID,
  method: "POST",
  path: "/api/v1/invite",
  productionOrigin: "https://user-management-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1InviteResponse,
  source: "https://dev.wildberries.ru/docs/openapi/api-information",
  verifiedAt: "2026-08-17",
};

export function executePostV1Invite(
  execute: WbOperationExecutor,
  input: PostV1InviteInput,
  options: WbRequestOptions = {},
): Promise<PostV1InviteResponse> {
  return execute(definition, input, options);
}
