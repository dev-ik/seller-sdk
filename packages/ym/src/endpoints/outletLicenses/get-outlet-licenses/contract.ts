// Generated runtime response contract for this Yandex Market endpoint.
import { outletLicensesComponents } from "../../../contracts/outletLicenses.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOutletLicensesResponse } from "./types.js";

const getOutletLicensesResponse200Schema =
  createYmSchema<GetOutletLicensesResponse>(
    { kind: "ref", name: "GetOutletLicensesResponse" },
    outletLicensesComponents,
  );

export function parseGetOutletLicensesResponse(
  status: number,
  input: unknown,
): GetOutletLicensesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getOutletLicensesResponse200Schema,
        input,
        "getOutletLicenses",
      );
    default:
      return unexpectedYmSuccessStatus("getOutletLicenses", status);
  }
}
