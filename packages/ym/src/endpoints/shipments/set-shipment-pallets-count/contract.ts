// Generated runtime response contract for this Yandex Market endpoint.
import { shipmentsComponents } from "../../../contracts/shipments.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { SetShipmentPalletsCountResponse } from "./types.js";

const setShipmentPalletsCountResponse200Schema =
  createYmSchema<SetShipmentPalletsCountResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    shipmentsComponents,
  );

export function parseSetShipmentPalletsCountResponse(
  status: number,
  input: unknown,
): SetShipmentPalletsCountResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        setShipmentPalletsCountResponse200Schema,
        input,
        "setShipmentPalletsCount",
      );
    default:
      return unexpectedYmSuccessStatus("setShipmentPalletsCount", status);
  }
}
