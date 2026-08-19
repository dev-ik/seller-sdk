// Generated runtime response contract for this Yandex Market endpoint.
import { businessesComponents } from "../../../contracts/businesses.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetBusinessSettingsResponse } from "./types.js";

const getBusinessSettingsResponse200Schema =
  createYmSchema<GetBusinessSettingsResponse>(
    { kind: "ref", name: "GetBusinessSettingsResponse" },
    businessesComponents,
  );

export function parseGetBusinessSettingsResponse(
  status: number,
  input: unknown,
): GetBusinessSettingsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getBusinessSettingsResponse200Schema,
        input,
        "getBusinessSettings",
      );
    default:
      return unexpectedYmSuccessStatus("getBusinessSettings", status);
  }
}
