// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersMetaImeiResponse } from "./types.js";

const postV3DbsOrdersMetaImeiResponse200Schema =
  createWbSchema<PostV3DbsOrdersMetaImeiResponse>(
    { kind: "ref", name: "api.StatusSetResponses" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersMetaImeiResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersMetaImeiResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersMetaImeiResponse200Schema,
        input,
        "postV3DbsOrdersMetaImei",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersMetaImei", status);
  }
}
