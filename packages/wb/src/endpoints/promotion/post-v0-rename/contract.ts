// Generated runtime response contract for this Wildberries endpoint.
import { unexpectedWbSuccessStatus } from "../../../parse-response.js";
import type { PostV0RenameResponse } from "./types.js";

export function parsePostV0RenameResponse(
  status: number,
  input: unknown,
): PostV0RenameResponse {
  void input;
  switch (status) {
    case 200:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("postV0Rename", status);
  }
}
