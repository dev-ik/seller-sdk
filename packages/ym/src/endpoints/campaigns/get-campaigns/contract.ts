// Generated runtime response contract for this Yandex Market endpoint.
import { campaignsComponents } from "../../../contracts/campaigns.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetCampaignsResponse } from "./types.js";

const getCampaignsResponse200Schema = createYmSchema<GetCampaignsResponse>(
  { kind: "ref", name: "GetCampaignsResponse" },
  campaignsComponents,
);

export function parseGetCampaignsResponse(
  status: number,
  input: unknown,
): GetCampaignsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getCampaignsResponse200Schema,
        input,
        "getCampaigns",
      );
    default:
      return unexpectedYmSuccessStatus("getCampaigns", status);
  }
}
