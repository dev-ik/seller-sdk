// Generated runtime response contract for this Wildberries endpoint.
import { generalComponents } from "../../../contracts/general.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1RatingResponse } from "./types.js";

const getV1RatingResponse200Schema = createWbSchema<GetV1RatingResponse>(
  { kind: "ref", name: "SupplierRatingModel" },
  generalComponents,
);

export function parseGetV1RatingResponse(
  status: number,
  input: unknown,
): GetV1RatingResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1RatingResponse200Schema,
        input,
        "getV1Rating",
      );
    default:
      return unexpectedWbSuccessStatus("getV1Rating", status);
  }
}
