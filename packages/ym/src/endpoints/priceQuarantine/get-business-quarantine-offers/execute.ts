// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetBusinessQuarantineOffersResponse } from "./contract.js";
import type {
  GetBusinessQuarantineOffersInput,
  GetBusinessQuarantineOffersResponse,
} from "./types.js";

export const GET_BUSINESS_QUARANTINE_OFFERS_OPERATION_ID =
  "getBusinessQuarantineOffers";

const definition: YmOperationDefinition<GetBusinessQuarantineOffersResponse> = {
  operationId: GET_BUSINESS_QUARANTINE_OFFERS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/price-quarantine",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetBusinessQuarantineOffersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetBusinessQuarantineOffers(
  execute: YmOperationExecutor,
  input: GetBusinessQuarantineOffersInput,
  options: YmRequestOptions = {},
): Promise<GetBusinessQuarantineOffersResponse> {
  return execute(definition, input, options);
}
