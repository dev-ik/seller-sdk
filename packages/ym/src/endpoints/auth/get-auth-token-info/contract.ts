// Generated runtime response contract for this Yandex Market endpoint.
import { authComponents } from "../../../contracts/auth.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetAuthTokenInfoResponse } from "./types.js";

const getAuthTokenInfoResponse200Schema =
  createYmSchema<GetAuthTokenInfoResponse>(
    { kind: "ref", name: "GetTokenInfoResponse" },
    authComponents,
  );

export function parseGetAuthTokenInfoResponse(
  status: number,
  input: unknown,
): GetAuthTokenInfoResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getAuthTokenInfoResponse200Schema,
        input,
        "getAuthTokenInfo",
      );
    default:
      return unexpectedYmSuccessStatus("getAuthTokenInfo", status);
  }
}
