// Generated runtime response contract for this Yandex Market endpoint.
import { businessOfferMappingsComponents } from "../../../contracts/businessOfferMappings.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateOfferMappingsResponse } from "./types.js";

const updateOfferMappingsResponse200Schema =
  createYmSchema<UpdateOfferMappingsResponse>(
    { kind: "ref", name: "UpdateOfferMappingsResponse" },
    businessOfferMappingsComponents,
  );

export function parseUpdateOfferMappingsResponse(
  status: number,
  input: unknown,
): UpdateOfferMappingsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateOfferMappingsResponse200Schema,
        input,
        "updateOfferMappings",
      );
    default:
      return unexpectedYmSuccessStatus("updateOfferMappings", status);
  }
}
