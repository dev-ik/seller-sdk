// Generated runtime response contract for this Yandex Market endpoint.
import { businessOfferMappingsComponents } from "../../../contracts/businessOfferMappings.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GenerateOfferBarcodesResponse } from "./types.js";

const generateOfferBarcodesResponse200Schema =
  createYmSchema<GenerateOfferBarcodesResponse>(
    { kind: "ref", name: "GenerateOfferBarcodesResponse" },
    businessOfferMappingsComponents,
  );

export function parseGenerateOfferBarcodesResponse(
  status: number,
  input: unknown,
): GenerateOfferBarcodesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        generateOfferBarcodesResponse200Schema,
        input,
        "generateOfferBarcodes",
      );
    default:
      return unexpectedYmSuccessStatus("generateOfferBarcodes", status);
  }
}
