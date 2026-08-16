import {
  array,
  boolean,
  number,
  object,
  string,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../../contracts/rfc3339-date-time.js";
import type { ListDeliveryMethodsV2Response } from "./types.js";

const coordinatesSchema = object({
  latitude: number().optional(),
  longitude: number().optional(),
});
const dropoffPointSchema = object({
  address: string().optional(),
  address_coordinates: coordinatesSchema.optional(),
  code: string().optional(),
  name: string().optional(),
});
const deliveryMethodSchema = object({
  created_at: rfc3339DateTimeSchema.optional(),
  cutoff: string().optional(),
  id: integerSchema.optional(),
  is_express: boolean().optional(),
  name: string().optional(),
  provider_id: integerSchema.optional(),
  sla_cut_in: integerSchema.optional(),
  status: string().optional(),
  template_id: integerSchema.optional(),
  tpl_dropoff_point: dropoffPointSchema.optional(),
  tpl_integration_type: string().optional(),
  updated_at: rfc3339DateTimeSchema.optional(),
  warehouse_id: integerSchema.optional(),
});

export const listDeliveryMethodsV2ResponseSchema: Schema<ListDeliveryMethodsV2Response> =
  object({
    cursor: string().optional(),
    has_next: boolean().optional(),
    delivery_methods: array(deliveryMethodSchema).optional(),
  });
