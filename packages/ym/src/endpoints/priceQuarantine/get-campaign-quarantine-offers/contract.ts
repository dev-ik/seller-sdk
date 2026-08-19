// Generated runtime response contract for this Yandex Market endpoint.
import { priceQuarantineComponents } from "../../../contracts/priceQuarantine.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetCampaignQuarantineOffersResponse } from "./types.js";

const getCampaignQuarantineOffersResponse200Schema =
  createYmSchema<GetCampaignQuarantineOffersResponse>(
    { kind: "ref", name: "GetQuarantineOffersResponse" },
    priceQuarantineComponents,
  );

export function parseGetCampaignQuarantineOffersResponse(
  status: number,
  input: unknown,
): GetCampaignQuarantineOffersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getCampaignQuarantineOffersResponse200Schema,
        input,
        "getCampaignQuarantineOffers",
      );
    default:
      return unexpectedYmSuccessStatus("getCampaignQuarantineOffers", status);
  }
}
