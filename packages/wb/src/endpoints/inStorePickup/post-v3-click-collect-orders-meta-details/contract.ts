// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersMetaDetailsResponse } from "./types.js";

const postV3ClickCollectOrdersMetaDetailsResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersMetaDetailsResponse>(
    { kind: "ref", name: "api.OrdersMetaDetailsResponse" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersMetaDetailsResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersMetaDetailsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersMetaDetailsResponse200Schema,
        input,
        "postV3ClickCollectOrdersMetaDetails",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersMetaDetails",
        status,
      );
  }
}
