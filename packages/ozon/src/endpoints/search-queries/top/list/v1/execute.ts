import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listTopSearchQueriesV1ResponseSchema } from "./contract.js";
import type {
  ListTopSearchQueriesV1Request,
  ListTopSearchQueriesV1Response,
} from "./types.js";

export const LIST_TOP_SEARCH_QUERIES_V1_OPERATION_ID =
  "SearchQueriesAPI_SearchQueriesTop";

export async function executeListTopSearchQueriesV1(
  transport: Transport,
  input: ListTopSearchQueriesV1Request,
  options: OzonRequestOptions = {},
): Promise<ListTopSearchQueriesV1Response> {
  const response = await transport.request({
    operationId: LIST_TOP_SEARCH_QUERIES_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/search-queries/top",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listTopSearchQueriesV1ResponseSchema,
    response.body,
    LIST_TOP_SEARCH_QUERIES_V1_OPERATION_ID,
  );
}
