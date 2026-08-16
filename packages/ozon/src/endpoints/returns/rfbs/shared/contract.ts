import { array, boolean, object, string } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
export const rfbsReturnProductV2Schema = object({
  currency_code: string().optional(),
  name: string().optional(),
  offer_id: string().optional(),
  price: integerSchema.optional(),
  sku: integerSchema.optional(),
});
export const rfbsReturnListItemV2Schema = object({
  client_name: string().optional(),
  created_at: rfc3339DateTimeSchema.optional(),
  order_number: string().optional(),
  posting_number: string().optional(),
  product: rfbsReturnProductV2Schema.optional(),
  return_id: integerSchema.optional(),
  return_number: string().optional(),
  state: object({
    group_state: string().optional(),
    money_return_state_name: string().optional(),
    state: string().optional(),
    state_name: string().optional(),
  }).optional(),
});
const namedIdSchema = object({
  id: integerSchema.optional(),
  name: string().optional(),
});
export const rfbsReturnDetailsV2Schema = object({
  available_actions: array(namedIdSchema).optional(),
  client_name: string().optional(),
  client_photo: array(string()).optional(),
  client_return_method_type: namedIdSchema.optional(),
  comment: string().optional(),
  created_at: rfc3339DateTimeSchema.optional(),
  order_number: string().optional(),
  posting_number: string().optional(),
  product: rfbsReturnProductV2Schema.optional(),
  rejection_comment: string().optional(),
  rejection_reason: array(
    object({
      hint: string().optional(),
      id: integerSchema.optional(),
      is_comment_required: boolean().optional(),
      name: string().optional(),
    }),
  ).optional(),
  return_method_description: string().optional(),
  return_number: string().optional(),
  return_reason: object({
    id: integerSchema.optional(),
    is_defect: boolean().optional(),
    name: string().optional(),
  }).optional(),
  ru_post_tracking_number: string().optional(),
  state: object({
    state: string().optional(),
    state_name: string().optional(),
  }).optional(),
  warehouse_id: integerSchema.optional(),
});
