import {
  array,
  boolean,
  literal,
  number,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import type {
  ListDiscountTasksV2Response,
  OzonDiscountTaskAutoModeratedInfoV2,
  OzonDiscountTaskStatusV2,
  OzonDiscountTaskV2,
} from "./types.js";

const statusSchema: Schema<OzonDiscountTaskStatusV2> = union([
  literal("ALL"),
  literal("NEW"),
  literal("APPROVED"),
  literal("DECLINED"),
]);

const autoModeratedInfoSchema: Schema<OzonDiscountTaskAutoModeratedInfoV2> =
  object({
    max_percent: number().optional(),
    max_price: number().optional(),
    min_percent: number().optional(),
    min_price: number().optional(),
  });

const taskSchema: Schema<OzonDiscountTaskV2> = object({
  approved_discount: number().optional(),
  approved_price: number().optional(),
  approved_quantity_max: integerSchema.optional(),
  auto_moderated_info: autoModeratedInfoSchema.optional(),
  created_at: rfc3339DateTimeSchema.optional(),
  edited_till: rfc3339DateTimeSchema.optional(),
  edited_till_duration: integerSchema.optional(),
  email: string().optional(),
  end_at: rfc3339DateTimeSchema.optional(),
  end_at_duration: integerSchema.optional(),
  first_name: string().optional(),
  id: integerSchema.optional(),
  is_auto_moderated: boolean().optional(),
  last_name: string().optional(),
  min_auto_price: number().optional(),
  moderated_at: rfc3339DateTimeSchema.optional(),
  name: string().optional(),
  original_price: number().optional(),
  patronymic: string().optional(),
  reduction_factor: number().optional(),
  requested_discount: number().optional(),
  requested_price: number().optional(),
  requested_quantity_max: integerSchema.optional(),
  sku: integerSchema.optional(),
  status: statusSchema.optional(),
});

export const listDiscountTasksV2ResponseSchema: Schema<ListDiscountTasksV2Response> =
  object({ tasks: array(taskSchema).optional() });
