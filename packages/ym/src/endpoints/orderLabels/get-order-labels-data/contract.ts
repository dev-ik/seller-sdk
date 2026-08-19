// Generated runtime response contract for this Yandex Market endpoint.
import { orderLabelsComponents } from "../../../contracts/orderLabels.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOrderLabelsDataResponse } from "./types.js";

const getOrderLabelsDataResponse200Schema =
  createYmSchema<GetOrderLabelsDataResponse>(
    { kind: "ref", name: "GetOrderLabelsDataResponse" },
    orderLabelsComponents,
  );

export function parseGetOrderLabelsDataResponse(
  status: number,
  input: unknown,
): GetOrderLabelsDataResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getOrderLabelsDataResponse200Schema,
        input,
        "getOrderLabelsData",
      );
    default:
      return unexpectedYmSuccessStatus("getOrderLabelsData", status);
  }
}
