// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV3DbsOrdersNewResponse } from "./types.js";

const getV3DbsOrdersNewResponse200Schema =
  createWbSchema<GetV3DbsOrdersNewResponse>(
    {
      kind: "object",
      properties: {
        orders: { kind: "array", items: { kind: "ref", name: "OrderNewDBS" } },
      },
      required: [],
    },
    dbsComponents,
  );

export function parseGetV3DbsOrdersNewResponse(
  status: number,
  input: unknown,
): GetV3DbsOrdersNewResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV3DbsOrdersNewResponse200Schema,
        input,
        "getV3DbsOrdersNew",
      );
    default:
      return unexpectedWbSuccessStatus("getV3DbsOrdersNew", status);
  }
}
