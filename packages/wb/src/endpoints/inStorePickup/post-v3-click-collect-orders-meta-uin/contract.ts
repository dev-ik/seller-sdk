// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersMetaUinResponse } from "./types.js";

const postV3ClickCollectOrdersMetaUinResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersMetaUinResponse>(
    { kind: "ref", name: "api.MetaSetResponses" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersMetaUinResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersMetaUinResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersMetaUinResponse200Schema,
        input,
        "postV3ClickCollectOrdersMetaUin",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersMetaUin",
        status,
      );
  }
}
