// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseDeleteV1UserResponse } from "./contract.js";
import type { DeleteV1UserInput, DeleteV1UserResponse } from "./types.js";

export const DELETE_V1_USER_OPERATION_ID = "deleteV1User";

const definition: WbOperationDefinition<DeleteV1UserResponse> = {
  operationId: DELETE_V1_USER_OPERATION_ID,
  method: "DELETE",
  path: "/api/v1/user",
  productionOrigin: "https://user-management-api.wildberries.ru",
  parameters: [
    { name: "deletedUserID", location: "query", required: true, array: false },
  ],
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseDeleteV1UserResponse,
  source: "https://dev.wildberries.ru/docs/openapi/api-information",
  verifiedAt: "2026-08-17",
};

export function executeDeleteV1User(
  execute: WbOperationExecutor,
  input: DeleteV1UserInput,
  options: WbRequestOptions = {},
): Promise<DeleteV1UserResponse> {
  return execute(definition, input, options);
}
