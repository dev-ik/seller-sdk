// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1NormqueryStatsResponse } from "./types.js";

const postV1NormqueryStatsResponse200Schema =
  createWbSchema<PostV1NormqueryStatsResponse>(
    { kind: "ref", name: "V1GetNormQueryStatsResponse" },
    promotionComponents,
  );

export function parsePostV1NormqueryStatsResponse(
  status: number,
  input: unknown,
): PostV1NormqueryStatsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1NormqueryStatsResponse200Schema,
        input,
        "postV1NormqueryStats",
      );
    default:
      return unexpectedWbSuccessStatus("postV1NormqueryStats", status);
  }
}
