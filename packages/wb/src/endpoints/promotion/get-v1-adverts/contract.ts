// Generated runtime response contract for this Wildberries endpoint.
import { promotionComponents } from "../../../contracts/promotion.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1AdvertsResponse } from "./types.js";

const getV1AdvertsResponse200Schema = createWbSchema<GetV1AdvertsResponse>(
  {
    kind: "array",
    items: {
      kind: "object",
      properties: {
        advertId: { kind: "number", integer: true },
        name: { kind: "string" },
        brand: { kind: "string" },
        type: { kind: "number", integer: true },
        status: { kind: "number", integer: true },
        createTime: { kind: "string" },
        endTime: { kind: "string" },
      },
      required: [],
    },
  },
  promotionComponents,
);

export function parseGetV1AdvertsResponse(
  status: number,
  input: unknown,
): GetV1AdvertsResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1AdvertsResponse200Schema,
        input,
        "getV1Adverts",
      );
    case 204:
      return undefined;
    default:
      return unexpectedWbSuccessStatus("getV1Adverts", status);
  }
}
