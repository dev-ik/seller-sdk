// Generated runtime schemas for this Yandex Market API domain.
import type { YmSchemaComponents } from "../schema.js";

export const chatsComponents: YmSchemaComponents = {
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
  CampaignId: { kind: "number", integer: true, minimum: 1 },
  ChatContextDTO: {
    kind: "object",
    properties: {
      type: { kind: "ref", name: "ChatContextIdentifiableType" },
      id: { kind: "number", integer: true, minimum: 1 },
    },
    required: ["type", "id"],
  },
  ChatContextIdentifiableType: { kind: "string", enum: ["ORDER", "RETURN"] },
  ChatContextType: { kind: "string", enum: ["ORDER", "RETURN", "DIRECT"] },
  ChatCustomerDTO: {
    kind: "object",
    properties: {
      name: { kind: "string", minLength: 1 },
      publicId: { kind: "string", minLength: 1 },
    },
    required: [],
  },
  ChatFullContextDTO: {
    kind: "object",
    properties: {
      type: { kind: "ref", name: "ChatContextType" },
      customer: { kind: "ref", name: "ChatCustomerDTO" },
      campaignId: { kind: "ref", name: "CampaignId" },
      orderId: { kind: "number", integer: true, minimum: 1 },
      returnId: { kind: "number", integer: true, minimum: 1 },
    },
    required: ["type"],
  },
  ChatMessageDTO: {
    kind: "object",
    properties: {
      messageId: { kind: "number", integer: true, minimum: 1 },
      createdAt: { kind: "string" },
      sender: { kind: "ref", name: "ChatMessageSenderType" },
      message: { kind: "string" },
      payload: {
        kind: "array",
        items: { kind: "ref", name: "ChatMessagePayloadDTO" },
        nullable: true,
      },
    },
    required: ["messageId", "createdAt", "sender"],
  },
  ChatMessagePayloadDTO: {
    kind: "object",
    properties: {
      name: { kind: "string" },
      url: { kind: "ref", name: "Url" },
      size: { kind: "number", integer: true },
    },
    required: ["name", "size", "url"],
  },
  ChatMessageSenderType: {
    kind: "string",
    enum: ["PARTNER", "CUSTOMER", "MARKET", "SUPPORT"],
  },
  ChatMessagesResultDTO: {
    kind: "object",
    properties: {
      orderId: { kind: "number", integer: true },
      context: { kind: "ref", name: "ChatFullContextDTO" },
      messages: {
        kind: "array",
        items: { kind: "ref", name: "ChatMessageDTO" },
      },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["context", "messages"],
  },
  ChatStatusType: {
    kind: "string",
    enum: [
      "NEW",
      "WAITING_FOR_CUSTOMER",
      "WAITING_FOR_PARTNER",
      "WAITING_FOR_ARBITER",
      "WAITING_FOR_MARKET",
      "FINISHED",
    ],
  },
  ChatType: { kind: "string", enum: ["CHAT", "ARBITRAGE"] },
  CreateChatRequest: {
    kind: "object",
    properties: {
      orderId: { kind: "number", integer: true },
      context: { kind: "ref", name: "ChatContextDTO" },
    },
    required: [],
  },
  CreateChatResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "CreateChatResultDTO" },
    },
    required: ["status"],
  },
  CreateChatResultDTO: {
    kind: "object",
    properties: { chatId: { kind: "number", integer: true, minimum: 1 } },
    required: ["chatId"],
  },
  EmptyApiResponse: {
    kind: "object",
    properties: { status: { kind: "ref", name: "ApiResponseStatusType" } },
    required: ["status"],
  },
  GetChatHistoryRequest: {
    kind: "object",
    properties: {
      messageIdFrom: { kind: "number", integer: true, minimum: 1 },
    },
    required: [],
  },
  GetChatHistoryResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "ChatMessagesResultDTO" },
    },
    required: ["status"],
  },
  GetChatInfoDTO: {
    kind: "object",
    properties: {
      chatId: { kind: "number", integer: true, minimum: 1 },
      orderId: { kind: "number", integer: true, minimum: 1 },
      context: { kind: "ref", name: "ChatFullContextDTO" },
      type: { kind: "ref", name: "ChatType" },
      status: { kind: "ref", name: "ChatStatusType" },
      createdAt: { kind: "string" },
      updatedAt: { kind: "string" },
    },
    required: ["chatId", "context", "type", "status", "createdAt", "updatedAt"],
  },
  GetChatMessageResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "ChatMessageDTO" },
    },
    required: ["status"],
  },
  GetChatResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GetChatInfoDTO" },
    },
    required: ["status"],
  },
  GetChatsInfoDTO: {
    kind: "object",
    properties: {
      chats: { kind: "array", items: { kind: "ref", name: "GetChatInfoDTO" } },
      paging: { kind: "ref", name: "PackagingForwardScrollingPagerDTO" },
    },
    required: ["chats"],
  },
  GetChatsRequest: {
    kind: "object",
    properties: {
      orderIds: {
        kind: "array",
        items: { kind: "number", integer: true },
        nullable: true,
      },
      contexts: {
        kind: "array",
        items: { kind: "ref", name: "ChatContextDTO" },
        nullable: true,
      },
      contextTypes: {
        kind: "array",
        items: { kind: "ref", name: "ChatContextType" },
        nullable: true,
      },
      types: {
        kind: "array",
        items: { kind: "ref", name: "ChatType" },
        nullable: true,
      },
      statuses: {
        kind: "array",
        items: { kind: "ref", name: "ChatStatusType" },
        nullable: true,
      },
    },
    required: [],
  },
  GetChatsResponse: {
    kind: "object",
    properties: {
      status: { kind: "ref", name: "ApiResponseStatusType" },
      result: { kind: "ref", name: "GetChatsInfoDTO" },
    },
    required: ["status"],
  },
  PackagingForwardScrollingPagerDTO: {
    kind: "object",
    properties: { nextPageToken: { kind: "string" } },
    required: [],
  },
  SendFileToChatRequest: {
    kind: "object",
    properties: { file: { kind: "string" } },
    required: ["file"],
  },
  SendMessageToChatRequest: {
    kind: "object",
    properties: { message: { kind: "string", minLength: 1, maxLength: 4096 } },
    required: ["message"],
  },
  Url: { kind: "string", minLength: 1, maxLength: 2000 },
};
