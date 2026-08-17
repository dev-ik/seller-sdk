// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1NormqueryBidsResponse } from "./types.js";

const postV1NormqueryBidsResponse200Schema =
  createWbSchema<PostV1NormqueryBidsResponse>(
    { kind: "ref", name: "V1SetNormQueryBidsResponse" },
    promotionComponents,
  );

export function parsePostV1NormqueryBidsResponse(
  status: number,
  input: unknown,
): PostV1NormqueryBidsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1NormqueryBidsResponse200Schema,
        input,
        "postV1NormqueryBids",
      );
    default:
      return unexpectedWbSuccessStatus("postV1NormqueryBids", status);
  }
}
