import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getGiveoutBarcodeV1ResponseSchema } from "./contract.js";
import type { GetGiveoutBarcodeV1Response } from "./types.js";
export const GET_GIVEOUT_BARCODE_V1_OPERATION_ID =
  "ReturnAPI_GiveoutGetBarcode";
export async function executeGetGiveoutBarcodeV1(
  transport: Transport,
  options: OzonRequestOptions = {},
): Promise<GetGiveoutBarcodeV1Response> {
  const response = await transport.request({
    operationId: GET_GIVEOUT_BARCODE_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/return/giveout/barcode",
    body: {},
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getGiveoutBarcodeV1ResponseSchema,
    response.body,
    GET_GIVEOUT_BARCODE_V1_OPERATION_ID,
  );
}
