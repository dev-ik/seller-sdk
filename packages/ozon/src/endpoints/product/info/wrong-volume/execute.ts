import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../request-options.js";
import { listProductsWithWrongVolumeResponseSchema } from "./contract.js";
import type {
  ListProductsWithWrongVolumeRequest,
  ListProductsWithWrongVolumeResponse,
} from "./types.js";

export const LIST_PRODUCTS_WITH_WRONG_VOLUME_OPERATION_ID =
  "ProductAPI_ProductInfoWrongVolume";

export async function executeListProductsWithWrongVolume(
  transport: Transport,
  input: ListProductsWithWrongVolumeRequest,
  options: OzonRequestOptions = {},
): Promise<ListProductsWithWrongVolumeResponse> {
  const response = await transport.request({
    operationId: LIST_PRODUCTS_WITH_WRONG_VOLUME_OPERATION_ID,
    method: "POST",
    path: "/v1/product/info/wrong-volume",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listProductsWithWrongVolumeResponseSchema,
    response.body,
    LIST_PRODUCTS_WITH_WRONG_VOLUME_OPERATION_ID,
  );
}
