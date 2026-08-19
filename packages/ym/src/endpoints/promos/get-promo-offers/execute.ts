// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetPromoOffersResponse } from "./contract.js";
import type { GetPromoOffersInput, GetPromoOffersResponse } from "./types.js";

export const GET_PROMO_OFFERS_OPERATION_ID = "getPromoOffers";

const definition: YmOperationDefinition<GetPromoOffersResponse> = {
  operationId: GET_PROMO_OFFERS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/promos/offers",
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
  parseResponse: parseGetPromoOffersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetPromoOffers(
  execute: YmOperationExecutor,
  input: GetPromoOffersInput,
  options: YmRequestOptions = {},
): Promise<GetPromoOffersResponse> {
  return execute(definition, input, options);
}
