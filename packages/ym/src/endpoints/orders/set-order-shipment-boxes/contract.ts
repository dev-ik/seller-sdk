// Generated runtime response contract for this Yandex Market endpoint.
import { ordersComponents } from "../../../contracts/orders.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { SetOrderShipmentBoxesResponse } from "./types.js";

const setOrderShipmentBoxesResponse200Schema =
  createYmSchema<SetOrderShipmentBoxesResponse>(
    { kind: "ref", name: "SetOrderShipmentBoxesResponse" },
    ordersComponents,
  );

export function parseSetOrderShipmentBoxesResponse(
  status: number,
  input: unknown,
): SetOrderShipmentBoxesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        setOrderShipmentBoxesResponse200Schema,
        input,
        "setOrderShipmentBoxes",
      );
    default:
      return unexpectedYmSuccessStatus("setOrderShipmentBoxes", status);
  }
}
