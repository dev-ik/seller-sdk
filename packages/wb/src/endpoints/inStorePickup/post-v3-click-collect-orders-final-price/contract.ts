// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersFinalPriceResponse } from "./types.js";

const postV3ClickCollectOrdersFinalPriceResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersFinalPriceResponse>(
    { kind: "ref", name: "api.OrdersFinalPriceResponse" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersFinalPriceResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersFinalPriceResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersFinalPriceResponse200Schema,
        input,
        "postV3ClickCollectOrdersFinalPrice",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersFinalPrice",
        status,
      );
  }
}
