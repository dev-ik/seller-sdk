import { literal, union, type Schema } from "@safe-shape/core";
import type {
  OzonNotificationCheckErrorType,
  OzonNotificationType,
} from "./types.js";

export const ozonNotificationTypeSchema: Schema<OzonNotificationType> = union([
  literal("TYPE_NEW_MESSAGE"),
  literal("TYPE_UPDATE_MESSAGE"),
  literal("TYPE_MESSAGE_READ"),
  literal("TYPE_CHAT_CLOSED"),
  literal("TYPE_NEW_POSTING"),
  literal("TYPE_POSTING_CANCELLED"),
  literal("TYPE_STATE_CHANGED"),
  literal("TYPE_DELIVERY_DATE_CHANGED"),
  literal("TYPE_CUTOFF_DATE_CHANGED"),
  literal("TYPE_CREATE_ITEM"),
  literal("TYPE_UPDATE_ITEM"),
  literal("TYPE_CREATE_OR_UPDATE_ITEM"),
  literal("TYPE_STOCKS_CHANGED"),
  literal("TYPE_FBO_POSTING_NEW"),
  literal("TYPE_FBO_POSTING_CANCELLED"),
  literal("TYPE_FBO_POSTING_STATE_CHANGED"),
  literal("TYPE_FBO_POSTING_DELIVERY_DATE_CHANGED"),
  literal("TYPE_FBO_STOCKS_CHANGED"),
  literal("TYPE_ORDER_NEW"),
  literal("TYPE_ORDER_CANCELLED"),
  literal("TYPE_ORDER_STATE_CHANGED"),
]);

export const ozonNotificationCheckErrorTypeSchema: Schema<OzonNotificationCheckErrorType> =
  union([
    literal("REQUEST_ERROR"),
    literal("REQUEST_TIMEOUT"),
    literal("SERVER_FAULT"),
    literal("STATUS_CODE_NOT_OK"),
    literal("EMPTY_BODY"),
    literal("INVALID_BODY"),
    literal("INVALID_JSON"),
    literal("WRONG_RESULT_FIELD"),
    literal("WRONG_RESULT_TIME_FIELD"),
  ]);
