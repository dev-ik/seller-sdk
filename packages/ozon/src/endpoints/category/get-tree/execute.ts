import type { Transport } from "#internal-core";
import { parseOzonResult } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { safeParseDescriptionCategoryTreeResponse } from "./contract.js";
import type {
  GetDescriptionCategoryTreeRequest,
  GetDescriptionCategoryTreeResponse,
} from "./types.js";

export const GET_DESCRIPTION_CATEGORY_TREE_OPERATION_ID =
  "DescriptionCategoryAPI_GetTree";

/** @internal */
export async function executeGetDescriptionCategoryTree(
  transport: Transport,
  input: GetDescriptionCategoryTreeRequest,
  options: OzonRequestOptions = {},
): Promise<GetDescriptionCategoryTreeResponse> {
  const response = await transport.request({
    operationId: GET_DESCRIPTION_CATEGORY_TREE_OPERATION_ID,
    method: "POST",
    path: "/v1/description-category/tree",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResult(
    safeParseDescriptionCategoryTreeResponse(response.body),
    GET_DESCRIPTION_CATEGORY_TREE_OPERATION_ID,
  );
}
