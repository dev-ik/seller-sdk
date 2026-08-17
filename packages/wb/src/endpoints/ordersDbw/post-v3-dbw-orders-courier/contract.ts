// Generated runtime response contract for this Wildberries endpoint.
import { ordersDbwComponents } from "../../../contracts/ordersDbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbwOrdersCourierResponse } from "./types.js";

const postV3DbwOrdersCourierResponse200Schema =
  createWbSchema<PostV3DbwOrdersCourierResponse>(
    { kind: "ref", name: "OrderCourierInfoResp" },
    ordersDbwComponents,
  );

export function parsePostV3DbwOrdersCourierResponse(
  status: number,
  input: unknown,
): PostV3DbwOrdersCourierResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbwOrdersCourierResponse200Schema,
        input,
        "postV3DbwOrdersCourier",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbwOrdersCourier", status);
  }
}
