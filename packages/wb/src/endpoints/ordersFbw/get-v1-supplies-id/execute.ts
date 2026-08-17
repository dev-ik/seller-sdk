// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1SuppliesIdResponse } from "./contract.js";
import type { GetV1SuppliesIdInput, GetV1SuppliesIdResponse } from "./types.js";

export const GET_V1_SUPPLIES_ID_OPERATION_ID = "getV1SuppliesId";

const definition: WbOperationDefinition<GetV1SuppliesIdResponse> = {
  operationId: GET_V1_SUPPLIES_ID_OPERATION_ID,
  method: "GET",
  path: "/api/v1/supplies/{ID}",
  productionOrigin: "https://supplies-api.wildberries.ru",
  parameters: [
    { name: "ID", location: "path", required: true, array: false },
    { name: "isPreorderID", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1SuppliesIdResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbw",
  verifiedAt: "2026-08-17",
};

export function executeGetV1SuppliesId(
  execute: WbOperationExecutor,
  input: GetV1SuppliesIdInput,
  options: WbRequestOptions = {},
): Promise<GetV1SuppliesIdResponse> {
  return execute(definition, input, options);
}
