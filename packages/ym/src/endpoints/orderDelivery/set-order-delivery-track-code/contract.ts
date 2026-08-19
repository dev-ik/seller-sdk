// Generated runtime response contract for this Yandex Market endpoint.
import { orderDeliveryComponents } from "../../../contracts/orderDelivery.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { SetOrderDeliveryTrackCodeResponse } from "./types.js";

const setOrderDeliveryTrackCodeResponse200Schema =
  createYmSchema<SetOrderDeliveryTrackCodeResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    orderDeliveryComponents,
  );

export function parseSetOrderDeliveryTrackCodeResponse(
  status: number,
  input: unknown,
): SetOrderDeliveryTrackCodeResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        setOrderDeliveryTrackCodeResponse200Schema,
        input,
        "setOrderDeliveryTrackCode",
      );
    default:
      return unexpectedYmSuccessStatus("setOrderDeliveryTrackCode", status);
  }
}
