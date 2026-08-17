// Generated runtime response contract for this Wildberries endpoint.
import { inStorePickupComponents } from "../../../contracts/inStorePickup.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3ClickCollectOrdersMetaSgtinResponse } from "./types.js";

const postV3ClickCollectOrdersMetaSgtinResponse200Schema =
  createWbSchema<PostV3ClickCollectOrdersMetaSgtinResponse>(
    { kind: "ref", name: "api.MetaSetResponses" },
    inStorePickupComponents,
  );

export function parsePostV3ClickCollectOrdersMetaSgtinResponse(
  status: number,
  input: unknown,
): PostV3ClickCollectOrdersMetaSgtinResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3ClickCollectOrdersMetaSgtinResponse200Schema,
        input,
        "postV3ClickCollectOrdersMetaSgtin",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3ClickCollectOrdersMetaSgtin",
        status,
      );
  }
}
