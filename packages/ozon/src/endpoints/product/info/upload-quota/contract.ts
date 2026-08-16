import { array, literal, object, union, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { rfc3339DateTimeSchema } from "../../../../contracts/rfc3339-date-time.js";
import type { GetProductUploadQuotaResponse } from "./types.js";

const dailyQuota = object({
  limit: integerSchema.optional(),
  reset_at: rfc3339DateTimeSchema.optional(),
  usage: integerSchema.optional(),
});

const operationLimitType = union([
  literal("UNSPECIFIED"),
  literal("RATE_LIMIT_PER_MINUTE"),
]);

const operationLimit = object({
  limit: integerSchema.optional(),
  limit_type: operationLimitType.optional(),
});

const totalQuota = object({
  limit: integerSchema.optional(),
  usage: integerSchema.optional(),
});

export const getProductUploadQuotaResponseSchema: Schema<GetProductUploadQuotaResponse> =
  object({
    daily_create: dailyQuota.optional(),
    daily_update: dailyQuota.optional(),
    operation_limits: union([operationLimit, array(operationLimit)]).optional(),
    total: totalQuota.optional(),
  });
