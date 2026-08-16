import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { createFbpConsignmentNoteV1ResponseSchema } from "./contract.js";
import type {
  CreateFbpConsignmentNoteV1Request,
  CreateFbpConsignmentNoteV1Response,
} from "./types.js";

export const CREATE_FBP_CONSIGNMENT_NOTE_V1_OPERATION_ID =
  "FbpAPI_FbpCreateConsignmentNote";

export async function executeCreateFbpConsignmentNoteV1(
  transport: Transport,
  input: CreateFbpConsignmentNoteV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateFbpConsignmentNoteV1Response> {
  const response = await transport.request({
    operationId: CREATE_FBP_CONSIGNMENT_NOTE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/act-to/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    createFbpConsignmentNoteV1ResponseSchema,
    response.body,
    CREATE_FBP_CONSIGNMENT_NOTE_V1_OPERATION_ID,
  );
}
