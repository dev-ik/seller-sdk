import {
  array,
  boolean,
  literal,
  object,
  union,
  type Schema,
} from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type {
  GetProductStairwayDiscountByQuantityV1Response,
  OzonProductStairwayDiscountInfo,
  OzonStairwayDiscountInfoStep,
  OzonStairwayDiscountStatus,
} from "./types.js";

const statusSchema: Schema<OzonStairwayDiscountStatus> = union([
  literal("IN_PROCESS"),
  literal("ERROR"),
  literal("SUCCESS"),
]);

const stepSchema: Schema<OzonStairwayDiscountInfoStep> = object({
  discount: integerSchema.optional(),
  quantity: integerSchema.optional(),
  step: integerSchema.optional(),
});

const stairwaySchema: Schema<OzonProductStairwayDiscountInfo> = object({
  enabled: boolean().optional(),
  sku: integerSchema.optional(),
  stairway: object({ steps: array(stepSchema).optional() }).optional(),
  status: statusSchema.optional(),
});

export const getProductStairwayDiscountByQuantityV1ResponseSchema: Schema<GetProductStairwayDiscountByQuantityV1Response> =
  object({ stairways: array(stairwaySchema).optional() });
