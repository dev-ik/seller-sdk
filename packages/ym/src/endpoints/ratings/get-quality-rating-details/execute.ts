// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetQualityRatingDetailsResponse } from "./contract.js";
import type {
  GetQualityRatingDetailsInput,
  GetQualityRatingDetailsResponse,
} from "./types.js";

export const GET_QUALITY_RATING_DETAILS_OPERATION_ID =
  "getQualityRatingDetails";

const definition: YmOperationDefinition<GetQualityRatingDetailsResponse> = {
  operationId: GET_QUALITY_RATING_DETAILS_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/ratings/quality/details",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetQualityRatingDetailsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetQualityRatingDetails(
  execute: YmOperationExecutor,
  input: GetQualityRatingDetailsInput,
  options: YmRequestOptions = {},
): Promise<GetQualityRatingDetailsResponse> {
  return execute(definition, input, options);
}
