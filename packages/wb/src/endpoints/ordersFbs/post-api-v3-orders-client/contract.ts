// Generated runtime response contract for this Wildberries endpoint.
import { ordersFbsComponents } from "../../../contracts/ordersFbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostApiV3OrdersClientResponse } from "./types.js";

const postApiV3OrdersClientResponse200Schema =
  createWbSchema<PostApiV3OrdersClientResponse>(
    { kind: "ref", name: "CrossborderTurkeyClientInfoResp" },
    ordersFbsComponents,
  );

export function parsePostApiV3OrdersClientResponse(
  status: number,
  input: unknown,
): PostApiV3OrdersClientResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postApiV3OrdersClientResponse200Schema,
        input,
        "POST /api/v3/orders/client",
      );
    default:
      return unexpectedWbSuccessStatus("POST /api/v3/orders/client", status);
  }
}
