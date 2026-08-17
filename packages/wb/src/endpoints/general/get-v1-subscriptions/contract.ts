// Generated runtime response contract for this Wildberries endpoint.
import { generalComponents } from "../../../contracts/general.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1SubscriptionsResponse } from "./types.js";

const getV1SubscriptionsResponse200Schema =
  createWbSchema<GetV1SubscriptionsResponse>(
    { kind: "ref", name: "SubscriptionsJamInfo" },
    generalComponents,
  );

export function parseGetV1SubscriptionsResponse(
  status: number,
  input: unknown,
): GetV1SubscriptionsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1SubscriptionsResponse200Schema,
        input,
        "getV1Subscriptions",
      );
    default:
      return unexpectedWbSuccessStatus("getV1Subscriptions", status);
  }
}
