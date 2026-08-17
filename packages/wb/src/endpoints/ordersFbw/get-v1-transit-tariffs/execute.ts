// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1TransitTariffsResponse } from "./contract.js";
import type { GetV1TransitTariffsResponse } from "./types.js";

export const GET_V1_TRANSIT_TARIFFS_OPERATION_ID = "getV1TransitTariffs";

const definition: WbOperationDefinition<GetV1TransitTariffsResponse> = {
  operationId: GET_V1_TRANSIT_TARIFFS_OPERATION_ID,
  method: "GET",
  path: "/api/v1/transit-tariffs",
  productionOrigin: "https://supplies-api.wildberries.ru",
  parameters: [],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1TransitTariffsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/orders-fbw",
  verifiedAt: "2026-08-17",
};

export function executeGetV1TransitTariffs(
  execute: WbOperationExecutor,
  options: WbRequestOptions = {},
): Promise<GetV1TransitTariffsResponse> {
  return execute(definition, undefined, options);
}
