import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { getFinanceProductsBuyoutV1ResponseSchema } from "./contract.js";
import type {
  GetFinanceProductsBuyoutV1Request,
  GetFinanceProductsBuyoutV1Response,
} from "./types.js";

export const GET_FINANCE_PRODUCTS_BUYOUT_V1_OPERATION_ID =
  "GetFinanceProductsBuyout";

export async function executeGetFinanceProductsBuyoutV1(
  transport: Transport,
  input: GetFinanceProductsBuyoutV1Request,
  options: OzonRequestOptions = {},
): Promise<GetFinanceProductsBuyoutV1Response> {
  const response = await transport.request({
    operationId: GET_FINANCE_PRODUCTS_BUYOUT_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/finance/products/buyout",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getFinanceProductsBuyoutV1ResponseSchema,
    response.body,
    GET_FINANCE_PRODUCTS_BUYOUT_V1_OPERATION_ID,
  );
}
