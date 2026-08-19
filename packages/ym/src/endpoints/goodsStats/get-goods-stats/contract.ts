// Generated runtime response contract for this Yandex Market endpoint.
import { goodsStatsComponents } from "../../../contracts/goodsStats.generated.js";
import {
  parseYmResponse,
  unexpectedYmSuccessStatus,
} from "../../../parse-response.js";
import { createYmSchema } from "../../../schema.js";
import type { GetGoodsStatsResponse } from "./types.js";

const getGoodsStatsResponse200Schema = createYmSchema<GetGoodsStatsResponse>(
  { kind: "ref", name: "GetGoodsStatsResponse" },
  goodsStatsComponents,
);

export function parseGetGoodsStatsResponse(
  status: number,
  input: unknown,
): GetGoodsStatsResponse {
  switch (status) {
    case 200:
      return parseYmResponse(
        getGoodsStatsResponse200Schema,
        input,
        "getGoodsStats",
      );
    default:
      return unexpectedYmSuccessStatus("getGoodsStats", status);
  }
}
