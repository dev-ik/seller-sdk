// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV0NormqueryListResponse } from "./types.js";

const postV0NormqueryListResponse200Schema =
  createWbSchema<PostV0NormqueryListResponse>(
    { kind: "ref", name: "V0GetNormQueryListResponse" },
    promotionComponents,
  );

export function parsePostV0NormqueryListResponse(
  status: number,
  input: unknown,
): PostV0NormqueryListResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV0NormqueryListResponse200Schema,
        input,
        "postV0NormqueryList",
      );
    default:
      return unexpectedWbSuccessStatus("postV0NormqueryList", status);
  }
}
