// Generated runtime response contract for this Yandex Market endpoint.
import { offersComponents } from "../../../contracts/offers.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateCampaignOffersResponse } from "./types.js";

const updateCampaignOffersResponse200Schema =
  createYmSchema<UpdateCampaignOffersResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    offersComponents,
  );

export function parseUpdateCampaignOffersResponse(
  status: number,
  input: unknown,
): UpdateCampaignOffersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateCampaignOffersResponse200Schema,
        input,
        "updateCampaignOffers",
      );
    default:
      return unexpectedYmSuccessStatus("updateCampaignOffers", status);
  }
}
