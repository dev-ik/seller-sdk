// Generated runtime response contract for this Wildberries endpoint.
import { generalComponents } from "../../../contracts/general.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1UsersResponse } from "./types.js";

const getV1UsersResponse200Schema = createWbSchema<GetV1UsersResponse>(
  { kind: "ref", name: "getUsersResponse" },
  generalComponents,
);

export function parseGetV1UsersResponse(
  status: number,
  input: unknown,
): GetV1UsersResponse {
  switch (status) {
    case 200:
      return parseWbResponse(getV1UsersResponse200Schema, input, "getV1Users");
    default:
      return unexpectedWbSuccessStatus("getV1Users", status);
  }
}
