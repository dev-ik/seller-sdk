// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1PaymentsResponse } from "./contract.js";
import type { GetV1PaymentsInput, GetV1PaymentsResponse } from "./types.js";

export const GET_V1_PAYMENTS_OPERATION_ID = "getV1Payments";

const definition: WbOperationDefinition<GetV1PaymentsResponse> = {
  operationId: GET_V1_PAYMENTS_OPERATION_ID,
  method: "GET",
  path: "/adv/v1/payments",
  productionOrigin: "https://advert-api.wildberries.ru",
  sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
  parameters: [
    { name: "from", location: "query", required: false, array: false },
    { name: "to", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1PaymentsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Payments(
  execute: WbOperationExecutor,
  input?: GetV1PaymentsInput,
  options: WbRequestOptions = {},
): Promise<GetV1PaymentsResponse> {
  return execute(definition, input ?? {}, options);
}
