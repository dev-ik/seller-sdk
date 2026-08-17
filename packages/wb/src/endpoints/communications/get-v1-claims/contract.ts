// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1ClaimsResponse } from "./types.js";

const getV1ClaimsResponse200Schema = createWbSchema<GetV1ClaimsResponse>(
  {
    kind: "object",
    properties: {
      claims: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            id: { kind: "string" },
            claim_type: { kind: "number", integer: true },
            status: { kind: "number", integer: true },
            status_ex: { kind: "number", integer: true },
            nm_id: { kind: "number", integer: true },
            user_comment: { kind: "string", maxLength: 1000 },
            wb_comment: { kind: "string", maxLength: 10000, nullable: true },
            dt: { kind: "string" },
            imt_name: { kind: "string", nullable: true },
            order_dt: { kind: "string" },
            dt_update: { kind: "string" },
            photos: { kind: "array", items: { kind: "string" } },
            video_paths: { kind: "array", items: { kind: "string" } },
            actions: { kind: "array", items: { kind: "string" } },
            price: { kind: "number" },
            currency_code: { kind: "string" },
            srid: { kind: "string" },
            origin_id_info: { kind: "string", nullable: true },
            delivery_dt: { kind: "string" },
          },
          required: [],
        },
      },
      total: { kind: "number", integer: true },
    },
    required: [],
  },
  communicationsComponents,
);

export function parseGetV1ClaimsResponse(
  status: number,
  input: unknown,
): GetV1ClaimsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1ClaimsResponse200Schema,
        input,
        "getV1Claims",
      );
    default:
      return unexpectedWbSuccessStatus("getV1Claims", status);
  }
}
