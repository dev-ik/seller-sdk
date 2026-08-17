// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersStatusReceiveResponse } from "./types.js";

const postV3ClickCollectOrdersStatusReceiveResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersStatusReceiveResponse>(
    { kind: "ref", name: "api.StatusSetResponses" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersStatusReceiveResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersStatusReceiveResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersStatusReceiveResponse200Schema,
        input,
        "postV3ClickCollectOrdersStatusReceive",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersStatusReceive",
        status,
      );
  }
}
