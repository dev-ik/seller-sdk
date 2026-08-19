// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseUpdateOutletLicensesResponse } from "./contract.js";
import type {
  UpdateOutletLicensesInput,
  UpdateOutletLicensesResponse,
} from "./types.js";

export const UPDATE_OUTLET_LICENSES_OPERATION_ID = "updateOutletLicenses";

const definition: YmOperationDefinition<UpdateOutletLicensesResponse> = {
  operationId: UPDATE_OUTLET_LICENSES_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/outlets/licenses",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseUpdateOutletLicensesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeUpdateOutletLicenses(
  execute: YmOperationExecutor,
  input: UpdateOutletLicensesInput,
  options: YmRequestOptions = {},
): Promise<UpdateOutletLicensesResponse> {
  return execute(definition, input, options);
}
