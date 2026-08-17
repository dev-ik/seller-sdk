// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersStatusCancelResponse } from "./types.js";

const postV3ClickCollectOrdersStatusCancelResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersStatusCancelResponse>(
    { kind: "ref", name: "api.StatusSetResponses" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersStatusCancelResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersStatusCancelResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersStatusCancelResponse200Schema,
        input,
        "postV3ClickCollectOrdersStatusCancel",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersStatusCancel",
        status,
      );
  }
}
