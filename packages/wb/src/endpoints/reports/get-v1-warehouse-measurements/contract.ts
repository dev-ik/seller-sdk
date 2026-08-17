// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1WarehouseMeasurementsResponse } from "./types.js";

const getV1WarehouseMeasurementsResponse200Schema =
  createWbSchema<GetV1WarehouseMeasurementsResponse>(
    { kind: "ref", name: "WHM" },
    reportsComponents,
  );

export function parseGetV1WarehouseMeasurementsResponse(
  status: number,
  input: unknown,
): GetV1WarehouseMeasurementsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1WarehouseMeasurementsResponse200Schema,
        input,
        "getV1WarehouseMeasurements",
      );
    default:
      return unexpectedWbSuccessStatus("getV1WarehouseMeasurements", status);
  }
}
