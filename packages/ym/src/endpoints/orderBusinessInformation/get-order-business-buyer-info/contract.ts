// Generated runtime response contract for this Yandex Market endpoint.
import { orderBusinessInformationComponents } from "../../../contracts/orderBusinessInformation.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOrderBusinessBuyerInfoResponse } from "./types.js";

const getOrderBusinessBuyerInfoResponse200Schema =
  createYmSchema<GetOrderBusinessBuyerInfoResponse>(
    { kind: "ref", name: "GetBusinessBuyerInfoResponse" },
    orderBusinessInformationComponents,
  );

export function parseGetOrderBusinessBuyerInfoResponse(
  status: number,
  input: unknown,
): GetOrderBusinessBuyerInfoResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getOrderBusinessBuyerInfoResponse200Schema,
        input,
        "getOrderBusinessBuyerInfo",
      );
    default:
      return unexpectedYmSuccessStatus("getOrderBusinessBuyerInfo", status);
  }
}
