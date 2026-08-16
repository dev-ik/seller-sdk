import { boolean, object, type Schema } from "@safe-shape/core";
import type { SetFbsPostingTimeslotResponse } from "./types.js";

export const setFbsPostingTimeslotResponseSchema: Schema<SetFbsPostingTimeslotResponse> =
  object({ result: boolean().optional() });
