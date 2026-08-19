// Generated runtime response contract for this Yandex Market endpoint.
import { priceQuarantineComponents } from "../../../contracts/priceQuarantine.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { ConfirmCampaignPricesResponse } from "./types.js";

const confirmCampaignPricesResponse200Schema =
  createYmSchema<ConfirmCampaignPricesResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    priceQuarantineComponents,
  );

export function parseConfirmCampaignPricesResponse(
  status: number,
  input: unknown,
): ConfirmCampaignPricesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        confirmCampaignPricesResponse200Schema,
        input,
        "confirmCampaignPrices",
      );
    default:
      return unexpectedYmSuccessStatus("confirmCampaignPrices", status);
  }
}
