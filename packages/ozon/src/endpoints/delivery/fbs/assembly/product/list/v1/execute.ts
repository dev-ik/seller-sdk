import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../../request-options.js";
import { listFbsAssemblyProductsResponseSchema } from "./contract.js";
import type {
  ListFbsAssemblyProductsRequest,
  ListFbsAssemblyProductsResponse,
} from "./types.js";

export const LIST_FBS_ASSEMBLY_PRODUCTS_OPERATION_ID = "AssemblyFbsProductList";

export async function executeListFbsAssemblyProducts(
  transport: Transport,
  input: ListFbsAssemblyProductsRequest,
  options: OzonRequestOptions = {},
): Promise<ListFbsAssemblyProductsResponse> {
  const response = await transport.request({
    operationId: LIST_FBS_ASSEMBLY_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v1/assembly/fbs/product/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    listFbsAssemblyProductsResponseSchema,
    response.body,
    LIST_FBS_ASSEMBLY_PRODUCTS_OPERATION_ID,
  );
}
