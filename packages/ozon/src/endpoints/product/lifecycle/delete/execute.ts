import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { deleteProductsResponseSchema } from "./contract.js";
import type { DeleteProductsRequest, DeleteProductsResponse } from "./types.js";

export const DELETE_PRODUCTS_OPERATION_ID = "ProductAPI_DeleteProducts";

export async function executeDeleteProducts(
  transport: Transport,
  input: DeleteProductsRequest,
  options: OzonRequestOptions = {},
): Promise<DeleteProductsResponse> {
  const response = await transport.request({
    operationId: DELETE_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v2/products/delete",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    deleteProductsResponseSchema,
    response.body,
    DELETE_PRODUCTS_OPERATION_ID,
  );
}
