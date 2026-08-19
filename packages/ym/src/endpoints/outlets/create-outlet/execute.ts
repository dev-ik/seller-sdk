// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseCreateOutletResponse } from "./contract.js";
import type { CreateOutletInput, CreateOutletResponse } from "./types.js";

export const CREATE_OUTLET_OPERATION_ID = "createOutlet";

const definition: YmOperationDefinition<CreateOutletResponse> = {
  operationId: CREATE_OUTLET_OPERATION_ID,
  method: "POST",
  path: "/v2/campaigns/{campaignId}/outlets",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseCreateOutletResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeCreateOutlet(
  execute: YmOperationExecutor,
  input: CreateOutletInput,
  options: YmRequestOptions = {},
): Promise<CreateOutletResponse> {
  return execute(definition, input, options);
}
