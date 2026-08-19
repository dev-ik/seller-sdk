// Generated request mapping and execution for this Yandex Market endpoint.
import type {
  YmOperationDefinition,
  YmOperationExecutor,
} from "../../../operation.js";
import type { YmRequestOptions } from "../../../request-options.js";
import { parseCreateReturnResponse } from "./contract.js";
import type { CreateReturnInput, CreateReturnResponse } from "./types.js";

export const CREATE_RETURN_OPERATION_ID = "createReturn";

const definition: YmOperationDefinition<CreateReturnResponse> = {
  operationId: CREATE_RETURN_OPERATION_ID,
  method: "POST",
  path: "/v1/campaigns/{campaignId}/returns/create",
  productionOrigin: "https://api.partner.market.yandex.ru",
  parameters: [
    { name: "campaignId", location: "path", required: true, array: false },
  ],
  requestContentType: "application/json",
  retrySafety: "unsafe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseCreateReturnResponse,
  source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
  verifiedAt: "2026-08-19",
};

export function executeCreateReturn(
  execute: YmOperationExecutor,
  input: CreateReturnInput,
  options: YmRequestOptions = {},
): Promise<CreateReturnResponse> {
  return execute(definition, input, options);
}
