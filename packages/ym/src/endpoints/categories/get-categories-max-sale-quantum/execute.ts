// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetCategoriesMaxSaleQuantumResponse } from "./contract.js";
import type {
  GetCategoriesMaxSaleQuantumInput,
  GetCategoriesMaxSaleQuantumResponse,
} from "./types.js";

export const GET_CATEGORIES_MAX_SALE_QUANTUM_OPERATION_ID =
  "getCategoriesMaxSaleQuantum";

const definition: YmOperationDefinition<GetCategoriesMaxSaleQuantumResponse> = {
  operationId: GET_CATEGORIES_MAX_SALE_QUANTUM_OPERATION_ID,
  method: "POST",
  path: "/v2/categories/max-sale-quantum",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetCategoriesMaxSaleQuantumResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetCategoriesMaxSaleQuantum(
  execute: YmOperationExecutor,
  input: GetCategoriesMaxSaleQuantumInput,
  options: YmRequestOptions = {},
): Promise<GetCategoriesMaxSaleQuantumResponse> {
  return execute(definition, input, options);
}
