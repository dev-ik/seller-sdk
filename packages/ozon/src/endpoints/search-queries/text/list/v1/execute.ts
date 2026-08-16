import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listSearchQueriesByTextV1ResponseSchema } from "./contract.js";
import type {
  ListSearchQueriesByTextV1Request,
  ListSearchQueriesByTextV1Response,
} from "./types.js";

export const LIST_SEARCH_QUERIES_BY_TEXT_V1_OPERATION_ID =
  "SearchQueriesAPI_SearchQueriesText";

export async function executeListSearchQueriesByTextV1(
  transport: Transport,
  input: ListSearchQueriesByTextV1Request,
  options: OzonRequestOptions = {},
): Promise<ListSearchQueriesByTextV1Response> {
  const response = await transport.request({
    operationId: LIST_SEARCH_QUERIES_BY_TEXT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/search-queries/text",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listSearchQueriesByTextV1ResponseSchema,
    response.body,
    LIST_SEARCH_QUERIES_BY_TEXT_V1_OPERATION_ID,
  );
}
