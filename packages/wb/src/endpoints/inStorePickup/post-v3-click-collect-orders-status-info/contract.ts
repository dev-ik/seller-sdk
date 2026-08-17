// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersStatusInfoResponse } from "./types.js";

const postV3ClickCollectOrdersStatusInfoResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersStatusInfoResponse>(
    { kind: "ref", name: "api.OrderStatusesV2" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersStatusInfoResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersStatusInfoResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersStatusInfoResponse200Schema,
        input,
        "postV3ClickCollectOrdersStatusInfo",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersStatusInfo",
        status,
      );
  }
}
