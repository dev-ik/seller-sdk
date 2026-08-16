import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { importDigitalProductStocksResponseSchema } from "./contract.js";
import type {
  ImportDigitalProductStocksRequest,
  ImportDigitalProductStocksResponse,
} from "./types.js";

export const IMPORT_DIGITAL_PRODUCT_STOCKS_OPERATION_ID =
  "DigitalProductAPI_StocksImport";

/** @internal */
export async function executeImportDigitalProductStocks(
  transport: Transport,
  input: ImportDigitalProductStocksRequest,
  options: OzonRequestOptions = {},
): Promise<ImportDigitalProductStocksResponse> {
  const response = await transport.request({
    operationId: IMPORT_DIGITAL_PRODUCT_STOCKS_OPERATION_ID,
    method: "POST",
    path: "/v1/product/digital/stocks/import",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    importDigitalProductStocksResponseSchema,
    response.body,
    IMPORT_DIGITAL_PRODUCT_STOCKS_OPERATION_ID,
  );
}
