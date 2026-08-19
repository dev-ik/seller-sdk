// Generated runtime response contract for this Yandex Market endpoint.
import { businessOfferMappingsComponents } from "../../../contracts/businessOfferMappings.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { AddOffersToArchiveResponse } from "./types.js";

const addOffersToArchiveResponse200Schema =
  createYmSchema<AddOffersToArchiveResponse>(
    { kind: "ref", name: "AddOffersToArchiveResponse" },
    businessOfferMappingsComponents,
  );

export function parseAddOffersToArchiveResponse(
  status: number,
  input: unknown,
): AddOffersToArchiveResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        addOffersToArchiveResponse200Schema,
        input,
        "addOffersToArchive",
      );
    default:
      return unexpectedYmSuccessStatus("addOffersToArchive", status);
  }
}
