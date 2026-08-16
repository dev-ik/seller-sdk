import type { Transport } from "#internal-core";
import { ResponseValidationError } from "#internal-core";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import type {
  GetSupplyCargoLabelFileRequest,
  GetSupplyCargoLabelFileResponse,
} from "./types.js";

export const GET_SUPPLY_CARGO_LABEL_FILE_OPERATION_ID =
  "CargoesAPI_CargoesLabelFile";

export async function executeGetSupplyCargoLabelFile(
  transport: Transport,
  input: GetSupplyCargoLabelFileRequest,
  options: OzonRequestOptions = {},
): Promise<GetSupplyCargoLabelFileResponse> {
  const response = await transport.request({
    operationId: GET_SUPPLY_CARGO_LABEL_FILE_OPERATION_ID,
    method: "GET",
    path: `/v1/cargoes-label/file/${encodeURIComponent(input.file_guid)}`,
    responseType: "array-buffer",
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  if (response.body instanceof ArrayBuffer) return response.body;
  throw new ResponseValidationError(
    `Ozon API returned a non-binary cargo label file for operation ${GET_SUPPLY_CARGO_LABEL_FILE_OPERATION_ID}.`,
    {
      operationId: GET_SUPPLY_CARGO_LABEL_FILE_OPERATION_ID,
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
