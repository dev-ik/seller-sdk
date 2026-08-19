// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGenerateOfferBarcodesResponse } from "./contract.js";
import type {
  GenerateOfferBarcodesInput,
  GenerateOfferBarcodesResponse,
} from "./types.js";

export const GENERATE_OFFER_BARCODES_OPERATION_ID = "generateOfferBarcodes";

const definition: YmOperationDefinition<GenerateOfferBarcodesResponse> = {
  operationId: GENERATE_OFFER_BARCODES_OPERATION_ID,
  method: "POST",
  path: "/v1/businesses/{businessId}/offer-mappings/barcodes/generate",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGenerateOfferBarcodesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGenerateOfferBarcodes(
  execute: YmOperationExecutor,
  input: GenerateOfferBarcodesInput,
  options: YmRequestOptions = {},
): Promise<GenerateOfferBarcodesResponse> {
  return execute(definition, input, options);
}
