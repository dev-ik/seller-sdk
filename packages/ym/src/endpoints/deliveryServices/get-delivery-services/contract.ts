// Generated runtime response contract for this Yandex Market endpoint.
import { deliveryServicesComponents } from "../../../contracts/deliveryServices.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetDeliveryServicesResponse } from "./types.js";

const getDeliveryServicesResponse200Schema =
  createYmSchema<GetDeliveryServicesResponse>(
    { kind: "ref", name: "GetDeliveryServicesResponse" },
    deliveryServicesComponents,
  );

export function parseGetDeliveryServicesResponse(
  status: number,
  input: unknown,
): GetDeliveryServicesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getDeliveryServicesResponse200Schema,
        input,
        "getDeliveryServices",
      );
    default:
      return unexpectedYmSuccessStatus("getDeliveryServices", status);
  }
}
