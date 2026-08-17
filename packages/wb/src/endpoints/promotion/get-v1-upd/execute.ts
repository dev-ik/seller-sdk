// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1UpdResponse } from "./contract.js";
import type { GetV1UpdInput, GetV1UpdResponse } from "./types.js";

export const GET_V1_UPD_OPERATION_ID = "getV1Upd";

const definition: WbOperationDefinition<GetV1UpdResponse> = {
  operationId: GET_V1_UPD_OPERATION_ID,
  method: "GET",
  path: "/adv/v1/upd",
  productionOrigin: "https://advert-api.wildberries.ru",
  sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
  parameters: [
    { name: "from", location: "query", required: true, array: false },
    { name: "to", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1UpdResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Upd(
  execute: WbOperationExecutor,
  input: GetV1UpdInput,
  options: WbRequestOptions = {},
): Promise<GetV1UpdResponse> {
  return execute(definition, input, options);
}
