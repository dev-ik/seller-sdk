import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { editFbpDirectTplDeliveryDraftV1ResponseSchema } from "./contract.js";
import type {
  EditFbpDirectTplDeliveryDraftV1Request,
  EditFbpDirectTplDeliveryDraftV1Response,
} from "./types.js";

export const EDIT_FBP_DIRECT_TPL_DELIVERY_DRAFT_V1_OPERATION_ID =
  "FbpAPI_FbpDraftDirectTplDlvEdit";

export async function executeEditFbpDirectTplDeliveryDraftV1(
  transport: Transport,
  input: EditFbpDirectTplDeliveryDraftV1Request,
  options: OzonRequestOptions = {},
): Promise<EditFbpDirectTplDeliveryDraftV1Response> {
  const response = await transport.request({
    operationId: EDIT_FBP_DIRECT_TPL_DELIVERY_DRAFT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/direct/tpl-dlv/edit",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    editFbpDirectTplDeliveryDraftV1ResponseSchema,
    response.body,
    EDIT_FBP_DIRECT_TPL_DELIVERY_DRAFT_V1_OPERATION_ID,
  );
}
