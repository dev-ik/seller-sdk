// Generated runtime response contract for this Wildberries endpoint.
import { financesComponents } from "../../../contracts/finances.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1DocumentsCategoriesResponse } from "./types.js";

const getV1DocumentsCategoriesResponse200Schema =
  createWbSchema<GetV1DocumentsCategoriesResponse>(
    { kind: "ref", name: "GetCategories" },
    financesComponents,
  );

export function parseGetV1DocumentsCategoriesResponse(
  status: number,
  input: unknown,
): GetV1DocumentsCategoriesResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1DocumentsCategoriesResponse200Schema,
        input,
        "getV1DocumentsCategories",
      );
    default:
      return unexpectedWbSuccessStatus("getV1DocumentsCategories", status);
  }
}
