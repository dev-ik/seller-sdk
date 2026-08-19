// Generated runtime response contract for this Yandex Market endpoint.
import { supplyRequestsComponents } from "../../../contracts/supplyRequests.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetSupplyRequestDocumentsResponse } from "./types.js";

const getSupplyRequestDocumentsResponse200Schema =
  createYmSchema<GetSupplyRequestDocumentsResponse>(
    { kind: "ref", name: "GetSupplyRequestDocumentsResponse" },
    supplyRequestsComponents,
  );

export function parseGetSupplyRequestDocumentsResponse(
  status: number,
  input: unknown,
): GetSupplyRequestDocumentsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getSupplyRequestDocumentsResponse200Schema,
        input,
        "getSupplyRequestDocuments",
      );
    default:
      return unexpectedYmSuccessStatus("getSupplyRequestDocuments", status);
  }
}
