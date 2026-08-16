import type {
  OzonFinanceTransactionOperationV3,
  OzonFinanceTransactionPeriodV3,
  OzonFinanceTransactionTypeV3,
} from "../../shared/v3/types.js";

export type OzonFinanceTransactionListFilterV3 =
  | {
      /** Период выборки. Максимальный период одного запроса — один месяц. */
      readonly date: OzonFinanceTransactionPeriodV3;
      /** Внутренние типы операций Ozon. Пустой массив не ограничивает выборку. */
      readonly operation_type?: readonly string[];
      /** Номер отправления. */
      readonly posting_number?: string;
      /** Категория начислений. Используйте `OzonValues.FinanceTransactionType`. */
      readonly transaction_type?: OzonFinanceTransactionTypeV3;
    }
  | {
      /** Период выборки. Максимальный период одного запроса — один месяц. */
      readonly date?: OzonFinanceTransactionPeriodV3;
      /** Внутренние типы операций Ozon. Пустой массив не ограничивает выборку. */
      readonly operation_type?: readonly string[];
      /** Номер отправления. */
      readonly posting_number: string;
      /** Категория начислений. Используйте `OzonValues.FinanceTransactionType`. */
      readonly transaction_type?: OzonFinanceTransactionTypeV3;
    };

export interface ListFinanceTransactionsV3Request {
  /** Фильтр должен содержать период или номер отправления. */
  readonly filter?: OzonFinanceTransactionListFilterV3;
  /** Номер запрашиваемой страницы, начиная с 1. */
  readonly page: number;
  /** Количество элементов на странице, не более 1000. */
  readonly page_size: number;
}

export interface ListFinanceTransactionsV3Response {
  readonly result?: {
    readonly operations?: readonly OzonFinanceTransactionOperationV3[];
    readonly page_count?: number;
    readonly row_count?: number;
  };
}
