// Generated runtime response contract for this Yandex Market endpoint.
import { campaignsComponents } from "../../../contracts/campaigns.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetCampaignSettingsResponse } from "./types.js";

const getCampaignSettingsResponse200Schema =
  createYmSchema<GetCampaignSettingsResponse>(
    { kind: "ref", name: "GetCampaignSettingsResponse" },
    campaignsComponents,
  );

export function parseGetCampaignSettingsResponse(
  status: number,
  input: unknown,
): GetCampaignSettingsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getCampaignSettingsResponse200Schema,
        input,
        "getCampaignSettings",
      );
    default:
      return unexpectedYmSuccessStatus("getCampaignSettings", status);
  }
}
