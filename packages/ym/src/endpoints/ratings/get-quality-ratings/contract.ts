// Generated runtime response contract for this Yandex Market endpoint.
import { ratingsComponents } from "../../../contracts/ratings.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetQualityRatingsResponse } from "./types.js";

const getQualityRatingsResponse200Schema =
  createYmSchema<GetQualityRatingsResponse>(
    { kind: "ref", name: "GetQualityRatingResponse" },
    ratingsComponents,
  );

export function parseGetQualityRatingsResponse(
  status: number,
  input: unknown,
): GetQualityRatingsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getQualityRatingsResponse200Schema,
        input,
        "getQualityRatings",
      );
    default:
      return unexpectedYmSuccessStatus("getQualityRatings", status);
  }
}
