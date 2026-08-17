// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersStatusConfirmResponse } from "./types.js";

const postV3ClickCollectOrdersStatusConfirmResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersStatusConfirmResponse>(
    { kind: "ref", name: "api.StatusSetResponses" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersStatusConfirmResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersStatusConfirmResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersStatusConfirmResponse200Schema,
        input,
        "postV3ClickCollectOrdersStatusConfirm",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersStatusConfirm",
        status,
      );
  }
}
