import { array, number, object, string } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";

export const financeTransactionOperationV3Schema = object({
  accruals_for_sale: number().optional(),
  amount: number().optional(),
  delivery_charge: number().optional(),
  items: array(
    object({ name: string().optional(), sku: integerSchema.optional() }),
  ).optional(),
  operation_date: string().optional(),
  operation_id: integerSchema.optional(),
  operation_type: string().optional(),
  operation_type_name: string().optional(),
  posting: object({
    delivery_schema: string().optional(),
    order_date: string().optional(),
    posting_number: string().optional(),
    warehouse_id: integerSchema.optional(),
  }).optional(),
  return_delivery_charge: number().optional(),
  sale_commission: number().optional(),
  services: array(
    object({ name: string().optional(), price: number().optional() }),
  ).optional(),
  type: string().optional(),
});
