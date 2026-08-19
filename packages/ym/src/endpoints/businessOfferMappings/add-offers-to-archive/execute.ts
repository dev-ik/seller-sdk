// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseAddOffersToArchiveResponse } from "./contract.js";
import type {
  AddOffersToArchiveInput,
  AddOffersToArchiveResponse,
} from "./types.js";

export const ADD_OFFERS_TO_ARCHIVE_OPERATION_ID = "addOffersToArchive";

const definition: YmOperationDefinition<AddOffersToArchiveResponse> = {
  operationId: ADD_OFFERS_TO_ARCHIVE_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/offer-mappings/archive",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseAddOffersToArchiveResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeAddOffersToArchive(
  execute: YmOperationExecutor,
  input: AddOffersToArchiveInput,
  options: YmRequestOptions = {},
): Promise<AddOffersToArchiveResponse> {
  return execute(definition, input, options);
}
