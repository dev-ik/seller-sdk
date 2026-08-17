// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PutV1UsersAccessResponse } from "./types.js";

export function parsePutV1UsersAccessResponse(
  status: number,
  input: unknown,
): PutV1UsersAccessResponse {
  void input;
  switch (status) {
    case 200:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("putV1UsersAccess", status);
  }
}
