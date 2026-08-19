// Generated runtime response contract for this Yandex Market endpoint.
import { bidsComponents } from "../../../contracts/bids.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { PutBidsForBusinessResponse } from "./types.js";

const putBidsForBusinessResponse200Schema =
  createYmSchema<PutBidsForBusinessResponse>(
    { kind: "ref", name: "EmptyApiResponse" },
    bidsComponents,
  );

export function parsePutBidsForBusinessResponse(
  status: number,
  input: unknown,
): PutBidsForBusinessResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        putBidsForBusinessResponse200Schema,
        input,
        "putBidsForBusiness",
      );
    default:
      return unexpectedYmSuccessStatus("putBidsForBusiness", status);
  }
}
