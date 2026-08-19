// Generated runtime response contract for this Yandex Market endpoint.
import { offersComponents } from "../../../contracts/offers.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { DeleteCampaignOffersResponse } from "./types.js";

const deleteCampaignOffersResponse200Schema =
  createYmSchema<DeleteCampaignOffersResponse>(
    { kind: "ref", name: "DeleteCampaignOffersResponse" },
    offersComponents,
  );

export function parseDeleteCampaignOffersResponse(
  status: number,
  input: unknown,
): DeleteCampaignOffersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        deleteCampaignOffersResponse200Schema,
        input,
        "deleteCampaignOffers",
      );
    default:
      return unexpectedYmSuccessStatus("deleteCampaignOffers", status);
  }
}
