// Generated runtime response contract for this Yandex Market endpoint.
import { shipmentsComponents } from "../../../contracts/shipments.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { ConfirmShipmentResponse } from "./types.js";

const confirmShipmentResponse200Schema =
  createYmSchema<ConfirmShipmentResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    shipmentsComponents,
  );

export function parseConfirmShipmentResponse(
  status: number,
  input: unknown,
): ConfirmShipmentResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        confirmShipmentResponse200Schema,
        input,
        "confirmShipment",
      );
    default:
      return unexpectedYmSuccessStatus("confirmShipment", status);
  }
}
