// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV0NormqueryGetMinusResponse } from "./types.js";

const postV0NormqueryGetMinusResponse200Schema =
  createWbSchema<PostV0NormqueryGetMinusResponse>(
    { kind: "ref", name: "V0GetNormQueryMinusResponse" },
    promotionComponents,
  );

export function parsePostV0NormqueryGetMinusResponse(
  status: number,
  input: unknown,
): PostV0NormqueryGetMinusResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV0NormqueryGetMinusResponse200Schema,
        input,
        "postV0NormqueryGetMinus",
      );
    default:
      return unexpectedWbSuccessStatus("postV0NormqueryGetMinus", status);
  }
}
