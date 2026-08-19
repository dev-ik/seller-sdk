// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseDeleteHiddenOffersResponse } from "./contract.js";
import type {
  DeleteHiddenOffersInput,
  DeleteHiddenOffersResponse,
} from "./types.js";

export const DELETE_HIDDEN_OFFERS_OPERATION_ID = "deleteHiddenOffers";

const definition: YmOperationDefinition<DeleteHiddenOffersResponse> = {
  operationId: DELETE_HIDDEN_OFFERS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/hidden-offers/delete",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseDeleteHiddenOffersResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeDeleteHiddenOffers(
  execute: YmOperationExecutor,
  input: DeleteHiddenOffersInput,
  options: YmRequestOptions = {},
): Promise<DeleteHiddenOffersResponse> {
  return execute(definition, input, options);
}
