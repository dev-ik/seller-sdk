// Generated runtime response contract for this Yandex Market endpoint.
import { orderDeliveryComponents } from "../../../contracts/orderDelivery.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOrderBuyerInfoResponse } from "./types.js";

const getOrderBuyerInfoResponse200Schema =
  createYmSchema<GetOrderBuyerInfoResponse>(
    { kind: "ref", name: "GetOrderBuyerInfoResponse" },
    orderDeliveryComponents,
  );

export function parseGetOrderBuyerInfoResponse(
  status: number,
  input: unknown,
): GetOrderBuyerInfoResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getOrderBuyerInfoResponse200Schema,
        input,
        "getOrderBuyerInfo",
      );
    default:
      return unexpectedYmSuccessStatus("getOrderBuyerInfo", status);
  }
}
