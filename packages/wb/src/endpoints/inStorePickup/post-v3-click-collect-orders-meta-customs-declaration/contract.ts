// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersMetaCustomsDeclarationResponse } from "./types.js";

const postV3ClickCollectOrdersMetaCustomsDeclarationResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersMetaCustomsDeclarationResponse>(
    { kind: "ref", name: "api.CustomsDeclarationSetResponse" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersMetaCustomsDeclarationResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersMetaCustomsDeclarationResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersMetaCustomsDeclarationResponse200Schema,
        input,
        "postV3ClickCollectOrdersMetaCustomsDeclaration",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersMetaCustomsDeclaration",
        status,
      );
  }
}
