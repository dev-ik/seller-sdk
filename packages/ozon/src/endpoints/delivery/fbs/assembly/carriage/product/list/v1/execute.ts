import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../../request-options.js";
import { listFbsAssemblyCarriageProductsResponseSchema } from "./contract.js";
import type {
  ListFbsAssemblyCarriageProductsRequest,
  ListFbsAssemblyCarriageProductsResponse,
} from "./types.js";

export const LIST_FBS_ASSEMBLY_CARRIAGE_PRODUCTS_OPERATION_ID =
  "AssemblyCarriageProductList";

export async function executeListFbsAssemblyCarriageProducts(
  transport: Transport,
  input: ListFbsAssemblyCarriageProductsRequest,
  options: OzonRequestOptions = {},
): Promise<ListFbsAssemblyCarriageProductsResponse> {
  const response = await transport.request({
    operationId: LIST_FBS_ASSEMBLY_CARRIAGE_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v1/assembly/carriage/product/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbsAssemblyCarriageProductsResponseSchema,
    response.body,
    LIST_FBS_ASSEMBLY_CARRIAGE_PRODUCTS_OPERATION_ID,
  );
}
