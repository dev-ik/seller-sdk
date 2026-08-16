export type OzonFbpPostingSortDirection = "ASC" | "DESC";

export interface ListFbpPostingsV1Request {
  /**
   * Указатель для выборки следующих данных.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cursor?: string;

  /**
   * Фильтр для поиска отправлений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: {
    /**
     * Название товара.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly name?: string;

    /**
     * Идентификатор товара в системе продавца — артикул.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly offer_id?: string;

    /**
     * Номера отправлений.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly posting_numbers?: readonly string[];

    /**
     * Начало периода.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly since?: string;

    /**
     * Статус отправления.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly statuses?: readonly string[];

    /**
     * Конец периода.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly to?: string;
  };

  /**
   * Количество значений в ответе.
   *
   * Формат: `int64`. Минимум: `1`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit?: number;

  /**
   * Параметр, по которому сортируются отправления: - `last_change_status_date` — по дате последнего
   * изменения статуса; - `in_process_at` — по дате начала обработки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_by?: string;

  /**
   * Направление сортировки: - `ASC` — по возрастанию; - `DESC` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir?: OzonFbpPostingSortDirection;
}

export interface OzonFbpPostingListMoney {
  readonly amount?: string;
  readonly currency?: string;
}

export interface OzonFbpPostingListCommission {
  readonly amount?: number;
  readonly payout?: number;
  readonly percent?: number;
}

export interface OzonFbpPostingListItem {
  readonly financial_data?: {
    readonly cluster_from?: string;
    readonly cluster_to?: string;
    readonly delivery_amount?: number;
    readonly products?: readonly {
      readonly actions?: readonly {
        readonly action_id?: string;
        readonly date_from?: string;
        readonly date_to?: string;
        readonly description?: string;
        readonly discount_percent?: number;
        readonly discount_value?: number;
        readonly is_from_seller?: boolean;
      }[];
      readonly commissions_currency_code?: string;
      readonly old_price?: number;
      readonly posting_commission?: OzonFbpPostingListCommission;
      readonly price?: number;
      readonly product_id?: number;
      readonly quantity?: number;
      readonly return_commission?: OzonFbpPostingListCommission;
      readonly total_discount_percent?: number;
      readonly total_discount_value?: number;
    }[];
  };
  readonly in_process_at?: string;
  readonly order_date?: string;
  readonly order_id?: number;
  readonly order_number?: string;
  readonly posting_number?: string;
  readonly products?: readonly {
    readonly customer_price?: OzonFbpPostingListMoney;
    readonly name?: string;
    readonly offer_id?: string;
    readonly price?: OzonFbpPostingListMoney;
    readonly quantity?: number;
    readonly seller_price?: OzonFbpPostingListMoney;
    readonly sku?: number;
  }[];
  readonly provider_id?: number;
  readonly status?: string;
}

export interface ListFbpPostingsV1Response {
  readonly cursor?: string;
  readonly postings?: readonly OzonFbpPostingListItem[];
}
