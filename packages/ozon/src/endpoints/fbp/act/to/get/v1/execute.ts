import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getFbpConsignmentNoteV1ResponseSchema } from "./contract.js";
import type {
  GetFbpConsignmentNoteV1Request,
  GetFbpConsignmentNoteV1Response,
} from "./types.js";

export const GET_FBP_CONSIGNMENT_NOTE_V1_OPERATION_ID =
  "FbpAPI_FbpCheckConsignmentNoteState";

export async function executeGetFbpConsignmentNoteV1(
  transport: Transport,
  input: GetFbpConsignmentNoteV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFbpConsignmentNoteV1Response> {
  const response = await transport.request({
    operationId: GET_FBP_CONSIGNMENT_NOTE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/act-to/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFbpConsignmentNoteV1ResponseSchema,
    response.body,
    GET_FBP_CONSIGNMENT_NOTE_V1_OPERATION_ID,
  );
}
