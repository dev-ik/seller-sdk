// Generated runtime response contract for this Wildberries endpoint.
import { ratesComponents } from "../../../contracts/rates.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1TariffsCommissionResponse } from "./types.js";

const getV1TariffsCommissionResponse200Schema =
  createWbSchema<GetV1TariffsCommissionResponse>(
    {
      kind: "union",
      choices: [
        { kind: "ref", name: "Fee" },
        { kind: "ref", name: "FeeChina" },
        { kind: "ref", name: "FeeTurkey" },
        { kind: "ref", name: "FeeUzbekistan" },
        { kind: "ref", name: "FeeUAE" },
      ],
    },
    ratesComponents,
  );

export function parseGetV1TariffsCommissionResponse(
  status: number,
  input: unknown,
): GetV1TariffsCommissionResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1TariffsCommissionResponse200Schema,
        input,
        "getV1TariffsCommission",
      );
    default:
      return unexpectedWbSuccessStatus("getV1TariffsCommission", status);
  }
}
