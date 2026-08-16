import { object, string, type Schema } from "@safe-shape/core";
import type { CancelFboPostingResponse } from "./types.js";

/** @internal */
export const cancelFboPostingResponseSchema: Schema<CancelFboPostingResponse> =
  object({
    message: string().optional(),
  });
