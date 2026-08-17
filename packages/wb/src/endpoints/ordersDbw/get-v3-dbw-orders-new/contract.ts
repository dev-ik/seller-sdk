// Generated runtime response contract for this Wildberries endpoint.
import { ordersDbwComponents } from "../../../contracts/ordersDbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV3DbwOrdersNewResponse } from "./types.js";

const getV3DbwOrdersNewResponse200Schema =
  createWbSchema<GetV3DbwOrdersNewResponse>(
    {
      kind: "object",
      properties: {
        orders: { kind: "array", items: { kind: "ref", name: "OrderNewDBW" } },
      },
      required: [],
    },
    ordersDbwComponents,
  );

export function parseGetV3DbwOrdersNewResponse(
  status: number,
  input: unknown,
): GetV3DbwOrdersNewResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV3DbwOrdersNewResponse200Schema,
        input,
        "getV3DbwOrdersNew",
      );
    default:
      return unexpectedWbSuccessStatus("getV3DbwOrdersNew", status);
  }
}
