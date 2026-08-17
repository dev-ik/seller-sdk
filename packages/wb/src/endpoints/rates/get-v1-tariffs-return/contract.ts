// Generated runtime response contract for this Wildberries endpoint.
import { ratesComponents } from "../../../contracts/rates.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1TariffsReturnResponse } from "./types.js";

const getV1TariffsReturnResponse200Schema =
  createWbSchema<GetV1TariffsReturnResponse>(
    { kind: "ref", name: "ReturnRatesResponse" },
    ratesComponents,
  );

export function parseGetV1TariffsReturnResponse(
  status: number,
  input: unknown,
): GetV1TariffsReturnResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1TariffsReturnResponse200Schema,
        input,
        "getV1TariffsReturn",
      );
    default:
      return unexpectedWbSuccessStatus("getV1TariffsReturn", status);
  }
}
