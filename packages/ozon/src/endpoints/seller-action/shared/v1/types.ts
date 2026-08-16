export type OzonSellerActionDiscountType = "PERCENT" | "CURRENCY";

export interface OzonSellerActionCreatedResponse {
  readonly action_id?: number;
}

export interface OzonSellerActionDiscountLevel {
  /**
   * Размер скидки.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly discount_value: number;

  /**
   * Минимальная сумма заказа для скидки.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_amount: number;
}

export type OzonSellerActionCurrency =
  | "RUB"
  | "BYN"
  | "KZT"
  | "EUR"
  | "USD"
  | "CNY";
export type OzonSellerActionQuantType =
  | "UNSPECIFIED"
  | "BOX"
  | "PALLET"
  | "GENERAL";

export interface OzonSellerActionProduct {
  readonly action_price?: number;
  readonly base_price?: number;
  readonly currency?: string;
  readonly discount_percent?: number;
  readonly is_active?: boolean;
  readonly min_seller_price?: number;
  readonly name?: string;
  readonly offer_id?: string;
  readonly price?: number;
  readonly product_id?: number;
  readonly quant_size?: number;
  readonly quant_type?: OzonSellerActionQuantType;
  readonly sku?: readonly string[];
}

export interface OzonSellerActionProductsPage {
  readonly cursor?: number;
  readonly has_next?: boolean;
  readonly products?: readonly OzonSellerActionProduct[];
}

export type OzonSellerActionType =
  | "DISCOUNT"
  | "VOUCHER_DISCOUNT"
  | "DISCOUNT_WITH_CONDITION"
  | "INSTALLMENT"
  | "INDIVIDUAL_DISCOUNT_BY_PRODUCTS"
  | "OZON_ACCOUNT_DISCOUNT"
  | "MULTI_LEVEL_DISCOUNT_ON_AMOUNT";
export type OzonSellerActionStatus = "ACTIVE" | "ENDED" | "PLANNED" | "PAUSED";

export interface OzonSellerActionListItem {
  readonly action_id?: number;
  readonly action_parameters?: {
    readonly addresses?: readonly string[];
    readonly auto_stop_action_reason?:
      | "UNSPECIFIED"
      | "BUDGET_EXCEEDED"
      | "FAST_BUDGET_SPENDING"
      | "BUDGET_SPENDING_IS_CRAZY";
    readonly budget?: number;
    readonly budget_spent?: number;
    readonly date_end?: string;
    readonly date_start?: string;
    readonly discount_levels?: readonly {
      readonly discount_value?: number;
      readonly order_amount?: number;
    }[];
    readonly discount_type?:
      | "UNSPECIFIED"
      | "RUB"
      | "PERCENT"
      | "FINAL_PRICE"
      | "INSTALLED_PERIOD"
      | "CURRENCY";
    readonly discount_value?: number;
    readonly is_legal_entities_segment?: boolean;
    readonly min_action_percent?: number;
    readonly min_order_amount?: number;
    readonly status?: OzonSellerActionStatus;
    readonly title?: string;
    readonly type?: OzonSellerActionType;
    readonly warehouses?: readonly string[];
  };
  readonly allow_delete?: boolean;
  readonly highlight_url?: string;
  readonly is_editable?: boolean;
  readonly is_participated?: boolean;
  readonly is_turn_on?: boolean;
  readonly sku_count?: number;
}
