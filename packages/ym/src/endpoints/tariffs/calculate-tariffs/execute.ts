// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseCalculateTariffsResponse } from "./contract.js";
import type {
  CalculateTariffsInput,
  CalculateTariffsResponse,
} from "./types.js";

export const CALCULATE_TARIFFS_OPERATION_ID = "calculateTariffs";

const definition: YmOperationDefinition<CalculateTariffsResponse> = {
  operationId: CALCULATE_TARIFFS_OPERATION_ID,
  method: "POST",
  path: "/v2/tariffs/calculate",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseCalculateTariffsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeCalculateTariffs(
  execute: YmOperationExecutor,
  input: CalculateTariffsInput,
  options: YmRequestOptions = {},
): Promise<CalculateTariffsResponse> {
  return execute(definition, input, options);
}
