import { object, string, type Schema } from "@safe-shape/core";
import type { CancelFbsPostingProductsV2Response } from "./types.js";
export const cancelFbsPostingProductsV2ResponseSchema: Schema<CancelFbsPostingProductsV2Response> =
  object({ result: string().optional() });
