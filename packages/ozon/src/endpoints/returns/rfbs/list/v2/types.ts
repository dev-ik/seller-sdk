import type { OzonRfbsReturnListItemV2 } from "../../shared/types.js";
export interface ListRfbsReturnsV2Filter {
  /**
   * Период создания заявки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly created_at?: {
    /**
     * Дата начала периода.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly from?: string;

    /**
     * Дата окончания периода.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly to?: string;
  };

  /**
   * Фильтр по статусам заявок: - `All` — все заявки. - `New` — новые. - `Delivering` — в пути. -
   * `Checkout` — на проверке. - `Arbitration` — спорные. - `Approved` — согласованные. - `Rejected`
   * — отклонённые.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly group_state?: readonly string[];

  /**
   * Идентификатор товара в системе продавца — артикул.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offer_id?: string;

  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number?: string;
}
export interface ListRfbsReturnsV2Request {
  /**
   * Фильтр.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: ListRfbsReturnsV2Filter;

  /**
   * Идентификатор последнего значения на странице — `return_id`. Оставьте это поле пустым при
   * выполнении первого запроса.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: number;

  /**
   * Количество значений в ответе.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
}
export interface ListRfbsReturnsV2Response {
  readonly returns?: OzonRfbsReturnListItemV2;
}
