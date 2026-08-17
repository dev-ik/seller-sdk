// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1TariffsBoxResponse } from "./contract.js";
import type { GetV1TariffsBoxInput, GetV1TariffsBoxResponse } from "./types.js";

export const GET_V1_TARIFFS_BOX_OPERATION_ID = "getV1TariffsBox";

const definition: WbOperationDefinition<GetV1TariffsBoxResponse> = {
  operationId: GET_V1_TARIFFS_BOX_OPERATION_ID,
  method: "GET",
  path: "/api/v1/tariffs/box",
  productionOrigin: "https://common-api.wildberries.ru",
  parameters: [
    { name: "date", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1TariffsBoxResponse,
  source: "https://dev.wildberries.ru/docs/openapi/rates",
  verifiedAt: "2026-08-17",
};

export function executeGetV1TariffsBox(
  execute: WbOperationExecutor,
  input: GetV1TariffsBoxInput,
  options: WbRequestOptions = {},
): Promise<GetV1TariffsBoxResponse> {
  return execute(definition, input, options);
}
