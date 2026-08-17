// Generated runtime response contract for this Wildberries endpoint.
import { itemsComponents } from "../../../contracts/items.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetApiV2HistoryTasksResponse } from "./types.js";

const getApiV2HistoryTasksResponse200Schema =
  createWbSchema<GetApiV2HistoryTasksResponse>(
    {
      kind: "object",
      properties: {
        data: { kind: "ref", name: "SellerTaskMetadata" },
        error: { kind: "boolean" },
        errorText: { kind: "string" },
      },
      required: [],
    },
    itemsComponents,
  );

export function parseGetApiV2HistoryTasksResponse(
  status: number,
  input: unknown,
): GetApiV2HistoryTasksResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getApiV2HistoryTasksResponse200Schema,
        input,
        "GET /api/v2/history/tasks",
      );
    default:
      return unexpectedWbSuccessStatus("GET /api/v2/history/tasks", status);
  }
}
