import { array, object, string, type Schema } from "@safe-shape/core";
import type { GetFboPostingCancellationStatusResponse } from "./types.js";

/** @internal */
export const getFboPostingCancellationStatusResponseSchema: Schema<GetFboPostingCancellationStatusResponse> =
  object({
    order_number: string().optional(),
    posting_number: array(string()).optional(),
    state: string().optional(),
  });
