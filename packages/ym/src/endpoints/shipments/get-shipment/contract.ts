// Generated runtime response contract for this Yandex Market endpoint.
import { shipmentsComponents } from "../../../contracts/shipments.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetShipmentResponse } from "./types.js";

const getShipmentResponse200Schema = createYmSchema<GetShipmentResponse>(
  { kind: "ref", name: "GetShipmentResponse" },
  shipmentsComponents,
);

export function parseGetShipmentResponse(
  status: number,
  input: unknown,
): GetShipmentResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getShipmentResponse200Schema,
        input,
        "getShipment",
      );
    default:
      return unexpectedYmSuccessStatus("getShipment", status);
  }
}
