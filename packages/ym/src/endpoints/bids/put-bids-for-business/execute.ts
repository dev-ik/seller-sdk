// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parsePutBidsForBusinessResponse } from "./contract.js";
import type {
  PutBidsForBusinessInput,
  PutBidsForBusinessResponse,
} from "./types.js";

export const PUT_BIDS_FOR_BUSINESS_OPERATION_ID = "putBidsForBusiness";

const definition: YmOperationDefinition<PutBidsForBusinessResponse> = {
  operationId: PUT_BIDS_FOR_BUSINESS_OPERATION_ID,
  method: "PUT",
  path: "/v2/businesses/{businessId}/bids",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePutBidsForBusinessResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executePutBidsForBusiness(
  execute: YmOperationExecutor,
  input: PutBidsForBusinessInput,
  options: YmRequestOptions = {},
): Promise<PutBidsForBusinessResponse> {
  return execute(definition, input, options);
}
