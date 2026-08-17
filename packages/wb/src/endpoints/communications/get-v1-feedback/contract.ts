// Generated runtime response contract for this Wildberries endpoint.
import { communicationsComponents } from "../../../contracts/communications.generated.js";
import {
  parseWbResponse,
  unexpectedWbSuccessStatus,
} from "../../../parse-response.js";
import { createWbSchema } from "../../../schema.js";
import type { GetV1FeedbackResponse } from "./types.js";

const getV1FeedbackResponse200Schema = createWbSchema<GetV1FeedbackResponse>(
  {
    kind: "object",
    properties: {
      data: {
        kind: "object",
        properties: {
          id: { kind: "string" },
          text: { kind: "string" },
          pros: { kind: "string" },
          cons: { kind: "string" },
          matchingSize: { kind: "string" },
          productValuation: { kind: "number", integer: true },
          createdDate: { kind: "string" },
          answer: {
            kind: "object",
            properties: {
              text: { kind: "string" },
              state: { kind: "string" },
              editable: { kind: "boolean" },
            },
            required: [],
            nullable: true,
          },
          state: { kind: "string" },
          productDetails: {
            kind: "object",
            properties: {
              nmId: { kind: "number", integer: true },
              imtId: { kind: "number", integer: true },
              productName: { kind: "string" },
              supplierArticle: { kind: "string", nullable: true },
              supplierName: { kind: "string", nullable: true },
              brandName: { kind: "string", nullable: true },
              size: { kind: "string" },
            },
            required: [],
          },
          photoLinks: {
            kind: "array",
            items: {
              kind: "object",
              properties: {
                fullSize: { kind: "string" },
                miniSize: { kind: "string" },
              },
              required: [],
            },
            nullable: true,
          },
          userName: { kind: "string" },
          orderStatus: { kind: "string" },
          video: {
            kind: "object",
            properties: {
              previewImage: { kind: "string" },
              link: { kind: "string" },
              durationSec: { kind: "number", integer: true },
            },
            required: [],
            nullable: true,
          },
          wasViewed: { kind: "boolean" },
          isAbleSupplierFeedbackValuation: { kind: "boolean" },
          supplierFeedbackValuation: { kind: "number", integer: true },
          isAbleSupplierProductValuation: { kind: "boolean" },
          supplierProductValuation: { kind: "number", integer: true },
          isAbleReturnProductOrders: { kind: "boolean" },
          returnProductOrdersDate: { kind: "string", nullable: true },
          bables: { kind: "array", items: { kind: "string" }, nullable: true },
          lastOrderShkId: { kind: "number", integer: true },
          lastOrderCreatedAt: { kind: "string" },
          color: { kind: "string" },
          subjectId: { kind: "number", integer: true },
          subjectName: { kind: "string" },
          parentFeedbackId: { kind: "string", nullable: true },
          childFeedbackId: { kind: "string", nullable: true },
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

export function parseGetV1FeedbackResponse(
  status: number,
  input: unknown,
): GetV1FeedbackResponse {
  switch (status) {
    case 200:
      return parseWbResponse(
        getV1FeedbackResponse200Schema,
        input,
        "getV1Feedback",
      );
    default:
      return unexpectedWbSuccessStatus("getV1Feedback", status);
  }
}
