import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { editFbpDirectTimeslotV1ResponseSchema } from "./contract.js";
import type {
  EditFbpDirectTimeslotV1Request,
  EditFbpDirectTimeslotV1Response,
} from "./types.js";
export const EDIT_FBP_DIRECT_TIMESLOT_V1_OPERATION_ID =
  "FbpDraftDirectTimeslotEdit";
export async function executeEditFbpDirectTimeslotV1(
  transport: Transport,
  input: EditFbpDirectTimeslotV1Request,
  options: OzonRequestOptions = {},
): Promise<EditFbpDirectTimeslotV1Response> {
  const response = await transport.request({
    operationId: EDIT_FBP_DIRECT_TIMESLOT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/direct/timeslot/edit",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    editFbpDirectTimeslotV1ResponseSchema,
    response.body,
    EDIT_FBP_DIRECT_TIMESLOT_V1_OPERATION_ID,
  );
}
