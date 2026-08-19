// Generated runtime response contract for this Yandex Market endpoint.
import { offersComponents } from "../../../contracts/offers.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOfferRecommendationsResponse } from "./types.js";

const getOfferRecommendationsResponse200Schema =
  createYmSchema<GetOfferRecommendationsResponse>(
    { kind: "ref", name: "GetOfferRecommendationsResponse" },
    offersComponents,
  );

export function parseGetOfferRecommendationsResponse(
  status: number,
  input: unknown,
): GetOfferRecommendationsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getOfferRecommendationsResponse200Schema,
        input,
        "getOfferRecommendations",
      );
    default:
      return unexpectedYmSuccessStatus("getOfferRecommendations", status);
  }
}
