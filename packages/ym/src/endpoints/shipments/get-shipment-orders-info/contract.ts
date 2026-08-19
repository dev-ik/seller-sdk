// Generated runtime response contract for this Yandex Market endpoint.
import { shipmentsComponents } from "../../../contracts/shipments.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetShipmentOrdersInfoResponse } from "./types.js";

const getShipmentOrdersInfoResponse200Schema =
  createYmSchema<GetShipmentOrdersInfoResponse>(
    { kind: "ref", name: "GetShipmentOrdersInfoResponse" },
    shipmentsComponents,
  );

export function parseGetShipmentOrdersInfoResponse(
  status: number,
  input: unknown,
): GetShipmentOrdersInfoResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getShipmentOrdersInfoResponse200Schema,
        input,
        "getShipmentOrdersInfo",
      );
    default:
      return unexpectedYmSuccessStatus("getShipmentOrdersInfo", status);
  }
}
