import { object, string, type Schema } from "@safe-shape/core";
import type { GetFbsActBarcodeTextResponse } from "./types.js";
export const getFbsActBarcodeTextResponseSchema: Schema<GetFbsActBarcodeTextResponse> =
  object({ result: string().optional() });
