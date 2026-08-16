import type {
  OzonFinanceTransactionPeriodV3,
  OzonFinanceTransactionTypeV3,
} from "../../shared/v3/types.js";

export type GetFinanceTransactionTotalsV3Request =
  | {
      /** Период выборки. */
      readonly date: OzonFinanceTransactionPeriodV3;
      /** Номер отправления. */
      readonly posting_number?: string;
      /** Категория начислений. Используйте `OzonValues.FinanceTransactionType`. */
      readonly transaction_type?: OzonFinanceTransactionTypeV3;
    }
  | {
      /** Период выборки. */
      readonly date?: OzonFinanceTransactionPeriodV3;
      /** Номер отправления. */
      readonly posting_number: string;
      /** Категория начислений. Используйте `OzonValues.FinanceTransactionType`. */
      readonly transaction_type?: OzonFinanceTransactionTypeV3;
    };

export interface GetFinanceTransactionTotalsV3Response {
  readonly result?: {
    readonly accruals_for_sale?: number;
    readonly compensation_amount?: number;
    readonly money_transfer?: number;
    readonly others_amount?: number;
    readonly processing_and_delivery?: number;
    readonly refunds_and_cancellations?: number;
    readonly sale_commission?: number;
    readonly services_amount?: number;
  };
}
