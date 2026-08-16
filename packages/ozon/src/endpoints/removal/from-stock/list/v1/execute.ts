import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { listStockReturnsV1ResponseSchema } from "./contract.js";
import type {
  ListStockReturnsV1Request,
  ListStockReturnsV1Response,
} from "./types.js";

export const LIST_STOCK_RETURNS_V1_OPERATION_ID =
  "GetSupplierReturnsSummaryReport";

export async function executeListStockReturnsV1(
  transport: Transport,
  input: ListStockReturnsV1Request,
  options: OzonRequestOptions = {},
): Promise<ListStockReturnsV1Response> {
  const response = await transport.request({
    operationId: LIST_STOCK_RETURNS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/removal/from-stock/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listStockReturnsV1ResponseSchema,
    response.body,
    LIST_STOCK_RETURNS_V1_OPERATION_ID,
  );
}
