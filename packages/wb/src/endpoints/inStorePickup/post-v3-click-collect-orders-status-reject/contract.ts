// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersStatusRejectResponse } from "./types.js";

const postV3ClickCollectOrdersStatusRejectResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersStatusRejectResponse>(
    { kind: "ref", name: "api.StatusSetResponses" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersStatusRejectResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersStatusRejectResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersStatusRejectResponse200Schema,
        input,
        "postV3ClickCollectOrdersStatusReject",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersStatusReject",
        status,
      );
  }
}
