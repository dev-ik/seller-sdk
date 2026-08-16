import { array, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { financeTransactionOperationV3Schema } from "../../shared/v3/contract.js";
import type { ListFinanceTransactionsV3Response } from "./types.js";

export const listFinanceTransactionsV3ResponseSchema: Schema<ListFinanceTransactionsV3Response> =
  object({
    result: object({
      operations: array(financeTransactionOperationV3Schema).optional(),
      page_count: integerSchema.optional(),
      row_count: integerSchema.optional(),
    }).optional(),
  });
