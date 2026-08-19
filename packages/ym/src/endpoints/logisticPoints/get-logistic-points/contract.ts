// Generated runtime response contract for this Yandex Market endpoint.
import { logisticPointsComponents } from "../../../contracts/logisticPoints.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetLogisticPointsResponse } from "./types.js";

const getLogisticPointsResponse200Schema =
  createYmSchema<GetLogisticPointsResponse>(
    { kind: "ref", name: "GetLogisticPointsResponse" },
    logisticPointsComponents,
  );

export function parseGetLogisticPointsResponse(
  status: number,
  input: unknown,
): GetLogisticPointsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getLogisticPointsResponse200Schema,
        input,
        "getLogisticPoints",
      );
    default:
      return unexpectedYmSuccessStatus("getLogisticPoints", status);
  }
}
