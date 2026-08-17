// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersClientIdentityResponse } from "./types.js";

const postV3ClickCollectOrdersClientIdentityResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersClientIdentityResponse>(
    { kind: "ref", name: "api.CheckedIdentity" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersClientIdentityResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersClientIdentityResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersClientIdentityResponse200Schema,
        input,
        "postV3ClickCollectOrdersClientIdentity",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersClientIdentity",
        status,
      );
  }
}
