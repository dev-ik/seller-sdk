// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbwComponents } from "../../../contracts/ordersFbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1SuppliesIdResponse } from "./types.js";

const getV1SuppliesIdResponse200Schema =
  createWbSchema<GetV1SuppliesIdResponse>(
    { kind: "ref", name: "models.SupplyDetails" },
    ordersFbwComponents,
  );

export function parseGetV1SuppliesIdResponse(
  status: number,
  input: unknown,
): GetV1SuppliesIdResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1SuppliesIdResponse200Schema,
        input,
        "getV1SuppliesId",
      );
    default:
      return unexpectedWbSuccessStatus("getV1SuppliesId", status);
  }
}
