import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../request-options.js";
import { setProductVisibilityV1ResponseSchema } from "./contract.js";
import type {
  SetProductVisibilityV1Request,
  SetProductVisibilityV1Response,
} from "./types.js";

export const SET_PRODUCT_VISIBILITY_V1_OPERATION_ID = "ProductVisibilitySet";

export async function executeSetProductVisibilityV1(
  transport: Transport,
  input: SetProductVisibilityV1Request,
  options: OzonRequestOptions = {},
): Promise<SetProductVisibilityV1Response> {
  const response = await transport.request({
    operationId: SET_PRODUCT_VISIBILITY_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/product/visibility/set",
    body: input,
    retrySafety: "unsafe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    setProductVisibilityV1ResponseSchema,
    response.body,
    SET_PRODUCT_VISIBILITY_V1_OPERATION_ID,
  );
}
