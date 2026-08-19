// Generated runtime response contract for this Yandex Market endpoint.
import { shipmentsComponents } from "../../../contracts/shipments.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { TransferOrdersFromShipmentResponse } from "./types.js";

const transferOrdersFromShipmentResponse200Schema =
  createYmSchema<TransferOrdersFromShipmentResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    shipmentsComponents,
  );

export function parseTransferOrdersFromShipmentResponse(
  status: number,
  input: unknown,
): TransferOrdersFromShipmentResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        transferOrdersFromShipmentResponse200Schema,
        input,
        "transferOrdersFromShipment",
      );
    default:
      return unexpectedYmSuccessStatus("transferOrdersFromShipment", status);
  }
}
