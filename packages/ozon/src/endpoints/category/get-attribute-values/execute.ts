import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { getDescriptionCategoryAttributeValuesResponseSchema } from "./contract.js";
import type {
  GetDescriptionCategoryAttributeValuesRequest,
  GetDescriptionCategoryAttributeValuesResponse,
} from "./types.js";

export const GET_DESCRIPTION_CATEGORY_ATTRIBUTE_VALUES_OPERATION_ID =
  "DescriptionCategoryAPI_GetAttributeValues";

/** @internal */
export async function executeGetDescriptionCategoryAttributeValues(
  transport: Transport,
  input: GetDescriptionCategoryAttributeValuesRequest,
  options: OzonRequestOptions = {},
): Promise<GetDescriptionCategoryAttributeValuesResponse> {
  const response = await transport.request({
    operationId: GET_DESCRIPTION_CATEGORY_ATTRIBUTE_VALUES_OPERATION_ID,
    method: "POST",
    path: "/v1/description-category/attribute/values",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    getDescriptionCategoryAttributeValuesResponseSchema,
    response.body,
    GET_DESCRIPTION_CATEGORY_ATTRIBUTE_VALUES_OPERATION_ID,
  );
}
