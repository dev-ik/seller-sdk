// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1MeasurementPenaltiesResponse } from "./types.js";

const getV1MeasurementPenaltiesResponse200Schema =
  createWbSchema<GetV1MeasurementPenaltiesResponse>(
    { kind: "ref", name: "MeasurementPenalties" },
    reportsComponents,
  );

export function parseGetV1MeasurementPenaltiesResponse(
  status: number,
  input: unknown,
): GetV1MeasurementPenaltiesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1MeasurementPenaltiesResponse200Schema,
        input,
        "getV1MeasurementPenalties",
      );
    default:
      return unexpectedWbSuccessStatus("getV1MeasurementPenalties", status);
  }
}
