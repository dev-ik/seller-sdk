// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const goodsQuestionsComponents: YmSchemaComponents = {
  AnswerDTO: {
    kind: "object",
    properties: {
      id: { kind: "ref", name: "AnswerId" },
      text: { kind: "ref", name: "QuestionsTextContent" },
      canModify: { kind: "boolean" },
      author: { kind: "ref", name: "QuestionsTextContentAuthorDTO" },
      status: { kind: "ref", name: "QuestionsTextContentModerationStatusType" },
      questionId: { kind: "ref", name: "QuestionId" },
      createdAt: { kind: "string" },
      votes: { kind: "ref", name: "VotesDTO" },
      comments: {
        kind: "array",
        items: { kind: "ref", name: "CommentDTO" },
        nullable: true,
      },
    },
    required: [
      "id",
      "text",
      "canModify",
      "status",
      "questionId",
      "createdAt",
      "votes",
    ],
  },
  AnswerId: { kind: "number", integer: true, minimum: 1 },
  AnswerListDTO: {
    kind: "object",
    properties: {
      answers: { kind: "array", items: { kind: "ref", name: "AnswerDTO" } },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["answers"],
  },
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
  CommentDTO: {
    kind: "object",
    properties: {
      id: { kind: "ref", name: "CommentId" },
      text: { kind: "ref", name: "QuestionsTextContent" },
      canModify: { kind: "boolean" },
      parentId: { kind: "ref", name: "CommentId" },
      author: { kind: "ref", name: "QuestionsTextContentAuthorDTO" },
      status: { kind: "ref", name: "QuestionsTextContentModerationStatusType" },
      answerId: { kind: "ref", name: "AnswerId" },
      createdAt: { kind: "string" },
      votes: { kind: "ref", name: "VotesDTO" },
    },
    required: ["id", "text", "status", "answerId", "createdAt"],
  },
  CommentId: { kind: "number", integer: true, minimum: 1 },
  GetAnswersRequest: {
    kind: "object",
    properties: {
      questionId: { kind: "ref", name: "QuestionId" },
      answerIds: {
        kind: "array",
        items: { kind: "ref", name: "AnswerId" },
        nullable: true,
      },
    },
    required: [],
  },
  GetAnswersResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "AnswerListDTO" },
    },
    required: ["status"],
  },
  GetQuestionsRequest: {
    kind: "object",
    properties: {
      categoryIds: {
        kind: "array",
        items: { kind: "number", integer: true, minimum: 0 },
        nullable: true,
      },
      questionIds: {
        kind: "array",
        items: { kind: "ref", name: "QuestionId" },
        nullable: true,
      },
      dateFrom: { kind: "string" },
      dateTo: { kind: "string" },
      needAnswer: { kind: "boolean" },
      sort: { kind: "ref", name: "QuestionSortOrderType" },
    },
    required: [],
  },
  GetQuestionsResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "QuestionListDTO" },
    },
    required: ["status"],
  },
  PackagingForwardScrollingPagerDTO: {
    kind: "object",
    properties: { nextPageToken: { kind: "string" } },
    required: [],
  },
  QuestionDTO: {
    kind: "object",
    properties: {
      questionIdentifiers: { kind: "ref", name: "QuestionIdentifiersDTO" },
      businessId: { kind: "ref", name: "BusinessId" },
      text: { kind: "ref", name: "QuestionsTextContent" },
      createdAt: { kind: "string" },
      votes: { kind: "ref", name: "VotesDTO" },
      author: { kind: "ref", name: "QuestionsTextContentAuthorDTO" },
    },
    required: [
      "questionIdentifiers",
      "businessId",
      "text",
      "createdAt",
      "votes",
      "author",
    ],
  },
  QuestionId: { kind: "number", integer: true, minimum: 1 },
  QuestionIdentifiersDTO: {
    kind: "object",
    properties: {
      id: { kind: "ref", name: "QuestionId" },
      categoryId: { kind: "number", integer: true, minimum: 0 },
      offerId: { kind: "ref", name: "ShopSku" },
    },
    required: ["offerId", "id"],
  },
  QuestionListDTO: {
    kind: "object",
    properties: {
      questions: { kind: "array", items: { kind: "ref", name: "QuestionDTO" } },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
      totalCount: { kind: "number", integer: true },
    },
    required: ["questions", "totalCount"],
  },
  QuestionSortOrderType: {
    kind: "string",
    enum: ["CREATED_AT_DESC", "CREATED_AT_ASC"],
  },
  QuestionsTextContent: { kind: "string", minLength: 1, maxLength: 5000 },
  QuestionsTextContentAuthorDTO: {
    kind: "object",
    properties: {
      type: { kind: "ref", name: "QuestionsTextContentAuthorType" },
      name: { kind: "string" },
    },
    required: [],
  },
  QuestionsTextContentAuthorType: {
    kind: "string",
    enum: ["USER", "BUSINESS", "VENDOR", "BRAND"],
  },
  QuestionsTextContentModerationStatusType: {
    kind: "string",
    enum: ["PUBLISHED", "UNMODERATED", "BANNED", "DELETED"],
  },
  QuestionsTextEntityOperationType: {
    kind: "string",
    enum: ["UPDATE", "CREATE", "DELETE"],
  },
  QuestionsTextEntityType: {
    kind: "string",
    enum: ["QUESTION", "ANSWER", "COMMENT"],
  },
  ShopSku: { kind: "string", minLength: 1, maxLength: 255 },
  TypedQuestionsTextEntityIdDTO: {
    kind: "object",
    properties: {
      id: { kind: "number", integer: true, minimum: 1 },
      type: { kind: "ref", name: "QuestionsTextEntityType" },
    },
    required: ["id", "type"],
  },
  UpdateGoodsQuestionTextEntityDTO: {
    kind: "object",
    properties: {
      entity: { kind: "ref", name: "TypedQuestionsTextEntityIdDTO" },
    },
    required: ["entity"],
  },
  UpdateGoodsQuestionTextEntityRequest: {
    kind: "object",
    properties: {
      entityId: { kind: "ref", name: "TypedQuestionsTextEntityIdDTO" },
      parentEntityId: { kind: "ref", name: "TypedQuestionsTextEntityIdDTO" },
      text: { kind: "ref", name: "QuestionsTextContent" },
      operationType: { kind: "ref", name: "QuestionsTextEntityOperationType" },
    },
    required: ["operationType"],
  },
  UpdateGoodsQuestionTextEntityResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "UpdateGoodsQuestionTextEntityDTO" },
    },
    required: ["status"],
  },
  VotesDTO: {
    kind: "object",
    properties: {
      likes: { kind: "number", integer: true },
      dislikes: { kind: "number", integer: true },
    },
    required: ["likes", "dislikes"],
  },
};
