// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbwComponents } from "../../../contracts/ordersFbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1SuppliesIdPackageResponse } from "./types.js";

const getV1SuppliesIdPackageResponse200Schema =
  createWbSchema<GetV1SuppliesIdPackageResponse>(
    { kind: "array", items: { kind: "ref", name: "models.Box" } },
    ordersFbwComponents,
  );

export function parseGetV1SuppliesIdPackageResponse(
  status: number,
  input: unknown,
): GetV1SuppliesIdPackageResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1SuppliesIdPackageResponse200Schema,
        input,
        "getV1SuppliesIdPackage",
      );
    default:
      return unexpectedWbSuccessStatus("getV1SuppliesIdPackage", status);
  }
}
