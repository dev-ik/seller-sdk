import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../contracts/integer.js";
import type { OzonCancellationReasonsResponse } from "./types.js";

const cancellationReasonSchema = object({
  id: integerSchema.optional(),
  name: string().optional(),
});

/** @internal */
export const cancellationReasonsResponseSchema: Schema<OzonCancellationReasonsResponse> =
  object({
    reasons: array(cancellationReasonSchema).optional(),
  });
