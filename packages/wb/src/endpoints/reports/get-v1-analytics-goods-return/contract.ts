// Generated runtime response contract for this Wildberries endpoint.
import { reportsComponents } from "../../../contracts/reports.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1AnalyticsGoodsReturnResponse } from "./types.js";

const getV1AnalyticsGoodsReturnResponse200Schema =
  createWbSchema<GetV1AnalyticsGoodsReturnResponse>(
    {
      kind: "object",
      properties: {
        report: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              barcode: { kind: "string" },
              brand: { kind: "string" },
              completedDt: { kind: "string", nullable: true },
              dstOfficeAddress: { kind: "string" },
              dstOfficeId: { kind: "number", integer: true },
              expiredDt: { kind: "string", nullable: true },
              isStatusActive: { kind: "number", integer: true, enum: [0, 1] },
              nmId: { kind: "number", integer: true },
              orderDt: { kind: "string" },
              orderId: { kind: "number", integer: true },
              readyToReturnDt: { kind: "string", nullable: true },
              reason: { kind: "string" },
              returnType: { kind: "string" },
              shkId: { kind: "number", integer: true },
              srid: { kind: "string" },
              status: { kind: "string" },
              stickerId: { kind: "string" },
              subjectName: { kind: "string" },
              techSize: { kind: "string" },
            },
            required: [],
          },
        },
      },
      required: [],
    },
    reportsComponents,
  );

export function parseGetV1AnalyticsGoodsReturnResponse(
  status: number,
  input: unknown,
): GetV1AnalyticsGoodsReturnResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1AnalyticsGoodsReturnResponse200Schema,
        input,
        "getV1AnalyticsGoodsReturn",
      );
    default:
      return unexpectedWbSuccessStatus("getV1AnalyticsGoodsReturn", status);
  }
}
