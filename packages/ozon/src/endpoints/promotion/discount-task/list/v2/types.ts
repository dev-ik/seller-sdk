export type OzonDiscountTaskStatusV2 = "ALL" | "NEW" | "APPROVED" | "DECLINED";

export interface ListDiscountTasksV2Request {
  /**
   * Идентификатор последнего значения на странице. При первом запросе оставьте это поле пустым.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: number;

  /**
   * Максимальное количество заявок на странице.
   *
   * Формат: `int64`. Максимум: `50`. Пример: `50`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit?: 5 | 10 | 15 | 20 | 30 | 50;

  /**
   * Статус заявки на скидку: - `ALL` — все статусы, - `NEW` — новая, - `APPROVED` — одобренная, -
   * `DECLINED` — отклонённая.
   *
   * Пример: `ALL`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly status?: OzonDiscountTaskStatusV2;
}

export interface OzonDiscountTaskAutoModeratedInfoV2 {
  readonly max_percent?: number;
  readonly max_price?: number;
  readonly min_percent?: number;
  readonly min_price?: number;
}

export interface OzonDiscountTaskV2 {
  readonly approved_discount?: number;
  readonly approved_price?: number;
  readonly approved_quantity_max?: number;
  readonly auto_moderated_info?: OzonDiscountTaskAutoModeratedInfoV2;
  readonly created_at?: string;
  readonly edited_till?: string;
  readonly edited_till_duration?: number;
  readonly email?: string;
  readonly end_at?: string;
  readonly end_at_duration?: number;
  readonly first_name?: string;
  readonly id?: number;
  readonly is_auto_moderated?: boolean;
  readonly last_name?: string;
  readonly min_auto_price?: number;
  readonly moderated_at?: string;
  readonly name?: string;
  readonly original_price?: number;
  readonly patronymic?: string;
  readonly reduction_factor?: number;
  readonly requested_discount?: number;
  readonly requested_price?: number;
  readonly requested_quantity_max?: number;
  readonly sku?: number;
  readonly status?: OzonDiscountTaskStatusV2;
}

export interface ListDiscountTasksV2Response {
  readonly tasks?: readonly OzonDiscountTaskV2[];
}
