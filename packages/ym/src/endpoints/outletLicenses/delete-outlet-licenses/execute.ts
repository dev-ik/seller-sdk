// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseDeleteOutletLicensesResponse } from "./contract.js";
import type {
  DeleteOutletLicensesInput,
  DeleteOutletLicensesResponse,
} from "./types.js";

export const DELETE_OUTLET_LICENSES_OPERATION_ID = "deleteOutletLicenses";

const definition: YmOperationDefinition<DeleteOutletLicensesResponse> = {
  operationId: DELETE_OUTLET_LICENSES_OPERATION_ID,
  method: "DELETE",
  path: "/v2/campaigns/{campaignId}/outlets/licenses",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
    { name: "ids", location: "query", required: true, array: true },
  ],
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseDeleteOutletLicensesResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeDeleteOutletLicenses(
  execute: YmOperationExecutor,
  input: DeleteOutletLicensesInput,
  options: YmRequestOptions = {},
): Promise<DeleteOutletLicensesResponse> {
  return execute(definition, input, options);
}
