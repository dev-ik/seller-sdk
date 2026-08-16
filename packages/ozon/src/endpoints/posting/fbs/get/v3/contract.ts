import { object, type Schema } from "@safe-shape/core";
import { fbsPostingDetailV3Schema } from "../../shared/v3/contract.js";
import type { GetFbsPostingV3Response } from "./types.js";
export const getFbsPostingV3ResponseSchema: Schema<GetFbsPostingV3Response> =
  object({ result: fbsPostingDetailV3Schema.optional() });
