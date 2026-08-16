import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type {
  OzonStairwayDiscountError,
  OzonStairwayDiscountErrorData,
  SetProductStairwayDiscountByQuantityV1Response,
} from "./types.js";

const errorDataSchema: Schema<OzonStairwayDiscountErrorData> = object({
  code: string().optional(),
  field: string().optional(),
  message: string().optional(),
  step: integerSchema.optional(),
  value: string().optional(),
});

const errorSchema: Schema<OzonStairwayDiscountError> = object({
  data: array(errorDataSchema).optional(),
  sku: integerSchema.optional(),
});

export const setProductStairwayDiscountByQuantityV1ResponseSchema: Schema<SetProductStairwayDiscountByQuantityV1Response> =
  object({
    accepted: boolean().optional(),
    errors: array(errorSchema).optional(),
    warnings: array(errorSchema).optional(),
  });
