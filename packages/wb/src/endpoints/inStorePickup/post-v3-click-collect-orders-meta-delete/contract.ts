// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersMetaDeleteResponse } from "./types.js";

const postV3ClickCollectOrdersMetaDeleteResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersMetaDeleteResponse>(
    { kind: "ref", name: "api.OrdersResponses" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersMetaDeleteResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersMetaDeleteResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersMetaDeleteResponse200Schema,
        input,
        "postV3ClickCollectOrdersMetaDelete",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersMetaDelete",
        status,
      );
  }
}
