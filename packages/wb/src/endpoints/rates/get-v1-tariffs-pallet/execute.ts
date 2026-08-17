// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1TariffsPalletResponse } from "./contract.js";
import type {
  GetV1TariffsPalletInput,
  GetV1TariffsPalletResponse,
} from "./types.js";

export const GET_V1_TARIFFS_PALLET_OPERATION_ID = "getV1TariffsPallet";

const definition: WbOperationDefinition<GetV1TariffsPalletResponse> = {
  operationId: GET_V1_TARIFFS_PALLET_OPERATION_ID,
  method: "GET",
  path: "/api/v1/tariffs/pallet",
  productionOrigin: "https://common-api.wildberries.ru",
  parameters: [
    { name: "date", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1TariffsPalletResponse,
  source: "https://dev.wildberries.ru/docs/openapi/rates",
  verifiedAt: "2026-08-17",
};

export function executeGetV1TariffsPallet(
  execute: WbOperationExecutor,
  input: GetV1TariffsPalletInput,
  options: WbRequestOptions = {},
): Promise<GetV1TariffsPalletResponse> {
  return execute(definition, input, options);
}
