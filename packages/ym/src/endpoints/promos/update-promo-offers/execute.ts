// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdatePromoOffersResponse } from "./contract.js";
import type {
  UpdatePromoOffersInput,
  UpdatePromoOffersResponse,
} from "./types.js";

export const UPDATE_PROMO_OFFERS_OPERATION_ID = "updatePromoOffers";

const definition: YmOperationDefinition<UpdatePromoOffersResponse> = {
  operationId: UPDATE_PROMO_OFFERS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/promos/offers/update",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdatePromoOffersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdatePromoOffers(
  execute: YmOperationExecutor,
  input: UpdatePromoOffersInput,
  options: YmRequestOptions = {},
): Promise<UpdatePromoOffersResponse> {
  return execute(definition, input, options);
}
