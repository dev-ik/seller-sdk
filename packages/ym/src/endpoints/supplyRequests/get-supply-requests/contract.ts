// Generated runtime response contract for this Yandex Market endpoint.
import { supplyRequestsComponents } from "../../../contracts/supplyRequests.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetSupplyRequestsResponse } from "./types.js";

const getSupplyRequestsResponse200Schema =
  createYmSchema<GetSupplyRequestsResponse>(
    { kind: "ref", name: "GetSupplyRequestsResponse" },
    supplyRequestsComponents,
  );

export function parseGetSupplyRequestsResponse(
  status: number,
  input: unknown,
): GetSupplyRequestsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getSupplyRequestsResponse200Schema,
        input,
        "getSupplyRequests",
      );
    default:
      return unexpectedYmSuccessStatus("getSupplyRequests", status);
  }
}
