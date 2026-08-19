// Generated runtime response contract for this Yandex Market endpoint.
import { businessOfferMappingsComponents } from "../../../contracts/businessOfferMappings.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOfferMappingsResponse } from "./types.js";

const getOfferMappingsResponse200Schema =
  createYmSchema<GetOfferMappingsResponse>(
    { kind: "ref", name: "GetOfferMappingsResponse" },
    businessOfferMappingsComponents,
  );

export function parseGetOfferMappingsResponse(
  status: number,
  input: unknown,
): GetOfferMappingsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getOfferMappingsResponse200Schema,
        input,
        "getOfferMappings",
      );
    default:
      return unexpectedYmSuccessStatus("getOfferMappings", status);
  }
}
