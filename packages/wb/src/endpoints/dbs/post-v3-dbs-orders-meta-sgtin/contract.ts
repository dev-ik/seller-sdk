// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersMetaSgtinResponse } from "./types.js";

const postV3DbsOrdersMetaSgtinResponse200Schema =
  createWbSchema<PostV3DbsOrdersMetaSgtinResponse>(
    { kind: "ref", name: "api.StatusSetResponses" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersMetaSgtinResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersMetaSgtinResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersMetaSgtinResponse200Schema,
        input,
        "postV3DbsOrdersMetaSgtin",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersMetaSgtin", status);
  }
}
