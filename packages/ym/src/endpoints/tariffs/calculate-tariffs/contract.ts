// Generated runtime response contract for this Yandex Market endpoint.
import { tariffsComponents } from "../../../contracts/tariffs.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { CalculateTariffsResponse } from "./types.js";

const calculateTariffsResponse200Schema =
  createYmSchema<CalculateTariffsResponse>(
    { kind: "ref", name: "CalculateTariffsResponse" },
    tariffsComponents,
  );

export function parseCalculateTariffsResponse(
  status: number,
  input: unknown,
): CalculateTariffsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        calculateTariffsResponse200Schema,
        input,
        "calculateTariffs",
      );
    default:
      return unexpectedYmSuccessStatus("calculateTariffs", status);
  }
}
