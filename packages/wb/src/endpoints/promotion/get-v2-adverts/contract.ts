// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV2AdvertsResponse } from "./types.js";

const getV2AdvertsResponse200Schema = createWbSchema<GetV2AdvertsResponse>(
  { kind: "ref", name: "GetAdverts" },
  promotionComponents,
);

export function parseGetV2AdvertsResponse(
  status: number,
  input: unknown,
): GetV2AdvertsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV2AdvertsResponse200Schema,
        input,
        "getV2Adverts",
      );
    default:
      return unexpectedWbSuccessStatus("getV2Adverts", status);
  }
}
