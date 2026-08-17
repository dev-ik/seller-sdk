// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV1AdvertResponse } from "./contract.js";
import type { GetV1AdvertInput, GetV1AdvertResponse } from "./types.js";

export const GET_V1_ADVERT_OPERATION_ID = "getV1Advert";

const definition: WbOperationDefinition<GetV1AdvertResponse> = {
  operationId: GET_V1_ADVERT_OPERATION_ID,
  method: "GET",
  path: "/adv/v1/advert",
  productionOrigin: "https://advert-media-api.wildberries.ru",
  parameters: [{ name: "id", location: "query", required: true, array: false }],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV1AdvertResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV1Advert(
  execute: WbOperationExecutor,
  input: GetV1AdvertInput,
  options: WbRequestOptions = {},
): Promise<GetV1AdvertResponse> {
  return execute(definition, input, options);
}
