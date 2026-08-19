// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOfferMappingsResponse } from "./contract.js";
import type {
  GetOfferMappingsInput,
  GetOfferMappingsResponse,
} from "./types.js";

export const GET_OFFER_MAPPINGS_OPERATION_ID = "getOfferMappings";

const definition: YmOperationDefinition<GetOfferMappingsResponse> = {
  operationId: GET_OFFER_MAPPINGS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/offer-mappings",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
    { name: "language", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetOfferMappingsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetOfferMappings(
  execute: YmOperationExecutor,
  input: GetOfferMappingsInput,
  options: YmRequestOptions = {},
): Promise<GetOfferMappingsResponse> {
  return execute(definition, input, options);
}
