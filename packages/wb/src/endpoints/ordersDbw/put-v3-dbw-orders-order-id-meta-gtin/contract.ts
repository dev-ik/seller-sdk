// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PutV3DbwOrdersOrderIdMetaGtinResponse } from "./types.js";

export function parsePutV3DbwOrdersOrderIdMetaGtinResponse(
  status: number,
  input: unknown,
): PutV3DbwOrdersOrderIdMetaGtinResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("putV3DbwOrdersOrderIdMetaGtin", status);
  }
}
