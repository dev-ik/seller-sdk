import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { parseGiveoutBinary } from "../../../shared/binary.js";
import type { ResetGiveoutBarcodeV1Response } from "./types.js";
export const RESET_GIVEOUT_BARCODE_V1_OPERATION_ID =
  "ReturnAPI_GiveoutBarcodeReset";
export async function executeResetGiveoutBarcodeV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<ResetGiveoutBarcodeV1Response> {
  const response = await transport.request({
    operationId: RESET_GIVEOUT_BARCODE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/return/giveout/barcode-reset",
    body: {},
    accept: "image/png",
    responseType: "array-buffer",
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseGiveoutBinary(response, RESET_GIVEOUT_BARCODE_V1_OPERATION_ID);
}
