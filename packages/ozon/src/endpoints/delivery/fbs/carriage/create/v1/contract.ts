import { object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { CreateFbsCarriageResponse } from "./types.js";

export const createFbsCarriageResponseSchema: Schema<CreateFbsCarriageResponse> =
  object({ carriage_id: integerSchema.optional() });
