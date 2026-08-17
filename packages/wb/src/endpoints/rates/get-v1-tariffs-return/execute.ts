// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1TariffsReturnResponse } from "./contract.js";
import type {
  GetV1TariffsReturnInput,
  GetV1TariffsReturnResponse,
} from "./types.js";

export const GET_V1_TARIFFS_RETURN_OPERATION_ID = "getV1TariffsReturn";

const definition: WbOperationDefinition<GetV1TariffsReturnResponse> = {
  operationId: GET_V1_TARIFFS_RETURN_OPERATION_ID,
  method: "GET",
  path: "/api/v1/tariffs/return",
  productionOrigin: "https://common-api.wildberries.ru",
  parameters: [
    { name: "date", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1TariffsReturnResponse,
  source: "https://dev.wildberries.ru/docs/openapi/rates",
  verifiedAt: "2026-08-17",
};

export function executeGetV1TariffsReturn(
  execute: WbOperationExecutor,
  input: GetV1TariffsReturnInput,
  options: WbRequestOptions = {},
): Promise<GetV1TariffsReturnResponse> {
  return execute(definition, input, options);
}
