// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parsePostV1BidsMinResponse } from "./contract.js";
import type { PostV1BidsMinInput, PostV1BidsMinResponse } from "./types.js";

export const POST_V1_BIDS_MIN_OPERATION_ID = "postV1BidsMin";

const definition: WbOperationDefinition<PostV1BidsMinResponse> = {
  operationId: POST_V1_BIDS_MIN_OPERATION_ID,
  method: "POST",
  path: "/api/advert/v1/bids/min",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [],
  requestContentType: "application/json",
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parsePostV1BidsMinResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executePostV1BidsMin(
  execute: WbOperationExecutor,
  input: PostV1BidsMinInput,
  options: WbRequestOptions = {},
): Promise<PostV1BidsMinResponse> {
  return execute(definition, input, options);
}
