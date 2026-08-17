// Generated runtime response contract for this Wildberries endpoint.
import { generalComponents } from "../../../contracts/general.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetPingResponse } from "./types.js";

const getPingResponse200Schema = createWbSchema<GetPingResponse>(
  {
    kind: "object",
    properties: {
      TS: { kind: "string" },
      Status: { kind: "string", enum: ["OK"] },
    },
    required: [],
  },
  generalComponents,
);

export function parseGetPingResponse(
  status: number,
  input: unknown,
): GetPingResponse {
  switch (status) {
    case 200:
      return parseWbResponse(getPingResponse200Schema, input, "getPing");
    default:
      return unexpectedWbSuccessStatus("getPing", status);
  }
}
