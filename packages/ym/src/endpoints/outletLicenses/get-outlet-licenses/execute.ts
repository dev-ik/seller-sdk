// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseGetOutletLicensesResponse } from "./contract.js";
import type {
  GetOutletLicensesInput,
  GetOutletLicensesResponse,
} from "./types.js";

export const GET_OUTLET_LICENSES_OPERATION_ID = "getOutletLicenses";

const definition: YmOperationDefinition<GetOutletLicensesResponse> = {
  operationId: GET_OUTLET_LICENSES_OPERATION_ID,
  method: "GET",
  path: "/v2/campaigns/{campaignId}/outlets/licenses",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "outletIds", location: "query", required: false, array: true },
    { name: "ids", location: "query", required: false, array: true },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetOutletLicensesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeGetOutletLicenses(
  execute: YmOperationExecutor,
  input: GetOutletLicensesInput,
  options: YmRequestOptions = {},
): Promise<GetOutletLicensesResponse> {
  return execute(definition, input, options);
}
