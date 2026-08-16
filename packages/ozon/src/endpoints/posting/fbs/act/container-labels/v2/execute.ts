import type { Transport } from "#internal-core";
import { ResponseValidationError } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import type {
  GetFbsActContainerLabelsRequest,
  GetFbsActContainerLabelsResponse,
} from "./types.js";
export const GET_FBS_ACT_CONTAINER_LABELS_OPERATION_ID =
  "PostingAPI_PostingFBSActGetContainerLabels";
export async function executeGetFbsActContainerLabels(
  transport: Transport,
  input: GetFbsActContainerLabelsRequest,
  options: OzonRequestOptions = {},
): Promise<GetFbsActContainerLabelsResponse> {
  const response = await transport.request({
    operationId: GET_FBS_ACT_CONTAINER_LABELS_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/act/get-container-labels",
    body: input,
    accept: "application/pdf",
    responseType: "array-buffer",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  if (response.body instanceof ArrayBuffer) return response.body;
  throw new ResponseValidationError(
    `Ozon API returned non-binary container labels for operation ${GET_FBS_ACT_CONTAINER_LABELS_OPERATION_ID}.`,
    {
      operationId: GET_FBS_ACT_CONTAINER_LABELS_OPERATION_ID,
      issues: [
        {
          code: "invalid_type",
          path: [],
          message: "Expected an ArrayBuffer response body.",
          expected: "ArrayBuffer",
          received: typeof response.body,
        },
      ],
    },
  );
}
