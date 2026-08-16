import { boolean, object, type Schema } from "@safe-shape/core";
import type { SetFbsPostingCutoffResponse } from "./types.js";

export const setFbsPostingCutoffResponseSchema: Schema<SetFbsPostingCutoffResponse> =
  object({ result: boolean().optional() });
