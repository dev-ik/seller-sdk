import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listGiveoutsV1ResponseSchema } from "./contract.js";
import type { ListGiveoutsV1Request, ListGiveoutsV1Response } from "./types.js";
export const LIST_GIVEOUTS_V1_OPERATION_ID = "ReturnAPI_GiveoutList";
export async function executeListGiveoutsV1(
  transport: Transport,
  input: ListGiveoutsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListGiveoutsV1Response> {
  const response = await transport.request({
    operationId: LIST_GIVEOUTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/return/giveout/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listGiveoutsV1ResponseSchema,
    response.body,
    LIST_GIVEOUTS_V1_OPERATION_ID,
  );
}
