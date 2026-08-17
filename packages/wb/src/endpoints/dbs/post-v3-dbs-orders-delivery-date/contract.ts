// Generated runtime response contract for this Wildberries endpoint.
import { dbsComponents } from "../../../contracts/dbs.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { PostV3DbsOrdersDeliveryDateResponse } from "./types.js";

const postV3DbsOrdersDeliveryDateResponse200Schema =
  createWbSchema<PostV3DbsOrdersDeliveryDateResponse>(
    { kind: "ref", name: "DeliveryDatesInfoResp" },
    dbsComponents,
  );

export function parsePostV3DbsOrdersDeliveryDateResponse(
  status: number,
  input: unknown,
): PostV3DbsOrdersDeliveryDateResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        postV3DbsOrdersDeliveryDateResponse200Schema,
        input,
        "postV3DbsOrdersDeliveryDate",
      );
    default:
      return unexpectedWbSuccessStatus("postV3DbsOrdersDeliveryDate", status);
  }
}
