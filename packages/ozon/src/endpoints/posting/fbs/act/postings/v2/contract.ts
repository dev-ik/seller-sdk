import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { ListFbsActPostingsResponse } from "./types.js";
const productSchema = object({
  name: string().optional(),
  offer_id: string().optional(),
  price: string().optional(),
  quantity: integerSchema.optional(),
  sku: integerSchema.optional(),
});
const postingSchema = object({
  id: integerSchema.optional(),
  multi_box_qty: integerSchema.optional(),
  posting_number: string().optional(),
  status: string().optional(),
  seller_error: string().optional(),
  updated_at: string().optional(),
  created_at: string().optional(),
  products: array(productSchema).optional(),
});
export const listFbsActPostingsResponseSchema: Schema<ListFbsActPostingsResponse> =
  object({ result: array(postingSchema).optional() });
