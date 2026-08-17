// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV2AdvertsResponse } from "./contract.js";
import type { GetV2AdvertsInput, GetV2AdvertsResponse } from "./types.js";

export const GET_V2_ADVERTS_OPERATION_ID = "getV2Adverts";

const definition: WbOperationDefinition<GetV2AdvertsResponse> = {
  operationId: GET_V2_ADVERTS_OPERATION_ID,
  method: "GET",
  path: "/api/advert/v2/adverts",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [
    { name: "ids", location: "query", required: false, array: false },
    { name: "statuses", location: "query", required: false, array: false },
    { name: "payment_type", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV2AdvertsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV2Adverts(
  execute: WbOperationExecutor,
  input?: GetV2AdvertsInput,
  options: WbRequestOptions = {},
): Promise<GetV2AdvertsResponse> {
  return execute(definition, input ?? {}, options);
}
