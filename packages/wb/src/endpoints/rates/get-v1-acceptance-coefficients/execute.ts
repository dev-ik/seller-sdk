// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1AcceptanceCoefficientsResponse } from "./contract.js";
import type {
  GetV1AcceptanceCoefficientsInput,
  GetV1AcceptanceCoefficientsResponse,
} from "./types.js";

export const GET_V1_ACCEPTANCE_COEFFICIENTS_OPERATION_ID =
  "getV1AcceptanceCoefficients";

const definition: WbOperationDefinition<GetV1AcceptanceCoefficientsResponse> = {
  operationId: GET_V1_ACCEPTANCE_COEFFICIENTS_OPERATION_ID,
  method: "GET",
  path: "/api/tariffs/v1/acceptance/coefficients",
  productionOrigin: "https://common-api.wildberries.ru",
  parameters: [
    { name: "warehouseIDs", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1AcceptanceCoefficientsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/rates",
  verifiedAt: "2026-08-17",
};

export function executeGetV1AcceptanceCoefficients(
  execute: WbOperationExecutor,
  input?: GetV1AcceptanceCoefficientsInput,
  options: WbRequestOptions = {},
): Promise<GetV1AcceptanceCoefficientsResponse> {
  return execute(definition, input ?? {}, options);
}
