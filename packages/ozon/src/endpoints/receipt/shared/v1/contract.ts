import { array, literal, object, string, union } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";

export const sellerReceiptV1Schema = object({
  created_at: rfc3339DateTimeSchema.optional(),
  operation_type: union([
    literal("UNSPECIFIED"),
    literal("COMMODITY"),
  ]).optional(),
  order_id: integerSchema.optional(),
  parent_receipt_id: string().optional(),
  posting_numbers: array(string()).optional(),
  receipt_id: string().optional(),
  receipt_number: string().optional(),
  type: union([
    literal("UNSPECIFIED"),
    literal("INCOMING"),
    literal("REFUND"),
  ]).optional(),
  updated_at: rfc3339DateTimeSchema.optional(),
});
