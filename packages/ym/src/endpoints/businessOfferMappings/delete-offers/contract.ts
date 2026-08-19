// Generated runtime response contract for this Yandex Market endpoint.
import { businessOfferMappingsComponents } from "../../../contracts/businessOfferMappings.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { DeleteOffersResponse } from "./types.js";

const deleteOffersResponse200Schema = createYmSchema<DeleteOffersResponse>(
  { kind: "ref", name: "DeleteOffersResponse" },
  businessOfferMappingsComponents,
);

export function parseDeleteOffersResponse(
  status: number,
  input: unknown,
): DeleteOffersResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        deleteOffersResponse200Schema,
        input,
        "deleteOffers",
      );
    default:
      return unexpectedYmSuccessStatus("deleteOffers", status);
  }
}
