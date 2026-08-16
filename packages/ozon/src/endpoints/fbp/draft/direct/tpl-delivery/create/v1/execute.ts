import type { Transport } from "#internal-core";
import { fbpDirectDraftResponseSchema } from "../../../shared/v1/contract.js";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import type {
  CreateFbpDirectTplDeliveryDraftV1Request,
  CreateFbpDirectTplDeliveryDraftV1Response,
} from "./types.js";

export const CREATE_FBP_DIRECT_TPL_DELIVERY_DRAFT_V1_OPERATION_ID =
  "FbpAPI_FbpDraftDirectTplDlvCreate";

export async function executeCreateFbpDirectTplDeliveryDraftV1(
  transport: Transport,
  input: CreateFbpDirectTplDeliveryDraftV1Request,
  options: OzonRequestOptions = {},
): Promise<CreateFbpDirectTplDeliveryDraftV1Response> {
  const response = await transport.request({
    operationId: CREATE_FBP_DIRECT_TPL_DELIVERY_DRAFT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/fbp/draft/direct/tpl-dlv/create",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    fbpDirectDraftResponseSchema,
    response.body,
    CREATE_FBP_DIRECT_TPL_DELIVERY_DRAFT_V1_OPERATION_ID,
  );
}
