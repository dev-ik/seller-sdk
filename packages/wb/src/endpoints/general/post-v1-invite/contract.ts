// Generated runtime response contract for this Wildberries endpoint.
import { generalComponents } from "../../../contracts/general.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1InviteResponse } from "./types.js";

const postV1InviteResponse200Schema = createWbSchema<PostV1InviteResponse>(
  { kind: "ref", name: "createInviteResponse" },
  generalComponents,
);

export function parsePostV1InviteResponse(
  status: number,
  input: unknown,
): PostV1InviteResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1InviteResponse200Schema,
        input,
        "postV1Invite",
      );
    default:
      return unexpectedWbSuccessStatus("postV1Invite", status);
  }
}
