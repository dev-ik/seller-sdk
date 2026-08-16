import { object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { CreateFbsActResponse } from "./types.js";
export const createFbsActResponseSchema: Schema<CreateFbsActResponse> = object({
  result: object({ id: integerSchema.optional() }).optional(),
});
