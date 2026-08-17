// Generated runtime response contract for this Wildberries endpoint.
import { ratesComponents } from "../../../contracts/rates.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1TariffsBoxResponse } from "./types.js";

const getV1TariffsBoxResponse200Schema =
  createWbSchema<GetV1TariffsBoxResponse>(
    { kind: "ref", name: "RatesBoxResponse" },
    ratesComponents,
  );

export function parseGetV1TariffsBoxResponse(
  status: number,
  input: unknown,
): GetV1TariffsBoxResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1TariffsBoxResponse200Schema,
        input,
        "getV1TariffsBox",
      );
    default:
      return unexpectedWbSuccessStatus("getV1TariffsBox", status);
  }
}
