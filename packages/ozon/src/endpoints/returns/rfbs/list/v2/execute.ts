import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listRfbsReturnsV2ResponseSchema } from "./contract.js";
import type {
  ListRfbsReturnsV2Request,
  ListRfbsReturnsV2Response,
} from "./types.js";
export const LIST_RFBS_RETURNS_V2_OPERATION_ID =
  "RFBSReturnsAPI_ReturnsRfbsListV2";
export async function executeListRfbsReturnsV2(
  transport: Transport,
  input: ListRfbsReturnsV2Request,
  options: OzonRequestOptions = {},
): Promise<ListRfbsReturnsV2Response> {
  const response = await transport.request({
    operationId: LIST_RFBS_RETURNS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/returns/rfbs/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listRfbsReturnsV2ResponseSchema,
    response.body,
    LIST_RFBS_RETURNS_V2_OPERATION_ID,
  );
}
