// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersClientResponse } from "./types.js";

const postV3ClickCollectOrdersClientResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersClientResponse>(
    { kind: "ref", name: "api.OrderClientInfoResp" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersClientResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersClientResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersClientResponse200Schema,
        input,
        "postV3ClickCollectOrdersClient",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersClient",
        status,
      );
  }
}
