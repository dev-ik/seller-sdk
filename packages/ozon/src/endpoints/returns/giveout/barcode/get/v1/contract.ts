import { object, string, type Schema } from "@safe-shape/core";
import type { GetGiveoutBarcodeV1Response } from "./types.js";
export const getGiveoutBarcodeV1ResponseSchema: Schema<GetGiveoutBarcodeV1Response> =
  object({ barcode: string().optional() });
