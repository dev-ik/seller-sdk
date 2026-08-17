// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1AdvertsResponse } from "./contract.js";
import type { GetV1AdvertsInput, GetV1AdvertsResponse } from "./types.js";

export const GET_V1_ADVERTS_OPERATION_ID = "getV1Adverts";

const definition: WbOperationDefinition<GetV1AdvertsResponse> = {
  operationId: GET_V1_ADVERTS_OPERATION_ID,
  method: "GET",
  path: "/adv/v1/adverts",
  productionOrigin: "https://advert-media-api.wildberries.ru",
  parameters: [
    { name: "status", location: "query", required: false, array: false },
    { name: "type", location: "query", required: false, array: false },
    { name: "limit", location: "query", required: false, array: false },
    { name: "offset", location: "query", required: false, array: false },
    { name: "order", location: "query", required: false, array: false },
    { name: "direction", location: "query", required: false, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1AdvertsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Adverts(
  execute: WbOperationExecutor,
  input?: GetV1AdvertsInput,
  options: WbRequestOptions = {},
): Promise<GetV1AdvertsResponse> {
  return execute(definition, input ?? {}, options);
}
