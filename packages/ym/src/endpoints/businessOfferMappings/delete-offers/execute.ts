// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseDeleteOffersResponse } from "./contract.js";
import type { DeleteOffersInput, DeleteOffersResponse } from "./types.js";

export const DELETE_OFFERS_OPERATION_ID = "deleteOffers";

const definition: YmOperationDefinition<DeleteOffersResponse> = {
  operationId: DELETE_OFFERS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/offer-mappings/delete",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseDeleteOffersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeDeleteOffers(
  execute: YmOperationExecutor,
  input: DeleteOffersInput,
  options: YmRequestOptions = {},
): Promise<DeleteOffersResponse> {
  return execute(definition, input, options);
}
