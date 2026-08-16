import type { Transport } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { parseGiveoutBinary } from "../../../shared/binary.js";
import type { GetGiveoutBarcodePngV1Response } from "./types.js";
export const GET_GIVEOUT_BARCODE_PNG_V1_OPERATION_ID =
  "ReturnAPI_GiveoutGetPNG";
export async function executeGetGiveoutBarcodePngV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<GetGiveoutBarcodePngV1Response> {
  const response = await transport.request({
    operationId: GET_GIVEOUT_BARCODE_PNG_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/return/giveout/get-png",
    body: {},
    accept: "image/png",
    responseType: "array-buffer",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseGiveoutBinary(response, GET_GIVEOUT_BARCODE_PNG_V1_OPERATION_ID);
}
