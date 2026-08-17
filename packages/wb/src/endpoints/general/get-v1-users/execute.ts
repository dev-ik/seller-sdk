// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1UsersResponse } from "./contract.js";
import type { GetV1UsersInput, GetV1UsersResponse } from "./types.js";

export const GET_V1_USERS_OPERATION_ID = "getV1Users";

const definition: WbOperationDefinition<GetV1UsersResponse> = {
  operationId: GET_V1_USERS_OPERATION_ID,
  method: "GET",
  path: "/api/v1/users",
  productionOrigin: "https://user-management-api.wildberries.ru",
  parameters: [
    { name: "limit", location: "query", required: false, array: false },
    { name: "offset", location: "query", required: false, array: false },
    { name: "isInviteOnly", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1UsersResponse,
  source: "https://dev.wildberries.ru/docs/openapi/api-information",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Users(
  execute: WbOperationExecutor,
  input?: GetV1UsersInput,
  options: WbRequestOptions = {},
): Promise<GetV1UsersResponse> {
  return execute(definition, input ?? {}, options);
}
