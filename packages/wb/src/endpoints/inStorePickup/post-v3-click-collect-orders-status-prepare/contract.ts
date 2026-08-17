// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersStatusPrepareResponse } from "./types.js";

const postV3ClickCollectOrdersStatusPrepareResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersStatusPrepareResponse>(
    { kind: "ref", name: "api.MetaDetailsResponse" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersStatusPrepareResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersStatusPrepareResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersStatusPrepareResponse200Schema,
        input,
        "postV3ClickCollectOrdersStatusPrepare",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersStatusPrepare",
        status,
      );
  }
}
