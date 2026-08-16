import { object, string, type Schema } from "@safe-shape/core";
import type { GetSellerActionVoucherFileV1Response } from "./types.js";
export const getSellerActionVoucherFileV1ResponseSchema: Schema<GetSellerActionVoucherFileV1Response> =
  object({ file: string().optional() });
