// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV0BidsRecommendationsResponse } from "./types.js";

const getV0BidsRecommendationsResponse200Schema =
  createWbSchema<GetV0BidsRecommendationsResponse>(
    {
      kind: "union",
      choices: [
        { kind: "ref", name: "V0BidsRecommendationsCpmResponse" },
        { kind: "ref", name: "V0BidsRecommendationsCpcResponse" },
      ],
    },
    promotionComponents,
  );

export function parseGetV0BidsRecommendationsResponse(
  status: number,
  input: unknown,
): GetV0BidsRecommendationsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV0BidsRecommendationsResponse200Schema,
        input,
        "getV0BidsRecommendations",
      );
    default:
      return unexpectedWbSuccessStatus("getV0BidsRecommendations", status);
  }
}
