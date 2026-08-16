import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import type { ListDeliveryMethodsV1Response } from "./types.js";

const deliveryMethodSchema = object({
  company_id: integerSchema.optional(),
  created_at: rfc3339DateTimeSchema.optional(),
  cutoff: string().optional(),
  id: integerSchema.optional(),
  name: string().optional(),
  provider_id: integerSchema.optional(),
  sla_cut_in: integerSchema.optional(),
  status: string().optional(),
  template_id: integerSchema.optional(),
  updated_at: rfc3339DateTimeSchema.optional(),
  warehouse_id: integerSchema.optional(),
});

export const listDeliveryMethodsV1ResponseSchema: Schema<ListDeliveryMethodsV1Response> =
  object({
    has_next: boolean().optional(),
    result: array(deliveryMethodSchema).optional(),
  });
