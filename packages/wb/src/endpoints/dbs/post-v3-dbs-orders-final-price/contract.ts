// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersFinalPriceResponse } from "./types.js";

const postV3DbsOrdersFinalPriceResponse200Schema =
  createWbSchema<PostV3DbsOrdersFinalPriceResponse>(
    { kind: "ref", name: "api.OrdersFinalPriceResponse" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersFinalPriceResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersFinalPriceResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersFinalPriceResponse200Schema,
        input,
        "postV3DbsOrdersFinalPrice",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersFinalPrice", status);
  }
}
