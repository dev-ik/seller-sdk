import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { getDescriptionCategoryAttributesResponseSchema } from "./contract.js";
import type {
  GetDescriptionCategoryAttributesRequest,
  GetDescriptionCategoryAttributesResponse,
} from "./types.js";

export const GET_DESCRIPTION_CATEGORY_ATTRIBUTES_OPERATION_ID =
  "DescriptionCategoryAPI_GetAttributes";

/** @internal */
export async function executeGetDescriptionCategoryAttributes(
  transport: Transport,
  input: GetDescriptionCategoryAttributesRequest,
  options: OzonRequestOptions = {},
): Promise<GetDescriptionCategoryAttributesResponse> {
  const response = await transport.request({
    operationId: GET_DESCRIPTION_CATEGORY_ATTRIBUTES_OPERATION_ID,
    method: "POST",
    path: "/v1/description-category/attribute",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getDescriptionCategoryAttributesResponseSchema,
    response.body,
    GET_DESCRIPTION_CATEGORY_ATTRIBUTES_OPERATION_ID,
  );
}
