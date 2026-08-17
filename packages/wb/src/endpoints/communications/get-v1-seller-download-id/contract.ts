// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbBinaryResponse,
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1SellerDownloadIdResponse } from "./types.js";

const getV1SellerDownloadIdResponse202Schema =
  createWbSchema<GetV1SellerDownloadIdResponse>(
    {
      kind: "object",
      properties: {
        moderationState: { kind: "string" },
        retrySeconds: { kind: "number", integer: true },
      },
      required: ["moderationState", "retrySeconds"],
    },
    communicationsComponents,
  );

export function parseGetV1SellerDownloadIdResponse(
  status: number,
  input: unknown,
): GetV1SellerDownloadIdResponse {
  switch (status) {
    case 200:
      return parseWbBinaryResponse(input, "getV1SellerDownloadId");
    case 202:
      return parseWbResponse(
        getV1SellerDownloadIdResponse202Schema,
        input,
        "getV1SellerDownloadId",
      );
    default:
      return unexpectedWbSuccessStatus("getV1SellerDownloadId", status);
  }
}
