import type { Transport } from "#internal-core";
import { ResponseValidationError } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import type {
  PrintFbsPackageLabelsV2Request,
  PrintFbsPackageLabelsV2Response,
} from "./types.js";

export const PRINT_FBS_PACKAGE_LABELS_V2_OPERATION_ID =
  "PostingAPI_PostingFBSPackageLabel";

export async function executePrintFbsPackageLabelsV2(
  transport: Transport,
  input: PrintFbsPackageLabelsV2Request,
  options: OzonRequestOptions = {},
): Promise<PrintFbsPackageLabelsV2Response> {
  const response = await transport.request({
    operationId: PRINT_FBS_PACKAGE_LABELS_V2_OPERATION_ID,
    method: "POST",
    path: "/v2/posting/fbs/package-label",
    body: input,
    accept: "application/pdf",
    responseType: "array-buffer",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  if (response.body instanceof ArrayBuffer) return response.body;
  throw new ResponseValidationError(
    "Ozon API returned a non-binary package-label PDF.",
    {
      operationId: PRINT_FBS_PACKAGE_LABELS_V2_OPERATION_ID,
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
