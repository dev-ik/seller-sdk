// Generated runtime response contract for this Yandex Market endpoint.
import { businessOfferMappingsComponents } from "../../../contracts/businessOfferMappings.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { DeleteOffersFromArchiveResponse } from "./types.js";

const deleteOffersFromArchiveResponse200Schema =
  createYmSchema<DeleteOffersFromArchiveResponse>(
    { kind: "ref", name: "DeleteOffersFromArchiveResponse" },
    businessOfferMappingsComponents,
  );

export function parseDeleteOffersFromArchiveResponse(
  status: number,
  input: unknown,
): DeleteOffersFromArchiveResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        deleteOffersFromArchiveResponse200Schema,
        input,
        "deleteOffersFromArchive",
      );
    default:
      return unexpectedYmSuccessStatus("deleteOffersFromArchive", status);
  }
}
