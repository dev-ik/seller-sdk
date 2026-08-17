// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersMetaCustomsDeclarationResponse } from "./types.js";

const postV3DbsOrdersMetaCustomsDeclarationResponse200Schema =
  createWbSchema<PostV3DbsOrdersMetaCustomsDeclarationResponse>(
    { kind: "ref", name: "api.StatusSetResponses" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersMetaCustomsDeclarationResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersMetaCustomsDeclarationResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersMetaCustomsDeclarationResponse200Schema,
        input,
        "postV3DbsOrdersMetaCustomsDeclaration",
      );
    default:
      return unexpectedWbSuccessStatus(
        "postV3DbsOrdersMetaCustomsDeclaration",
        status,
      );
  }
}
