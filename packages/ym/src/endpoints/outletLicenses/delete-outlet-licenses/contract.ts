// Generated runtime response contract for this Yandex Market endpoint.
import { outletLicensesComponents } from "../../../contracts/outletLicenses.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { DeleteOutletLicensesResponse } from "./types.js";

const deleteOutletLicensesResponse200Schema =
  createYmSchema<DeleteOutletLicensesResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    outletLicensesComponents,
  );

export function parseDeleteOutletLicensesResponse(
  status: number,
  input: unknown,
): DeleteOutletLicensesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        deleteOutletLicensesResponse200Schema,
        input,
        "deleteOutletLicenses",
      );
    default:
      return unexpectedYmSuccessStatus("deleteOutletLicenses", status);
  }
}
