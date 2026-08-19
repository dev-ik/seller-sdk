// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOfferCardsContentStatusResponse } from "./contract.js";
import type {
  GetOfferCardsContentStatusInput,
  GetOfferCardsContentStatusResponse,
} from "./types.js";

export const GET_OFFER_CARDS_CONTENT_STATUS_OPERATION_ID =
  "getOfferCardsContentStatus";

const definition: YmOperationDefinition<GetOfferCardsContentStatusResponse> = {
  operationId: GET_OFFER_CARDS_CONTENT_STATUS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/offer-cards",
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
  parseResponse: parseGetOfferCardsContentStatusResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetOfferCardsContentStatus(
  execute: YmOperationExecutor,
  input: GetOfferCardsContentStatusInput,
  options: YmRequestOptions = {},
): Promise<GetOfferCardsContentStatusResponse> {
  return execute(definition, input, options);
}
