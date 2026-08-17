// Generated runtime response contract for this Wildberries endpoint.
import { financesComponents } from "../../../contracts/finances.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1DocumentsListResponse } from "./types.js";

const getV1DocumentsListResponse200Schema =
  createWbSchema<GetV1DocumentsListResponse>(
    { kind: "ref", name: "GetList" },
    financesComponents,
  );

export function parseGetV1DocumentsListResponse(
  status: number,
  input: unknown,
): GetV1DocumentsListResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1DocumentsListResponse200Schema,
        input,
        "getV1DocumentsList",
      );
    default:
      return unexpectedWbSuccessStatus("getV1DocumentsList", status);
  }
}
