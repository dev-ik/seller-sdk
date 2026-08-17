// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV3FullstatsResponse } from "./types.js";

const getV3FullstatsResponse200Schema = createWbSchema<GetV3FullstatsResponse>(
  { kind: "ref", name: "ResponseFullStats" },
  promotionComponents,
);

export function parseGetV3FullstatsResponse(
  status: number,
  input: unknown,
): GetV3FullstatsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV3FullstatsResponse200Schema,
        input,
        "getV3Fullstats",
      );
    default:
      return unexpectedWbSuccessStatus("getV3Fullstats", status);
  }
}
