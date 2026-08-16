export type OzonDiscountTaskStatus =
  | "NEW"
  | "SEEN"
  | "APPROVED"
  | "PARTLY_APPROVED"
  | "DECLINED"
  | "AUTO_DECLINED"
  | "DECLINED_BY_USER"
  | "COUPON"
  | "PURCHASED";

export interface ListDiscountTasksRequest {
  /**
   * Статус заявки на скидку: - `NEW` — новая, - `SEEN` — просмотренная, - `APPROVED` — одобренная, -
   * `PARTLY_APPROVED` — одобренная частично, - `DECLINED` — отклонённая, - `AUTO_DECLINED` —
   * отклонена автоматически, - `DECLINED_BY_USER` — отклонена покупателем, - `COUPON` — скидка по
   * купону, - `PURCHASED` — купленная.
   *
   * Пример: `UNKNOWN`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly status: OzonDiscountTaskStatus;

  /**
   * Страница, с которой нужно выгрузить список заявок на скидку.
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page: number;

  /**
   * Максимальное количество заявок на странице.
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
}

export interface OzonDiscountTask {
  readonly id?: number;
  readonly created_at?: string;
  readonly end_at?: string;
  readonly edited_till?: string;
  readonly status?: string;
  readonly customer_name?: string;
  readonly sku?: number;
  readonly user_comment?: string;
  readonly seller_comment?: string;
  readonly requested_price?: number;
  readonly approved_price?: number;
  readonly original_price?: number;
  readonly discount?: number;
  readonly discount_percent?: number;
  readonly base_price?: number;
  readonly min_auto_price?: number;
  readonly prev_task_id?: number;
  readonly is_damaged?: boolean;
  readonly moderated_at?: string;
  readonly approved_discount?: number;
  readonly approved_discount_percent?: number;
  readonly is_purchased?: boolean;
  readonly is_auto_moderated?: boolean;
  readonly offer_id?: string;
  readonly email?: string;
  readonly last_name?: string;
  readonly first_name?: string;
  readonly patronymic?: string;
  readonly approved_quantity_min?: number;
  readonly approved_quantity_max?: number;
  readonly requested_quantity_min?: number;
  readonly requested_quantity_max?: number;
  readonly requested_price_with_fee?: number;
  readonly approved_price_with_fee?: number;
  readonly approved_price_fee_percent?: number;
}

export interface ListDiscountTasksResponse {
  readonly result?: readonly OzonDiscountTask[];
}
