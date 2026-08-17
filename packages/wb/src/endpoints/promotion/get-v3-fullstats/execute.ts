// Generated request mapping and execution for this Wildberries endpoint.
import type {
  WbOperationDefinition,
  WbOperationExecutor,
} from "../../../operation.js";
import type { WbRequestOptions } from "../../../request-options.js";
import { parseGetV3FullstatsResponse } from "./contract.js";
import type { GetV3FullstatsInput, GetV3FullstatsResponse } from "./types.js";

export const GET_V3_FULLSTATS_OPERATION_ID = "getV3Fullstats";

const definition: WbOperationDefinition<GetV3FullstatsResponse> = {
  operationId: GET_V3_FULLSTATS_OPERATION_ID,
  method: "GET",
  path: "/adv/v3/fullstats",
  productionOrigin: "https://advert-api.wildberries.ru",
  parameters: [
    { name: "ids", location: "query", required: true, array: false },
    { name: "beginDate", location: "query", required: true, array: false },
    { name: "endDate", location: "query", required: true, array: false },
  ],
  retrySafety: "safe",
  responseType: "json",
  accept: "application/json",
  parseResponse: parseGetV3FullstatsResponse,
  source: "https://dev.wildberries.ru/docs/openapi/promotion",
  verifiedAt: "2026-08-17",
};

export function executeGetV3Fullstats(
  execute: WbOperationExecutor,
  input: GetV3FullstatsInput,
  options: WbRequestOptions = {},
): Promise<GetV3FullstatsResponse> {
  return execute(definition, input, options);
}
