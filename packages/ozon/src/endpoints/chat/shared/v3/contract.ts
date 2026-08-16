import { array, boolean, object, string } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
export const chatV3Schema = object({
  chat: object({
    chat_id: string().optional(),
    chat_status: string().optional(),
    chat_type: string().optional(),
    created_at: rfc3339DateTimeSchema.optional(),
  }).optional(),
  first_unread_message_id: integerSchema.optional(),
  last_message_id: integerSchema.optional(),
  unread_count: integerSchema.optional(),
});
export const chatMessageV3Schema = object({
  context: object({
    order_number: string().optional(),
    sku: string().optional(),
  }).optional(),
  created_at: rfc3339DateTimeSchema.optional(),
  data: array(string()).optional(),
  is_image: boolean().optional(),
  is_read: boolean().optional(),
  message_id: integerSchema.optional(),
  moderate_image_status: string().optional(),
  user: object({
    id: string().optional(),
    type: string().optional(),
  }).optional(),
});
