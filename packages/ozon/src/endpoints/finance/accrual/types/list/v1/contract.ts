import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type {
  ListFinanceAccrualTypesV1Response,
  OzonFinanceAccrualType,
} from "./types.js";

const accrualTypeSchema: Schema<OzonFinanceAccrualType> = object({
  description: string().optional(),
  id: integerSchema.optional(),
  name: string().optional(),
});

export const listFinanceAccrualTypesV1ResponseSchema: Schema<ListFinanceAccrualTypesV1Response> =
  object({ accrual_types: array(accrualTypeSchema).optional() });
