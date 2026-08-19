// Generated runtime response contract for this Yandex Market endpoint.
import { bidsComponents } from "../../../contracts/bids.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { PutBidsForCampaignResponse } from "./types.js";

const putBidsForCampaignResponse200Schema =
  createYmSchema<PutBidsForCampaignResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    bidsComponents,
  );

export function parsePutBidsForCampaignResponse(
  status: number,
  input: unknown,
): PutBidsForCampaignResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        putBidsForCampaignResponse200Schema,
        input,
        "putBidsForCampaign",
      );
    default:
      return unexpectedYmSuccessStatus("putBidsForCampaign", status);
  }
}
