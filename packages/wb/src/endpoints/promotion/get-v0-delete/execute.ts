// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV0DeleteResponse } from "./contract.js";
import type { GetV0DeleteInput, GetV0DeleteResponse } from "./types.js";

export const GET_V0_DELETE_OPERATION_ID = "getV0Delete";

const definition: WbOperationDefinition<GetV0DeleteResponse> = {
  operationId: GET_V0_DELETE_OPERATION_ID,
  method: "GET",
  path: "/adv/v0/delete",
  productionOrigin: "https://advert-api.wildberries.ru",
  sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
  parameters: [{ name: "id", location: "query", required: true, array: false }],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV0DeleteResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV0Delete(
  execute: WbOperationExecutor,
  input: GetV0DeleteInput,
  options: WbRequestOptions = {},
): Promise<GetV0DeleteResponse> {
  return execute(definition, input, options);
}
