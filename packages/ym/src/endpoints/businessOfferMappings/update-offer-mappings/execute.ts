// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateOfferMappingsResponse } from "./contract.js";
import type {
  UpdateOfferMappingsInput,
  UpdateOfferMappingsResponse,
} from "./types.js";

export const UPDATE_OFFER_MAPPINGS_OPERATION_ID = "updateOfferMappings";

const definition: YmOperationDefinition<UpdateOfferMappingsResponse> = {
  operationId: UPDATE_OFFER_MAPPINGS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/offer-mappings/update",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
    { name: "language", location: "query", required: false, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateOfferMappingsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateOfferMappings(
  execute: YmOperationExecutor,
  input: UpdateOfferMappingsInput,
  options: YmRequestOptions = {},
): Promise<UpdateOfferMappingsResponse> {
  return execute(definition, input, options);
}
