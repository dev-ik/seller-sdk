import { array, object, record, string } from "@safe-shape/core";
import { rfc3339DateTimeSchema } from "../../../contracts/rfc3339-date-time.js";
export const reportSchema = object({
  additional_data: array(
    object({ key: string().optional(), value: string().optional() }),
  ).optional(),
  code: string().optional(),
  created_at: rfc3339DateTimeSchema.optional(),
  error: string().optional(),
  expires_at: rfc3339DateTimeSchema.optional(),
  file: string().optional(),
  params: record(string()).optional(),
  report_type: string().optional(),
  status: string().optional(),
});
export const createReportResponseSchema = object({
  result: object({ code: string().optional() }).optional(),
});
