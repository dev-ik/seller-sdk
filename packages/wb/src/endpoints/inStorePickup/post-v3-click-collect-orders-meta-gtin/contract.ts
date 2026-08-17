// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersMetaGtinResponse } from "./types.js";

const postV3ClickCollectOrdersMetaGtinResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersMetaGtinResponse>(
    { kind: "ref", name: "api.MetaSetResponses" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersMetaGtinResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersMetaGtinResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersMetaGtinResponse200Schema,
        input,
        "postV3ClickCollectOrdersMetaGtin",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersMetaGtin",
        status,
      );
  }
}
