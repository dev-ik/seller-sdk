import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { searchDescriptionCategoryAttributeValuesResponseSchema } from "./contract.js";
import type {
  SearchDescriptionCategoryAttributeValuesRequest,
  SearchDescriptionCategoryAttributeValuesResponse,
} from "./types.js";

export const SEARCH_DESCRIPTION_CATEGORY_ATTRIBUTE_VALUES_OPERATION_ID =
  "DescriptionCategoryAPI_SearchAttributeValues";

/** @internal */
export async function executeSearchDescriptionCategoryAttributeValues(
  transport: Transport,
  input: SearchDescriptionCategoryAttributeValuesRequest,
  options: OzonRequestOptions = {},
): Promise<SearchDescriptionCategoryAttributeValuesResponse> {
  const response = await transport.request({
    operationId: SEARCH_DESCRIPTION_CATEGORY_ATTRIBUTE_VALUES_OPERATION_ID,
    method: "POST",
    path: "/v1/description-category/attribute/values/search",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    searchDescriptionCategoryAttributeValuesResponseSchema,
    response.body,
    SEARCH_DESCRIPTION_CATEGORY_ATTRIBUTE_VALUES_OPERATION_ID,
  );
}
