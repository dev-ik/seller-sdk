// Generated runtime response contract for this Yandex Market endpoint.
import { regionsComponents } from "../../../contracts/regions.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetRegionsCodesResponse } from "./types.js";

const getRegionsCodesResponse200Schema =
  createYmSchema<GetRegionsCodesResponse>(
    { kind: "ref", name: "GetRegionsCodesResponse" },
    regionsComponents,
  );

export function parseGetRegionsCodesResponse(
  status: number,
  input: unknown,
): GetRegionsCodesResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getRegionsCodesResponse200Schema,
        input,
        "getRegionsCodes",
      );
    default:
      return unexpectedYmSuccessStatus("getRegionsCodes", status);
  }
}
