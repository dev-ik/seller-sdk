// Generated runtime response contract for this Yandex Market endpoint.
import { bidsComponents } from "../../../contracts/bids.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetBidsInfoForBusinessResponse } from "./types.js";

const getBidsInfoForBusinessResponse200Schema =
  createYmSchema<GetBidsInfoForBusinessResponse>(
    { kind: "ref", name: "GetBidsInfoResponse" },
    bidsComponents,
  );

export function parseGetBidsInfoForBusinessResponse(
  status: number,
  input: unknown,
): GetBidsInfoForBusinessResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getBidsInfoForBusinessResponse200Schema,
        input,
        "getBidsInfoForBusiness",
      );
    default:
      return unexpectedYmSuccessStatus("getBidsInfoForBusiness", status);
  }
}
