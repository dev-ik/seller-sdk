import { boolean, object, type Schema } from "@safe-shape/core";
import type { OzonProductLifecycleBooleanResponse } from "./types.js";

export const productLifecycleBooleanResponseSchema: Schema<OzonProductLifecycleBooleanResponse> =
  object({
    result: boolean().optional(),
  });
