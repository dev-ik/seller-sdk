import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { editFbpPickupDraftDeliveryV1ResponseSchema } from "./contract.js";
import type {
  EditFbpPickupDraftDeliveryV1Request,
  EditFbpPickupDraftDeliveryV1Response,
} from "./types.js";

export const EDIT_FBP_PICKUP_DRAFT_DELIVERY_V1_OPERATION_ID =
  "FbpAPI_FbpDraftPickupDlvEdit";

export async function executeEditFbpPickupDraftDeliveryV1(
  transport: Transport,
  input: EditFbpPickupDraftDeliveryV1Request,
  options: OzonRequestOptions = {},
): Promise<EditFbpPickupDraftDeliveryV1Response> {
  const response = await transport.request({
    operationId: EDIT_FBP_PICKUP_DRAFT_DELIVERY_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/pick-up/dlv/edit",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    editFbpPickupDraftDeliveryV1ResponseSchema,
    response.body,
    EDIT_FBP_PICKUP_DRAFT_DELIVERY_V1_OPERATION_ID,
  );
}
