// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseDeleteOffersFromArchiveResponse } from "./contract.js";
import type {
  DeleteOffersFromArchiveInput,
  DeleteOffersFromArchiveResponse,
} from "./types.js";

export const DELETE_OFFERS_FROM_ARCHIVE_OPERATION_ID =
  "deleteOffersFromArchive";

const definition: YmOperationDefinition<DeleteOffersFromArchiveResponse> = {
  operationId: DELETE_OFFERS_FROM_ARCHIVE_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/offer-mappings/unarchive",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseDeleteOffersFromArchiveResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeDeleteOffersFromArchive(
  execute: YmOperationExecutor,
  input: DeleteOffersFromArchiveInput,
  options: YmRequestOptions = {},
): Promise<DeleteOffersFromArchiveResponse> {
  return execute(definition, input, options);
}
