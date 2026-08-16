export interface OzonFinanceTransactionPeriodV3 {
  /** Начало периода в формате RFC 3339. */
  readonly from?: string;
  /** Конец периода в формате RFC 3339. */
  readonly to?: string;
}

/** Допустимый тип начисления в Finance API v3. */
export type OzonFinanceTransactionTypeV3 =
  | "all"
  | "orders"
  | "returns"
  | "services"
  | "compensation"
  | "transferDelivery"
  | "other";

export interface OzonFinanceTransactionOperationV3 {
  readonly accruals_for_sale?: number;
  readonly amount?: number;
  readonly delivery_charge?: number;
  readonly items?: readonly { readonly name?: string; readonly sku?: number }[];
  readonly operation_date?: string;
  readonly operation_id?: number;
  readonly operation_type?: string;
  readonly operation_type_name?: string;
  readonly posting?: {
    readonly delivery_schema?: string;
    readonly order_date?: string;
    readonly posting_number?: string;
    readonly warehouse_id?: number;
  };
  readonly return_delivery_charge?: number;
  readonly sale_commission?: number;
  readonly services?: readonly {
    readonly name?: string;
    readonly price?: number;
  }[];
  readonly type?: string;
}
