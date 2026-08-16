import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { editFbpDirectOrderTimeslotV1ResponseSchema } from "./contract.js";
import type {
  EditFbpDirectOrderTimeslotV1Request,
  EditFbpDirectOrderTimeslotV1Response,
} from "./types.js";

export const EDIT_FBP_DIRECT_ORDER_TIMESLOT_V1_OPERATION_ID =
  "FbpAPI_FbpEditTimeslot";

export async function executeEditFbpDirectOrderTimeslotV1(
  transport: Transport,
  input: EditFbpDirectOrderTimeslotV1Request,
  options: OzonRequestOptions = {},
): Promise<EditFbpDirectOrderTimeslotV1Response> {
  const response = await transport.request({
    operationId: EDIT_FBP_DIRECT_ORDER_TIMESLOT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/order/direct/timeslot/edit",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    editFbpDirectOrderTimeslotV1ResponseSchema,
    response.body,
    EDIT_FBP_DIRECT_ORDER_TIMESLOT_V1_OPERATION_ID,
  );
}
