// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV2BufferTasksResponse } from "./types.js";

const getApiV2BufferTasksResponse200Schema =
  createWbSchema<GetApiV2BufferTasksResponse>(
    {
      kind: "object",
      properties: {
        data: { kind: "ref", name: "SellerTaskMetadataBuffer" },
        error: { kind: "boolean" },
        errorText: { kind: "string" },
      },
      required: [],
    },
    itemsComponents,
  );

export function parseGetApiV2BufferTasksResponse(
  status: number,
  input: unknown,
): GetApiV2BufferTasksResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV2BufferTasksResponse200Schema,
        input,
        "GET /api/v2/buffer/tasks",
      );
    default:
      return unexpectedWbSuccessStatus("GET /api/v2/buffer/tasks", status);
  }
}
