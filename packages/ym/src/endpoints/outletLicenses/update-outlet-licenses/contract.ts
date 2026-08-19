// Generated runtime response contract for this Yandex Market endpoint.
import { outletLicensesComponents } from "../../../contracts/outletLicenses.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { UpdateOutletLicensesResponse } from "./types.js";

const updateOutletLicensesResponse200Schema =
  createYmSchema<UpdateOutletLicensesResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    outletLicensesComponents,
  );

export function parseUpdateOutletLicensesResponse(
  status: number,
  input: unknown,
): UpdateOutletLicensesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        updateOutletLicensesResponse200Schema,
        input,
        "updateOutletLicenses",
      );
    default:
      return unexpectedYmSuccessStatus("updateOutletLicenses", status);
  }
}
