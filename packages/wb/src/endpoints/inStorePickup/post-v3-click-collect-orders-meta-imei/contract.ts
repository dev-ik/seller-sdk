// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersMetaImeiResponse } from "./types.js";

const postV3ClickCollectOrdersMetaImeiResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersMetaImeiResponse>(
    { kind: "ref", name: "api.MetaSetResponses" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersMetaImeiResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersMetaImeiResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersMetaImeiResponse200Schema,
        input,
        "postV3ClickCollectOrdersMetaImei",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersMetaImei",
        status,
      );
  }
}
