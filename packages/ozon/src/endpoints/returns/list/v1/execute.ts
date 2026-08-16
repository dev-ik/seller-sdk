import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listReturnsV1ResponseSchema } from "./contract.js";
import type { ListReturnsV1Request, ListReturnsV1Response } from "./types.js";
export const LIST_RETURNS_V1_OPERATION_ID = "returnsList";
export async function executeListReturnsV1(
  transport: Transport,
  input: ListReturnsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListReturnsV1Response> {
  const response = await transport.request({
    operationId: LIST_RETURNS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/returns/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listReturnsV1ResponseSchema,
    response.body,
    LIST_RETURNS_V1_OPERATION_ID,
  );
}
