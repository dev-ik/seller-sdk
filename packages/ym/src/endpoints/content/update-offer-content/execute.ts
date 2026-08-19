// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateOfferContentResponse } from "./contract.js";
import type {
  UpdateOfferContentInput,
  UpdateOfferContentResponse,
} from "./types.js";

export const UPDATE_OFFER_CONTENT_OPERATION_ID = "updateOfferContent";

const definition: YmOperationDefinition<UpdateOfferContentResponse> = {
  operationId: UPDATE_OFFER_CONTENT_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/offer-cards/update",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateOfferContentResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateOfferContent(
  execute: YmOperationExecutor,
  input: UpdateOfferContentInput,
  options: YmRequestOptions = {},
): Promise<UpdateOfferContentResponse> {
  return execute(definition, input, options);
}
