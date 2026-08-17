// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1QuestionResponse } from "./types.js";

const getV1QuestionResponse200Schema = createWbSchema<GetV1QuestionResponse>(
  {
    kind: "object",
    properties: {
      data: {
        kind: "object",
        properties: {
          id: { kind: "string" },
          text: { kind: "string" },
          createdDate: { kind: "string" },
          state: { kind: "string" },
          answer: {
            kind: "object",
            properties: {
              text: { kind: "string" },
              editable: { kind: "boolean" },
              createDate: { kind: "string" },
            },
            required: [],
            nullable: true,
          },
          productDetails: {
            kind: "object",
            properties: {
              nmId: { kind: "number", integer: true },
              imtId: { kind: "number", integer: true },
              productName: { kind: "string" },
              supplierArticle: { kind: "string" },
              supplierName: { kind: "string" },
              brandName: { kind: "string" },
            },
            required: [],
          },
          wasViewed: { kind: "boolean" },
          isWarned: { kind: "boolean" },
        },
        required: [],
      },
      error: { kind: "boolean" },
      errorText: { kind: "string" },
      additionalErrors: {
        kind: "array",
        items: { kind: "string" },
        nullable: true,
      },
    },
    required: [],
  },
  communicationsComponents,
);

export function parseGetV1QuestionResponse(
  status: number,
  input: unknown,
): GetV1QuestionResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1QuestionResponse200Schema,
        input,
        "getV1Question",
      );
    default:
      return unexpectedWbSuccessStatus("getV1Question", status);
  }
}
