// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1DeductionsResponse } from "./types.js";

const getV1DeductionsResponse200Schema =
  createWbSchema<GetV1DeductionsResponse>(
    {
      kind: "object",
      properties: {
        data: {
          kind: "object",
          properties: {
            reports: {
              kind: "array",
              items: {
                kind: "object",
                properties: {
                  dtBonus: { kind: "string" },
                  nmId: { kind: "number", integer: true },
                  oldShkId: { kind: "number", integer: true },
                  oldColor: { kind: "string" },
                  oldSize: { kind: "string" },
                  oldSku: { kind: "string" },
                  oldVendorCode: { kind: "string" },
                  newShkId: { kind: "number", integer: true },
                  newColor: { kind: "string" },
                  newSize: { kind: "string" },
                  newSku: { kind: "string" },
                  newVendorCode: { kind: "string" },
                  bonusSumm: { kind: "number" },
                  bonusType: { kind: "string" },
                  photoUrls: { kind: "array", items: { kind: "string" } },
                },
                required: [],
              },
            },
            total: { kind: "number", integer: true },
          },
          required: ["reports", "total"],
        },
      },
      required: ["data"],
    },
    reportsComponents,
  );

export function parseGetV1DeductionsResponse(
  status: number,
  input: unknown,
): GetV1DeductionsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1DeductionsResponse200Schema,
        input,
        "getV1Deductions",
      );
    default:
      return unexpectedWbSuccessStatus("getV1Deductions", status);
  }
}
