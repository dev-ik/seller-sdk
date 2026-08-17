// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePutV1UsersAccessResponse } from "./contract.js";
import type {
  PutV1UsersAccessInput,
  PutV1UsersAccessResponse,
} from "./types.js";

export const PUT_V1_USERS_ACCESS_OPERATION_ID = "putV1UsersAccess";

const definition: WbOperationDefinition<PutV1UsersAccessResponse> = {
  operationId: PUT_V1_USERS_ACCESS_OPERATION_ID,
  method: "PUT",
  path: "/api/v1/users/access",
  productionOrigin: "https://user-management-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePutV1UsersAccessResponse,
  source: "https://dev.wildberries.ru/docs/openapi/api-information",
  verifiedAt: "2026-08-17",
};

export function executePutV1UsersAccess(
  execute: WbOperationExecutor,
  input: PutV1UsersAccessInput,
  options: WbRequestOptions = {},
): Promise<PutV1UsersAccessResponse> {
  return execute(definition, input, options);
}
