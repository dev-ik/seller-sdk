// Generated runtime response contract for this Yandex Market endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetReportInfoResponse } from "./types.js";

const getReportInfoResponse200Schema = createYmSchema<GetReportInfoResponse>(
  { kind: "ref", name: "GetReportInfoResponse" },
  reportsComponents,
);

export function parseGetReportInfoResponse(
  status: number,
  input: unknown,
): GetReportInfoResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getReportInfoResponse200Schema,
        input,
        "getReportInfo",
      );
    default:
      return unexpectedYmSuccessStatus("getReportInfo", status);
  }
}
