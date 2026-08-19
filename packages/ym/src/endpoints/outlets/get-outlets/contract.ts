// Generated runtime response contract for this Yandex Market endpoint.
import { outletsComponents } from "../../../contracts/outlets.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetOutletsResponse } from "./types.js";

const getOutletsResponse200Schema = createYmSchema<GetOutletsResponse>(
  { kind: "ref", name: "GetOutletsResponse" },
  outletsComponents,
);

export function parseGetOutletsResponse(
  status: number,
  input: unknown,
): GetOutletsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(getOutletsResponse200Schema, input, "getOutlets");
    default:
      return unexpectedYmSuccessStatus("getOutlets", status);
  }
}
