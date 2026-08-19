// Generated runtime response contract for this Yandex Market endpoint.
import { orderBusinessInformationComponents } from "../../../contracts/orderBusinessInformation.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOrderBusinessDocumentsInfoResponse } from "./types.js";

const getOrderBusinessDocumentsInfoResponse200Schema =
  createYmSchema<GetOrderBusinessDocumentsInfoResponse>(
    { kind: "ref", name: "GetBusinessDocumentsInfoResponse" },
    orderBusinessInformationComponents,
  );

export function parseGetOrderBusinessDocumentsInfoResponse(
  status: number,
  input: unknown,
): GetOrderBusinessDocumentsInfoResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getOrderBusinessDocumentsInfoResponse200Schema,
        input,
        "getOrderBusinessDocumentsInfo",
      );
    default:
      return unexpectedYmSuccessStatus("getOrderBusinessDocumentsInfo", status);
  }
}
