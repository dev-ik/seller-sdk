export interface OzonPromotion {
  readonly id?: number;
  readonly title?: string;
  readonly action_type?: string;
  readonly description?: string;
  readonly date_start?: string;
  readonly date_end?: string;
  readonly auto_add_dates?: readonly string[];
  readonly freeze_date?: string;
  readonly potential_products_count?: number;
  readonly participating_products_count?: number;
  readonly is_participating?: boolean;
  readonly is_voucher_action?: boolean;
  readonly banned_products_count?: number;
  readonly with_targeting?: boolean;
  readonly order_amount?: number;
  readonly discount_type?: string;
  readonly discount_value?: number;
}

export interface ListPromotionsResponse {
  readonly result?: readonly OzonPromotion[];
}
