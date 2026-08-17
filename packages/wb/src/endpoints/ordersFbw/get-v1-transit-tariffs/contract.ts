// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbwComponents } from "../../../contracts/ordersFbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1TransitTariffsResponse } from "./types.js";

const getV1TransitTariffsResponse200Schema =
  createWbSchema<GetV1TransitTariffsResponse>(
    { kind: "array", items: { kind: "ref", name: "models.TransitTariff" } },
    ordersFbwComponents,
  );

export function parseGetV1TransitTariffsResponse(
  status: number,
  input: unknown,
): GetV1TransitTariffsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1TransitTariffsResponse200Schema,
        input,
        "getV1TransitTariffs",
      );
    default:
      return unexpectedWbSuccessStatus("getV1TransitTariffs", status);
  }
}
