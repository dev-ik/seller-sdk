// Generated runtime response contract for this Wildberries endpoint.
import { ordersDbwComponents } from "../../../contracts/ordersDbw.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbwOrdersDeliveryDateResponse } from "./types.js";

const postV3DbwOrdersDeliveryDateResponse200Schema =
  createWbSchema<PostV3DbwOrdersDeliveryDateResponse>(
    { kind: "ref", name: "DeliveryDatesInfoResp" },
    ordersDbwComponents,
  );

export function parsePostV3DbwOrdersDeliveryDateResponse(
  status: number,
  input: unknown,
): PostV3DbwOrdersDeliveryDateResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbwOrdersDeliveryDateResponse200Schema,
        input,
        "postV3DbwOrdersDeliveryDate",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbwOrdersDeliveryDate", status);
  }
}
