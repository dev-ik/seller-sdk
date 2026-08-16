import { array, boolean, object, type Schema } from "@safe-shape/core";
import { sellerReceiptV1Schema } from "../../shared/v1/contract.js";
import type { ListSellerReceiptsV1Response } from "./types.js";

export const listSellerReceiptsV1ResponseSchema: Schema<ListSellerReceiptsV1Response> =
  object({
    has_next: boolean().optional(),
    receipts: array(sellerReceiptV1Schema).optional(),
  });
