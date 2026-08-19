// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetQualityRatingsResponse } from "./contract.js";
import type {
  GetQualityRatingsInput,
  GetQualityRatingsResponse,
} from "./types.js";

export const GET_QUALITY_RATINGS_OPERATION_ID = "getQualityRatings";

const definition: YmOperationDefinition<GetQualityRatingsResponse> = {
  operationId: GET_QUALITY_RATINGS_OPERATION_ID,
  method: "POST",
  path: "/v2/businesses/{businessId}/ratings/quality",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "businessId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetQualityRatingsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetQualityRatings(
  execute: YmOperationExecutor,
  input: GetQualityRatingsInput,
  options: YmRequestOptions = {},
): Promise<GetQualityRatingsResponse> {
  return execute(definition, input, options);
}
