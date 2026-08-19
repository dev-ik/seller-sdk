// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseDeletePromoOffersResponse } from "./contract.js";
import type {
  DeletePromoOffersInput,
  DeletePromoOffersResponse,
} from "./types.js";

export const DELETE_PROMO_OFFERS_OPERATION_ID = "deletePromoOffers";

const definition: YmOperationDefinition<DeletePromoOffersResponse> = {
  operationId: DELETE_PROMO_OFFERS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/promos/offers/delete",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseDeletePromoOffersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeDeletePromoOffers(
  execute: YmOperationExecutor,
  input: DeletePromoOffersInput,
  options: YmRequestOptions = {},
): Promise<DeletePromoOffersResponse> {
  return execute(definition, input, options);
}
