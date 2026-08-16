import type { OzonAccrualMoney } from "../../../shared/v1/types.js";

export interface GetFinanceAccrualPostingsV1Request {
  /**
   * Номера отправлений.
   *
   * Минимум элементов: `1`. Максимум элементов: `200`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_numbers: readonly string[];
}

export interface OzonPostingAccrual {
  readonly accrual_date?: string;
  readonly accrued?: OzonAccrualMoney;
  readonly quantity?: number | null;
  readonly seller_price?: OzonAccrualMoney | null;
  readonly sku?: number | null;
  readonly type_id?: number;
}

export interface OzonPostingAccruals {
  readonly accruals?: readonly OzonPostingAccrual[];
  readonly posting_number?: string;
}

export interface GetFinanceAccrualPostingsV1Response {
  readonly posting_accruals?: readonly OzonPostingAccruals[];
}
