// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV0NormqueryStatsResponse } from "./types.js";

const postV0NormqueryStatsResponse200Schema =
  createWbSchema<PostV0NormqueryStatsResponse>(
    { kind: "ref", name: "V0GetNormQueryStatsResponse" },
    promotionComponents,
  );

export function parsePostV0NormqueryStatsResponse(
  status: number,
  input: unknown,
): PostV0NormqueryStatsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV0NormqueryStatsResponse200Schema,
        input,
        "postV0NormqueryStats",
      );
    default:
      return unexpectedWbSuccessStatus("postV0NormqueryStats", status);
  }
}
