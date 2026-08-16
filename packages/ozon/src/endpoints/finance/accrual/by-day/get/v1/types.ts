import type {
  OzonAccrualFee,
  OzonAccrualMoney,
} from "../../../shared/v1/types.js";

export type OzonFinanceAccrualCategory =
  | "UNSPECIFIED"
  | "POSTING"
  | "ITEM"
  | "NON_ITEM"
  | "CONTAINER_FEES";

export interface GetFinanceAccrualByDayV1Request {
  /**
   * Дата начислений. Самая ранняя — 1 января 2022 года. Если укажете `last_id`, передайте значение
   * `date` из предыдущего запроса.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date: string;

  /**
   * Идентификатор последнего значения на странице. При первом запросе оставьте это поле пустым.
   * Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса. Срок жизни
   * идентификатора — 15 минут.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id: string;
}

export interface OzonFinanceAccrualCommission {
  readonly bonus?: OzonAccrualMoney;
  readonly coinvestment?: OzonAccrualMoney;
  readonly commission?: OzonAccrualMoney;
  readonly commission_ratio?: string;
  readonly sale_amount?: OzonAccrualMoney;
  readonly sale_commission?: OzonAccrualMoney;
  readonly sale_price?: OzonAccrualMoney;
  readonly seller_price?: OzonAccrualMoney | null;
}

export interface OzonFinanceAccrualDelivery {
  readonly services?: readonly OzonAccrualFee[];
  readonly total_accrued?: OzonAccrualMoney;
}

export interface OzonFinanceAccrualPostingProduct {
  readonly commission?: OzonFinanceAccrualCommission;
  readonly delivery?: OzonFinanceAccrualDelivery;
  readonly sku?: number;
}

export interface OzonFinanceAccrualPosting {
  readonly delivery_schema?: string;
  readonly delivery_speed?: number;
  readonly products?: readonly OzonFinanceAccrualPostingProduct[];
}

export interface OzonFinanceAccrualItemFee {
  readonly fees?: readonly OzonAccrualFee[];
  readonly sku?: number;
}

export interface OzonFinanceAccrualByDay {
  readonly accrued_category?: OzonFinanceAccrualCategory;
  readonly container_fees?: { readonly fees?: readonly OzonAccrualFee[] };
  readonly date?: string;
  readonly item_fees?: {
    readonly fees?: readonly OzonFinanceAccrualItemFee[];
  } | null;
  readonly non_item_fee?: OzonAccrualFee;
  readonly posting?: OzonFinanceAccrualPosting | null;
  readonly total_amount?: OzonAccrualMoney;
  readonly accrual_id?: number;
  readonly unit_number?: string;
}

export interface GetFinanceAccrualByDayV1Response {
  readonly accruals?: readonly OzonFinanceAccrualByDay[];
  readonly last_id?: string;
}
