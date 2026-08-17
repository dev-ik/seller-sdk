// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PutV3DbwOrdersOrderIdMetaImeiResponse } from "./types.js";

export function parsePutV3DbwOrdersOrderIdMetaImeiResponse(
  status: number,
  input: unknown,
): PutV3DbwOrdersOrderIdMetaImeiResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("putV3DbwOrdersOrderIdMetaImei", status);
  }
}
