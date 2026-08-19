// Generated runtime response contract for this Yandex Market endpoint.
import { offersComponents } from "../../../contracts/offers.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetCampaignOffersResponse } from "./types.js";

const getCampaignOffersResponse200Schema =
  createYmSchema<GetCampaignOffersResponse>(
    { kind: "ref", name: "GetCampaignOffersResponse" },
    offersComponents,
  );

export function parseGetCampaignOffersResponse(
  status: number,
  input: unknown,
): GetCampaignOffersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getCampaignOffersResponse200Schema,
        input,
        "getCampaignOffers",
      );
    default:
      return unexpectedYmSuccessStatus("getCampaignOffers", status);
  }
}
