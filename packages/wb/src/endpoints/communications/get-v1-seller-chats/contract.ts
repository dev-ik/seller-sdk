// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1SellerChatsResponse } from "./types.js";

const getV1SellerChatsResponse200Schema =
  createWbSchema<GetV1SellerChatsResponse>(
    { kind: "ref", name: "ChatsResponse" },
    communicationsComponents,
  );

export function parseGetV1SellerChatsResponse(
  status: number,
  input: unknown,
): GetV1SellerChatsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1SellerChatsResponse200Schema,
        input,
        "getV1SellerChats",
      );
    default:
      return unexpectedWbSuccessStatus("getV1SellerChats", status);
  }
}
