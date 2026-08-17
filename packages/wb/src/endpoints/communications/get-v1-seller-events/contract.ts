// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1SellerEventsResponse } from "./types.js";

const getV1SellerEventsResponse200Schema =
  createWbSchema<GetV1SellerEventsResponse>(
    { kind: "ref", name: "EventsResponse" },
    communicationsComponents,
  );

export function parseGetV1SellerEventsResponse(
  status: number,
  input: unknown,
): GetV1SellerEventsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1SellerEventsResponse200Schema,
        input,
        "getV1SellerEvents",
      );
    default:
      return unexpectedWbSuccessStatus("getV1SellerEvents", status);
  }
}
