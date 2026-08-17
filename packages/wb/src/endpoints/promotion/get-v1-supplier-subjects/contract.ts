// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1SupplierSubjectsResponse } from "./types.js";

const getV1SupplierSubjectsResponse200Schema =
  createWbSchema<GetV1SupplierSubjectsResponse>(
    {
      kind: "array",
      items: {
        kind: "object",
        properties: {
          id: { kind: "number", integer: true },
          name: { kind: "string" },
          count: { kind: "number", integer: true },
        },
        required: [],
      },
      nullable: true,
    },
    promotionComponents,
  );

export function parseGetV1SupplierSubjectsResponse(
  status: number,
  input: unknown,
): GetV1SupplierSubjectsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1SupplierSubjectsResponse200Schema,
        input,
        "getV1SupplierSubjects",
      );
    default:
      return unexpectedWbSuccessStatus("getV1SupplierSubjects", status);
  }
}
