// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbwComponents } from "../../../contracts/ordersFbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1SuppliesIdGoodsResponse } from "./types.js";

const getV1SuppliesIdGoodsResponse200Schema =
  createWbSchema<GetV1SuppliesIdGoodsResponse>(
    { kind: "array", items: { kind: "ref", name: "models.GoodInSupply" } },
    ordersFbwComponents,
  );

export function parseGetV1SuppliesIdGoodsResponse(
  status: number,
  input: unknown,
): GetV1SuppliesIdGoodsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1SuppliesIdGoodsResponse200Schema,
        input,
        "getV1SuppliesIdGoods",
      );
    default:
      return unexpectedWbSuccessStatus("getV1SuppliesIdGoods", status);
  }
}
