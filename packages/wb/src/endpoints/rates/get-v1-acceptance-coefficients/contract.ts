// Generated runtime response contract for this Wildberries endpoint.
import { ratesComponents } from "../../../contracts/rates.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1AcceptanceCoefficientsResponse } from "./types.js";

const getV1AcceptanceCoefficientsResponse200Schema =
  createWbSchema<GetV1AcceptanceCoefficientsResponse>(
    {
      kind: "array",
      items: { kind: "ref", name: "models.AcceptanceCoefficient" },
    },
    ratesComponents,
  );

export function parseGetV1AcceptanceCoefficientsResponse(
  status: number,
  input: unknown,
): GetV1AcceptanceCoefficientsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1AcceptanceCoefficientsResponse200Schema,
        input,
        "getV1AcceptanceCoefficients",
      );
    default:
      return unexpectedWbSuccessStatus("getV1AcceptanceCoefficients", status);
  }
}
