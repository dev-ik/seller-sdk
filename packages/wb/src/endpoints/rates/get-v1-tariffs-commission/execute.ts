// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1TariffsCommissionResponse } from "./contract.js";
import type {
  GetV1TariffsCommissionInput,
  GetV1TariffsCommissionResponse,
} from "./types.js";

export const GET_V1_TARIFFS_COMMISSION_OPERATION_ID = "getV1TariffsCommission";

const definition: WbOperationDefinition<GetV1TariffsCommissionResponse> = {
  operationId: GET_V1_TARIFFS_COMMISSION_OPERATION_ID,
  method: "GET",
  path: "/api/v1/tariffs/commission",
  productionOrigin: "https://common-api.wildberries.ru",
  parameters: [
    { name: "locale", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1TariffsCommissionResponse,
  source: "https://dev.wildberries.ru/docs/openapi/rates",
  verifiedAt: "2026-08-17",
};

export function executeGetV1TariffsCommission(
  execute: WbOperationExecutor,
  input?: GetV1TariffsCommissionInput,
  options: WbRequestOptions = {},
): Promise<GetV1TariffsCommissionResponse> {
  return execute(definition, input ?? {}, options);
}
