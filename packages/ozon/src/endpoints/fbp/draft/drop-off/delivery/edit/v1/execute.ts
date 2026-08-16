import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { editFbpDropOffDeliveryV1ResponseSchema } from "./contract.js";
import type {
  EditFbpDropOffDeliveryV1Request,
  EditFbpDropOffDeliveryV1Response,
} from "./types.js";
export const EDIT_FBP_DROP_OFF_DELIVERY_V1_OPERATION_ID =
  "FbpDraftDropOffDlvEdit";
export async function executeEditFbpDropOffDeliveryV1(
  transport: Transport,
  input: EditFbpDropOffDeliveryV1Request,
  options: OzonRequestOptions = {},
): Promise<EditFbpDropOffDeliveryV1Response> {
  const response = await transport.request({
    operationId: EDIT_FBP_DROP_OFF_DELIVERY_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/drop-off/dlv/edit",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    editFbpDropOffDeliveryV1ResponseSchema,
    response.body,
    EDIT_FBP_DROP_OFF_DELIVERY_V1_OPERATION_ID,
  );
}
