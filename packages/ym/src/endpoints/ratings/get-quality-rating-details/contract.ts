// Generated runtime response contract for this Yandex Market endpoint.
import { ratingsComponents } from "../../../contracts/ratings.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetQualityRatingDetailsResponse } from "./types.js";

const getQualityRatingDetailsResponse200Schema =
  createYmSchema<GetQualityRatingDetailsResponse>(
    { kind: "ref", name: "GetQualityRatingDetailsResponse" },
    ratingsComponents,
  );

export function parseGetQualityRatingDetailsResponse(
  status: number,
  input: unknown,
): GetQualityRatingDetailsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getQualityRatingDetailsResponse200Schema,
        input,
        "getQualityRatingDetails",
      );
    default:
      return unexpectedYmSuccessStatus("getQualityRatingDetails", status);
  }
}
