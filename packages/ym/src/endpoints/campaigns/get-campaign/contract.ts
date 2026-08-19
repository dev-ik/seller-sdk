// Generated runtime response contract for this Yandex Market endpoint.
import { campaignsComponents } from "../../../contracts/campaigns.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetCampaignResponse } from "./types.js";

const getCampaignResponse200Schema = createYmSchema<GetCampaignResponse>(
  { kind: "ref", name: "GetCampaignResponse" },
  campaignsComponents,
);

export function parseGetCampaignResponse(
  status: number,
  input: unknown,
): GetCampaignResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getCampaignResponse200Schema,
        input,
        "getCampaign",
      );
    default:
      return unexpectedYmSuccessStatus("getCampaign", status);
  }
}
