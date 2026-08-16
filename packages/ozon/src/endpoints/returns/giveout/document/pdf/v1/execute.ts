import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { parseGiveoutBinary } from "../../../shared/binary.js";
import type { GetGiveoutBarcodePdfV1Response } from "./types.js";
export const GET_GIVEOUT_BARCODE_PDF_V1_OPERATION_ID =
  "ReturnAPI_GiveoutGetPDF";
export async function executeGetGiveoutBarcodePdfV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<GetGiveoutBarcodePdfV1Response> {
  const response = await transport.request({
    operationId: GET_GIVEOUT_BARCODE_PDF_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/return/giveout/get-pdf",
    body: {},
    accept: "application/pdf",
    responseType: "array-buffer",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseGiveoutBinary(response, GET_GIVEOUT_BARCODE_PDF_V1_OPERATION_ID);
}
