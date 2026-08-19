// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseAddHiddenOffersResponse } from "./contract.js";
import type { AddHiddenOffersInput, AddHiddenOffersResponse } from "./types.js";

export const ADD_HIDDEN_OFFERS_OPERATION_ID = "addHiddenOffers";

const definition: YmOperationDefinition<AddHiddenOffersResponse> = {
  operationId: ADD_HIDDEN_OFFERS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/hidden-offers",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseAddHiddenOffersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeAddHiddenOffers(
  execute: YmOperationExecutor,
  input: AddHiddenOffersInput,
  options: YmRequestOptions = {},
): Promise<AddHiddenOffersResponse> {
  return execute(definition, input, options);
}
