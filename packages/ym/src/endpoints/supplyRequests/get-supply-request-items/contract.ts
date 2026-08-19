// Generated runtime response contract for this Yandex Market endpoint.
import { supplyRequestsComponents } from "../../../contracts/supplyRequests.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetSupplyRequestItemsResponse } from "./types.js";

const getSupplyRequestItemsResponse200Schema =
  createYmSchema<GetSupplyRequestItemsResponse>(
    { kind: "ref", name: "GetSupplyRequestItemsResponse" },
    supplyRequestsComponents,
  );

export function parseGetSupplyRequestItemsResponse(
  status: number,
  input: unknown,
): GetSupplyRequestItemsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getSupplyRequestItemsResponse200Schema,
        input,
        "getSupplyRequestItems",
      );
    default:
      return unexpectedYmSuccessStatus("getSupplyRequestItems", status);
  }
}
