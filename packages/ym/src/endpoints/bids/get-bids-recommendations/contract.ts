// Generated runtime response contract for this Yandex Market endpoint.
import { bidsComponents } from "../../../contracts/bids.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetBidsRecommendationsResponse } from "./types.js";

const getBidsRecommendationsResponse200Schema =
  createYmSchema<GetBidsRecommendationsResponse>(
    { kind: "ref", name: "GetBidsRecommendationsResponse" },
    bidsComponents,
  );

export function parseGetBidsRecommendationsResponse(
  status: number,
  input: unknown,
): GetBidsRecommendationsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getBidsRecommendationsResponse200Schema,
        input,
        "getBidsRecommendations",
      );
    default:
      return unexpectedYmSuccessStatus("getBidsRecommendations", status);
  }
}
