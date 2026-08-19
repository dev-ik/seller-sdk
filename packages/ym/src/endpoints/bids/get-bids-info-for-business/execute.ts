// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetBidsInfoForBusinessResponse } from "./contract.js";
import type {
  GetBidsInfoForBusinessInput,
  GetBidsInfoForBusinessResponse,
} from "./types.js";

export const GET_BIDS_INFO_FOR_BUSINESS_OPERATION_ID = "getBidsInfoForBusiness";

const definition: YmOperationDefinition<GetBidsInfoForBusinessResponse> = {
  operationId: GET_BIDS_INFO_FOR_BUSINESS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/bids/info",
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
  parseResponse: parseGetBidsInfoForBusinessResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetBidsInfoForBusiness(
  execute: YmOperationExecutor,
  input: GetBidsInfoForBusinessInput,
  options: YmRequestOptions = {},
): Promise<GetBidsInfoForBusinessResponse> {
  return execute(definition, input, options);
}
