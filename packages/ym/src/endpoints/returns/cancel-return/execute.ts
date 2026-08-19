// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseCancelReturnResponse } from "./contract.js";
import type { CancelReturnInput, CancelReturnResponse } from "./types.js";

export const CANCEL_RETURN_OPERATION_ID = "cancelReturn";

const definition: YmOperationDefinition<CancelReturnResponse> = {
  operationId: CANCEL_RETURN_OPERATION_ID,
  method: "POST",
  path: "/v1/campaigns/{campaignId}/returns/cancel",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseCancelReturnResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeCancelReturn(
  execute: YmOperationExecutor,
  input: CancelReturnInput,
  options: YmRequestOptions = {},
): Promise<CancelReturnResponse> {
  return execute(definition, input, options);
}
