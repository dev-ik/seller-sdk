// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1ConfigResponse } from "./types.js";

const getV1ConfigResponse200Schema = createWbSchema<GetV1ConfigResponse>(
  { kind: "ref", name: "V2GetConfigResponse" },
  promotionComponents,
);

export function parseGetV1ConfigResponse(
  status: number,
  input: unknown,
): GetV1ConfigResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1ConfigResponse200Schema,
        input,
        "getV1Config",
      );
    default:
      return unexpectedWbSuccessStatus("getV1Config", status);
  }
}
