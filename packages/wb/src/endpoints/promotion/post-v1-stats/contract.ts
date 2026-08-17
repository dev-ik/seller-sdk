// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1StatsResponse } from "./types.js";

const postV1StatsResponse200Schema = createWbSchema<PostV1StatsResponse>(
  {
    kind: "array",
    items: {
      kind: "union",
      choices: [
        { kind: "ref", name: "StatInterval" },
        { kind: "ref", name: "StatDate" },
        { kind: "ref", name: "Stat" },
        { kind: "ref", name: "StatCampaignNotFound" },
      ],
    },
  },
  promotionComponents,
);

export function parsePostV1StatsResponse(
  status: number,
  input: unknown,
): PostV1StatsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1StatsResponse200Schema,
        input,
        "postV1Stats",
      );
    default:
      return unexpectedWbSuccessStatus("postV1Stats", status);
  }
}
