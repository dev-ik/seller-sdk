// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV0NormqueryGetBidsResponse } from "./types.js";

const postV0NormqueryGetBidsResponse200Schema =
  createWbSchema<PostV0NormqueryGetBidsResponse>(
    { kind: "ref", name: "V0GetNormQueryBidsResponse" },
    promotionComponents,
  );

export function parsePostV0NormqueryGetBidsResponse(
  status: number,
  input: unknown,
): PostV0NormqueryGetBidsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV0NormqueryGetBidsResponse200Schema,
        input,
        "postV0NormqueryGetBids",
      );
    default:
      return unexpectedWbSuccessStatus("postV0NormqueryGetBids", status);
  }
}
