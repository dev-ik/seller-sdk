import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { ListFboPostingCancelReasonsResponse } from "./types.js";
export const listFboPostingCancelReasonsResponseSchema: Schema<ListFboPostingCancelReasonsResponse> =
  object({
    reasons: array(
      object({ id: integerSchema.optional(), name: string().optional() }),
    ).optional(),
  });
