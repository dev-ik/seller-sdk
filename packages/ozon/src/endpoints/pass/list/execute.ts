import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { listPassesResponseSchema } from "./contract.js";
import type { ListPassesRequest, ListPassesResponse } from "./types.js";

export const LIST_PASSES_OPERATION_ID = "PassList";

export async function executeListPasses(
  transport: Transport,
  input: ListPassesRequest,
  options: OzonRequestOptions = {},
): Promise<ListPassesResponse> {
  const response = await transport.request({
    operationId: LIST_PASSES_OPERATION_ID,
    method: "POST",
    path: "/v1/pass/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listPassesResponseSchema,
    response.body,
    LIST_PASSES_OPERATION_ID,
  );
}
