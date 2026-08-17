// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PutV3DbwOrdersOrderIdMetaUinResponse } from "./types.js";

export function parsePutV3DbwOrdersOrderIdMetaUinResponse(
  status: number,
  input: unknown,
): PutV3DbwOrdersOrderIdMetaUinResponse {
  void input;
  switch (status) {
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("putV3DbwOrdersOrderIdMetaUin", status);
  }
}
