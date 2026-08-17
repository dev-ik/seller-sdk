// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbwComponents } from "../../../contracts/ordersFbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV1AcceptanceOptionsResponse } from "./types.js";

const postV1AcceptanceOptionsResponse200Schema =
  createWbSchema<PostV1AcceptanceOptionsResponse>(
    { kind: "ref", name: "models.OptionsResultModel" },
    ordersFbwComponents,
  );

export function parsePostV1AcceptanceOptionsResponse(
  status: number,
  input: unknown,
): PostV1AcceptanceOptionsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV1AcceptanceOptionsResponse200Schema,
        input,
        "postV1AcceptanceOptions",
      );
    default:
      return unexpectedWbSuccessStatus("postV1AcceptanceOptions", status);
  }
}
