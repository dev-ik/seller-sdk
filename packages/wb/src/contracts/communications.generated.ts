// Generated runtime schemas for this Wildberries API domain.
import type { WbSchemaComponents } from "../schema.js";

export const communicationsComponents: WbSchemaComponents = {
  standardizedFQError: {
    kind: "object",
    properties: {
      title: { kind: "string" },
      requestId: { kind: "string" },
      origin: { kind: "string" },
      detail: { kind: "string" },
    },
    required: [],
  },
  responseFeedbackQuestionErr: {
    kind: "object",
    properties: {
      data: { kind: "object", properties: {}, required: [], nullable: true },
      error: { kind: "boolean" },
      errorText: { kind: "string" },
      additionalErrors: {
        kind: "array",
        items: { kind: "string" },
        nullable: true,
      },
      requestId: { kind: "string" },
    },
    required: [],
  },
  responseFeedback: {
    kind: "array",
    items: {
      kind: "object",
      properties: {
        id: { kind: "string" },
        text: { kind: "string" },
        pros: { kind: "string" },
        cons: { kind: "string" },
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
        userName: { kind: "string" },
        orderStatus: { kind: "string" },
        matchingSize: { kind: "string" },
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
  },
  Chat: {
    kind: "object",
    properties: {
      chatID: { kind: "string" },
      replySign: { kind: "string" },
      clientName: { kind: "string" },
      goodCard: { kind: "ref", name: "Listing" },
      lastMessage: {
        kind: "object",
        properties: {
          text: { kind: "string" },
          addTimestamp: { kind: "number", integer: true },
        },
        required: [],
      },
    },
    required: [],
  },
  ChatsResponse: {
    kind: "object",
    properties: {
      result: { kind: "array", items: { kind: "ref", name: "Chat" } },
      errors: { kind: "array", items: { kind: "string" }, nullable: true },
    },
    required: [],
  },
  Event: {
    kind: "object",
    properties: {
      chatID: { kind: "string" },
      eventID: { kind: "string" },
      eventType: { kind: "ref", name: "EventType" },
      isNewChat: { kind: "boolean" },
      message: {
        kind: "object",
        properties: {
          attachments: { kind: "ref", name: "EventAttachments" },
          text: { kind: "string" },
        },
        required: [],
      },
      source: { kind: "string" },
      addTimestamp: { kind: "number", integer: true },
      addTime: { kind: "string" },
      replySign: { kind: "string" },
      sender: { kind: "ref", name: "Sender" },
      clientName: { kind: "string" },
    },
    required: [],
  },
  EventAttachments: {
    kind: "object",
    properties: {
      goodCard: { kind: "ref", name: "Listing" },
      files: { kind: "array", items: { kind: "ref", name: "File" } },
      images: { kind: "array", items: { kind: "ref", name: "Image" } },
    },
    required: [],
  },
  EventType: { kind: "string", enum: ["message"] },
  File: {
    kind: "object",
    properties: {
      contentType: { kind: "string" },
      date: { kind: "string" },
      downloadID: { kind: "string" },
      name: { kind: "string" },
      url: { kind: "string" },
      size: { kind: "number", integer: true },
    },
    required: [],
  },
  Listing: {
    kind: "object",
    properties: {
      nmID: { kind: "number", integer: true },
      price: { kind: "number", integer: true },
      priceCurrency: { kind: "string" },
      rid: { kind: "string" },
      size: { kind: "string" },
    },
    required: [],
  },
  LastMessage: {
    kind: "object",
    properties: {
      text: { kind: "string" },
      addTimestamp: { kind: "number", integer: true },
    },
    required: [],
  },
  Image: {
    kind: "object",
    properties: {
      date: { kind: "string" },
      downloadID: { kind: "string" },
      url: { kind: "string" },
    },
    required: [],
  },
  MessageResponse: {
    kind: "object",
    properties: {
      errors: { kind: "array", items: { kind: "string" } },
      result: {
        kind: "object",
        properties: {
          addTime: { kind: "number", integer: true },
          chatID: { kind: "string" },
          sign: { kind: "string" },
        },
        required: [],
      },
    },
    required: [],
  },
  Sender: { kind: "string", enum: ["client", "seller", "wb"] },
  EventsResponse: {
    kind: "object",
    properties: {
      result: { kind: "ref", name: "EventsResult" },
      errors: { kind: "array", items: { kind: "string" }, nullable: true },
    },
    required: [],
  },
  EventsResult: {
    kind: "object",
    properties: {
      next: { kind: "number", integer: true },
      newestEventTime: { kind: "string" },
      oldestEventTime: { kind: "string" },
      totalEvents: { kind: "number", integer: true },
      events: { kind: "array", items: { kind: "ref", name: "Event" } },
    },
    required: [],
  },
  "domain.ReviewPinMethod": {
    kind: "string",
    enum: ["subscription", "tariff"],
  },
  "domain.ReviewPinOn": { kind: "string", enum: ["imt", "nm"] },
  "domain.ReviewState": { kind: "string", enum: ["pinned", "unpinned"] },
  "openapi.PinReviewItem": {
    kind: "object",
    properties: {
      pinMethod: { kind: "string", enum: ["tariff", "subscription"] },
      pinOn: { kind: "string", enum: ["nm", "imt"] },
      feedbackId: { kind: "string" },
    },
    required: ["pinMethod", "pinOn", "feedbackId"],
  },
  "openapi.PinReviewItemResult": {
    kind: "object",
    properties: {
      data: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            feedbackId: { kind: "string" },
            pinId: { kind: "number", integer: true },
            pinMethod: { kind: "string", enum: ["tariff", "subscription"] },
            pinOn: { kind: "string", enum: ["nm", "imt"] },
            isErrors: { kind: "boolean" },
            errors: {
              kind: "array",
              items: { kind: "ref", name: "openapi.ResultErr" },
            },
          },
          required: ["feedbackId", "isErrors", "pinMethod", "pinOn"],
        },
      },
    },
    required: [],
  },
  "openapi.PinnedReviewItemResult": {
    kind: "object",
    properties: {
      changeStateAt: { kind: "string" },
      imtId: { kind: "number", integer: true },
      nmId: { kind: "number", integer: true },
      pinId: { kind: "number", integer: true },
      pinMethod: { kind: "string", enum: ["subscription", "tariff"] },
      pinOn: { kind: "string", enum: ["imt", "nm"] },
      feedbackId: { kind: "string" },
      state: { kind: "string", enum: ["pinned", "unpinned"] },
      unpinnedCause: {
        kind: "string",
        enum: [
          "sysTariffUnpinned",
          "sysLimitReached",
          "sysNoratingUnpinned",
          "sysAdditionalSlot",
        ],
      },
    },
    required: [
      "changeStateAt",
      "feedbackId",
      "imtId",
      "nmId",
      "pinId",
      "pinMethod",
      "pinOn",
      "state",
    ],
  },
  "openapi.ResultErr": {
    kind: "object",
    properties: {
      origin: { kind: "string" },
      detail: { kind: "string" },
      requestId: { kind: "string" },
      status: {
        kind: "string",
        enum: [
          "feedbackNotFound",
          "itemNotFound",
          "feedbackMismatch",
          "itemNoImages",
          "feedbackExcluded",
          "imtNotDisplayed",
          "globalLimitReached",
          "unitLimitReached",
          "tariffRestriction",
          "subscriptionRestriction",
          "alreadyPinned",
          "bodyNotValid",
        ],
      },
      title: { kind: "string" },
    },
    required: ["origin", "requestId", "status", "title"],
  },
  "openapi.SellerLimit": {
    kind: "object",
    properties: {
      perUnitLimit: { kind: "number", integer: true },
      remaining: { kind: "number", integer: true },
      totalLimit: { kind: "number", integer: true },
      unlimited: { kind: "boolean" },
      used: { kind: "number", integer: true },
    },
    required: ["perUnitLimit", "remaining", "totalLimit", "unlimited", "used"],
  },
  "openapi.SellerLimitsResponse": {
    kind: "object",
    properties: {
      data: {
        kind: "object",
        properties: {
          subscription: {
            kind: "object",
            properties: {
              perUnitLimit: { kind: "number", integer: true },
              remaining: { kind: "number", integer: true },
              totalLimit: { kind: "number", integer: true },
              unlimited: { kind: "boolean" },
              used: { kind: "number", integer: true },
            },
            required: [
              "perUnitLimit",
              "remaining",
              "totalLimit",
              "unlimited",
              "used",
            ],
            nullable: true,
          },
          tariff: {
            kind: "object",
            properties: {
              perUnitLimit: { kind: "number", integer: true },
              remaining: { kind: "number", integer: true },
              totalLimit: { kind: "number", integer: true },
              unlimited: { kind: "boolean" },
              used: { kind: "number", integer: true },
            },
            required: [
              "perUnitLimit",
              "remaining",
              "totalLimit",
              "unlimited",
              "used",
            ],
            nullable: true,
          },
        },
        required: [],
      },
    },
    required: [],
  },
  "respond.ResultErr": {
    kind: "object",
    properties: {
      detail: { kind: "string" },
      origin: { kind: "string" },
      requestId: { kind: "string" },
      status: { kind: "number", integer: true },
      title: { kind: "string" },
    },
    required: ["origin", "requestId", "status", "title"],
  },
  "respond.SuccessResponse": {
    kind: "object",
    properties: { data: { kind: "object", properties: {}, required: [] } },
    required: ["data"],
  },
};
