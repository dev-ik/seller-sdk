// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetSupplyRequestDocumentsResponse } from "./contract.js";
import type {
  GetSupplyRequestDocumentsInput,
  GetSupplyRequestDocumentsResponse,
} from "./types.js";

export const GET_SUPPLY_REQUEST_DOCUMENTS_OPERATION_ID =
  "getSupplyRequestDocuments";

const definition: YmOperationDefinition<GetSupplyRequestDocumentsResponse> = {
  operationId: GET_SUPPLY_REQUEST_DOCUMENTS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/supply-requests/documents",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetSupplyRequestDocumentsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetSupplyRequestDocuments(
  execute: YmOperationExecutor,
  input: GetSupplyRequestDocumentsInput,
  options: YmRequestOptions = {},
): Promise<GetSupplyRequestDocumentsResponse> {
  return execute(definition, input, options);
}
