// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const goodsFeedbackComponents: YmSchemaComponents = {
  ApiClientDataErrorResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "ApiErrorDTO" },
        nullable: true,
      },
    },
    required: ["status"],
  },
  ApiErrorDTO: {
    kind: "object",
    properties: { code: { kind: "string" }, message: { kind: "string" } },
    required: ["code"],
  },
  ApiErrorResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "ApiErrorDTO" },
        nullable: true,
      },
    },
    required: ["status"],
  },
  ApiForbiddenErrorResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "ApiErrorDTO" },
        nullable: true,
      },
    },
    required: ["status"],
  },
  ApiLimitErrorResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "ApiErrorDTO" },
        nullable: true,
      },
    },
    required: ["status"],
  },
  ApiNotFoundErrorResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "ApiErrorDTO" },
        nullable: true,
      },
    },
    required: ["status"],
  },
  ApiResponse: {
    kind: "object",
    properties: { status: { kind: "ref", name: "ApiResponseStatusType" } },
    required: ["status"],
  },
  ApiResponseStatusType: { kind: "string", enum: ["OK", "ERROR"] },
  ApiServerErrorResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "ApiErrorDTO" },
        nullable: true,
      },
    },
    required: ["status"],
  },
  ApiUnauthorizedErrorResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "ApiErrorDTO" },
        nullable: true,
      },
    },
    required: ["status"],
  },
  BusinessId: { kind: "number", integer: true, minimum: 1 },
  DeleteGoodsFeedbackCommentRequest: {
    kind: "object",
    properties: { id: { kind: "ref", name: "GoodsFeedbackCommentId" } },
    required: ["id"],
  },
  EmptyApiResponse: {
    kind: "object",
    properties: { status: { kind: "ref", name: "ApiResponseStatusType" } },
    required: ["status"],
  },
  FeedbackReactionStatusType: {
    kind: "string",
    enum: ["ALL", "NEED_REACTION"],
  },
  GetGoodsFeedbackCommentsRequest: {
    kind: "object",
    properties: {
      feedbackId: { kind: "ref", name: "GoodsFeedbackId" },
      commentIds: {
        kind: "array",
        items: { kind: "ref", name: "GoodsFeedbackCommentId" },
        nullable: true,
      },
    },
    required: [],
  },
  GetGoodsFeedbackCommentsResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GoodsFeedbackCommentListDTO" },
    },
    required: ["status"],
  },
  GetGoodsFeedbackRequest: {
    kind: "object",
    properties: {
      feedbackIds: {
        kind: "array",
        items: { kind: "ref", name: "GoodsFeedbackId" },
        nullable: true,
      },
      dateTimeFrom: { kind: "string" },
      dateTimeTo: { kind: "string" },
      reactionStatus: { kind: "ref", name: "FeedbackReactionStatusType" },
      ratingValues: {
        kind: "array",
        items: { kind: "number", integer: true },
        nullable: true,
      },
      offerIds: {
        kind: "array",
        items: { kind: "ref", name: "ShopSku" },
        nullable: true,
      },
      paid: { kind: "boolean" },
    },
    required: [],
  },
  GetGoodsFeedbackResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GoodsFeedbackListDTO" },
    },
    required: ["status"],
  },
  GetGoodsFeedbackUrbanadsRequest: {
    kind: "object",
    properties: {
      feedbackIds: {
        kind: "array",
        items: { kind: "ref", name: "GoodsFeedbackId" },
        nullable: true,
      },
      dateTimeFrom: { kind: "string" },
      dateTimeTo: { kind: "string" },
      reactionStatus: { kind: "ref", name: "FeedbackReactionStatusType" },
      ratingValues: {
        kind: "array",
        items: { kind: "number", integer: true },
        nullable: true,
      },
      paid: { kind: "boolean" },
    },
    required: [],
  },
  GetGoodsFeedbackUrbanadsResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GoodsFeedbackUrbanadsListDTO" },
    },
    required: ["status"],
  },
  GoodsFeedbackCommentAuthorDTO: {
    kind: "object",
    properties: {
      type: { kind: "ref", name: "GoodsFeedbackCommentAuthorType" },
      name: { kind: "string" },
    },
    required: [],
  },
  GoodsFeedbackCommentAuthorType: {
    kind: "string",
    enum: ["USER", "BUSINESS", "BRAND"],
  },
  GoodsFeedbackCommentDTO: {
    kind: "object",
    properties: {
      id: { kind: "ref", name: "GoodsFeedbackCommentId" },
      text: { kind: "ref", name: "GoodsFeedbackCommentText" },
      canModify: { kind: "boolean" },
      parentId: { kind: "number", integer: true },
      author: { kind: "ref", name: "GoodsFeedbackCommentAuthorDTO" },
      status: { kind: "ref", name: "GoodsFeedbackCommentStatusType" },
      feedbackId: { kind: "ref", name: "GoodsFeedbackId" },
    },
    required: ["id", "text", "status", "feedbackId"],
  },
  GoodsFeedbackCommentId: { kind: "number", integer: true },
  GoodsFeedbackCommentListDTO: {
    kind: "object",
    properties: {
      comments: {
        kind: "array",
        items: { kind: "ref", name: "GoodsFeedbackCommentDTO" },
      },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["comments"],
  },
  GoodsFeedbackCommentStatusType: {
    kind: "string",
    enum: ["PUBLISHED", "UNMODERATED", "BANNED", "DELETED"],
  },
  GoodsFeedbackCommentText: { kind: "string", minLength: 1, maxLength: 4096 },
  GoodsFeedbackContextUrbanadsDTO: {
    kind: "object",
    properties: {
      offerName: { kind: "string" },
      pictureUrl: { kind: "ref", name: "Url" },
      businessId: { kind: "ref", name: "BusinessId" },
      businessName: { kind: "string" },
      brandId: { kind: "string" },
      brandName: { kind: "string" },
    },
    required: [],
  },
  GoodsFeedbackDTO: {
    kind: "object",
    properties: {
      feedbackId: { kind: "ref", name: "GoodsFeedbackId" },
      createdAt: { kind: "string" },
      needReaction: { kind: "boolean" },
      identifiers: { kind: "ref", name: "GoodsFeedbackIdentifiersDTO" },
      author: { kind: "string" },
      description: { kind: "ref", name: "GoodsFeedbackDescriptionDTO" },
      media: { kind: "ref", name: "GoodsFeedbackMediaDTO" },
      statistics: { kind: "ref", name: "GoodsFeedbackStatisticsDTO" },
    },
    required: [
      "identifiers",
      "statistics",
      "feedbackId",
      "needReaction",
      "createdAt",
    ],
  },
  GoodsFeedbackDescriptionDTO: {
    kind: "object",
    properties: {
      advantages: { kind: "string" },
      disadvantages: { kind: "string" },
      comment: { kind: "string" },
    },
    required: [],
  },
  GoodsFeedbackId: { kind: "number", integer: true },
  GoodsFeedbackIdentifiersDTO: {
    kind: "object",
    properties: {
      orderId: { kind: "number", integer: true },
      offerId: { kind: "ref", name: "ShopSku" },
    },
    required: [],
  },
  GoodsFeedbackListDTO: {
    kind: "object",
    properties: {
      feedbacks: {
        kind: "array",
        items: { kind: "ref", name: "GoodsFeedbackDTO" },
      },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["feedbacks"],
  },
  GoodsFeedbackMediaDTO: {
    kind: "object",
    properties: {
      photos: { kind: "array", items: { kind: "string" }, nullable: true },
      videos: { kind: "array", items: { kind: "string" }, nullable: true },
    },
    required: [],
  },
  GoodsFeedbackStatisticsDTO: {
    kind: "object",
    properties: {
      rating: { kind: "number", integer: true, minimum: 1, maximum: 5 },
      commentsCount: { kind: "number", integer: true },
      recommended: { kind: "boolean" },
      paidAmount: { kind: "number", integer: true },
    },
    required: ["rating", "commentsCount"],
  },
  GoodsFeedbackUrbanadsDTO: {
    kind: "object",
    properties: {
      feedbackId: { kind: "ref", name: "GoodsFeedbackId" },
      createdAt: { kind: "string" },
      needReaction: { kind: "boolean" },
      context: { kind: "ref", name: "GoodsFeedbackContextUrbanadsDTO" },
      author: { kind: "string" },
      description: { kind: "ref", name: "GoodsFeedbackDescriptionDTO" },
      media: { kind: "ref", name: "GoodsFeedbackMediaDTO" },
      statistics: { kind: "ref", name: "GoodsFeedbackStatisticsDTO" },
    },
    required: [
      "context",
      "statistics",
      "feedbackId",
      "needReaction",
      "createdAt",
    ],
  },
  GoodsFeedbackUrbanadsListDTO: {
    kind: "object",
    properties: {
      feedbacks: {
        kind: "array",
        items: { kind: "ref", name: "GoodsFeedbackUrbanadsDTO" },
      },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["feedbacks"],
  },
  PackagingForwardScrollingPagerDTO: {
    kind: "object",
    properties: { nextPageToken: { kind: "string" } },
    required: [],
  },
  ShopSku: { kind: "string", minLength: 1, maxLength: 255 },
  SkipGoodsFeedbackReactionRequest: {
    kind: "object",
    properties: {
      feedbackIds: {
        kind: "array",
        items: { kind: "ref", name: "GoodsFeedbackId" },
      },
    },
    required: ["feedbackIds"],
  },
  SourceType: { kind: "string", enum: ["SELLER", "ADVERTISER"] },
  UpdateGoodsFeedbackCommentDTO: {
    kind: "object",
    properties: {
      id: { kind: "ref", name: "GoodsFeedbackCommentId" },
      parentId: { kind: "number", integer: true },
      text: { kind: "ref", name: "GoodsFeedbackCommentText" },
    },
    required: ["text"],
  },
  UpdateGoodsFeedbackCommentRequest: {
    kind: "object",
    properties: {
      feedbackId: { kind: "ref", name: "GoodsFeedbackId" },
      comment: { kind: "ref", name: "UpdateGoodsFeedbackCommentDTO" },
    },
    required: ["feedbackId", "comment"],
  },
  UpdateGoodsFeedbackCommentResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GoodsFeedbackCommentDTO" },
    },
    required: ["status"],
  },
  Url: { kind: "string", minLength: 1, maxLength: 2000 },
};
