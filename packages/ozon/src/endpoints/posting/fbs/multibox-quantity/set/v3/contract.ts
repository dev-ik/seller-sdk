import { boolean, object, type Schema } from "@safe-shape/core";
import type { SetFbsPostingMultiboxQuantityV3Response } from "./types.js";
export const setFbsPostingMultiboxQuantityV3ResponseSchema: Schema<SetFbsPostingMultiboxQuantityV3Response> =
  object({ result: object({ result: boolean().optional() }).optional() });
