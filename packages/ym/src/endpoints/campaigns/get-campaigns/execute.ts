// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetCampaignsResponse } from "./contract.js";
import type { GetCampaignsInput, GetCampaignsResponse } from "./types.js";

export const GET_CAMPAIGNS_OPERATION_ID = "getCampaigns";

const definition: YmOperationDefinition<GetCampaignsResponse> = {
  operationId: GET_CAMPAIGNS_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "pageToken", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
    { name: "page", location: "query", required: false, array: false },
    { name: "pageSize", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetCampaignsResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetCampaigns(
  execute: YmOperationExecutor,
  input?: GetCampaignsInput,
  options: YmRequestOptions = {},
): Promise<GetCampaignsResponse> {
  return execute(definition, input ?? {}, options);
}
