// Generated runtime response contract for this Wildberries endpoint.
import { ratesComponents } from "../../../contracts/rates.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1TariffsPalletResponse } from "./types.js";

const getV1TariffsPalletResponse200Schema =
  createWbSchema<GetV1TariffsPalletResponse>(
    { kind: "ref", name: "RatesPalletResponse" },
    ratesComponents,
  );

export function parseGetV1TariffsPalletResponse(
  status: number,
  input: unknown,
): GetV1TariffsPalletResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1TariffsPalletResponse200Schema,
        input,
        "getV1TariffsPallet",
      );
    default:
      return unexpectedWbSuccessStatus("getV1TariffsPallet", status);
  }
}
