import type {
  OzonFboPostingAdditionalData,
  OzonFboPostingAnalyticsData,
  OzonFboPostingExternalOrder,
  OzonFboPostingLegalInfo,
  OzonFboPostingWith,
} from "../../shared/types.js";
export type OzonFboPostingSortDirectionV3 = "ASC" | "DESC";
export interface OzonFboPostingListFilterV3 {
  /**
   * Номера заказов, к которым относятся отправления.
   *
   * Максимум элементов: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_numbers?: readonly string[];

  /**
   * Идентификаторы отправлений.
   *
   * Максимум элементов: `1000`.
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
   * Статус отправления: - `awaiting_packaging` — ожидает упаковки; - `awaiting_deliver` — ожидает
   * отгрузки; - `delivering` — доставляется; - `delivered` — доставлено; - `cancelled` — отменено.
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
}
export interface ListFboPostingsV3Request {
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
  readonly filter?: OzonFboPostingListFilterV3;

  /**
   * Количество значений в ответе.
   *
   * Формат: `int64`. Минимум: `1`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit?: number;

  /**
   * Направление сортировки: - `ASC` — по возрастанию; - `DESC` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir?: OzonFboPostingSortDirectionV3;

  /**
   * `true`, чтобы включить транслитерацию адреса из кириллицы в латиницу.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly translit?: boolean;

  /**
   * Дополнительные поля, которые нужно добавить в ответ.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly with?: OzonFboPostingWith;
}
export interface OzonFboPostingCancellationV3 {
  readonly cancel_reason?: string;
  readonly cancellation_initiator?: string;
  readonly cancellation_type?: string;
}
export interface OzonFboPostingCommissionV3 {
  readonly amount?: number;
  readonly currency?: string;
  readonly percent?: number;
}
export interface OzonFboPostingFinancialProductV3 {
  readonly actions?: readonly string[];
  readonly commission?: OzonFboPostingCommissionV3;
  readonly old_price?: number;
  readonly payout?: number;
  readonly price?: number;
  readonly product_id?: number;
  readonly total_discount_percent?: number;
  readonly total_discount_value?: number;
}
export interface OzonFboPostingFinancialDataV3 {
  readonly cluster_from?: string;
  readonly cluster_to?: string;
  readonly products?: readonly OzonFboPostingFinancialProductV3[];
}
export interface OzonFboPostingMoney {
  readonly amount?: string;
  readonly currency?: string;
}
export interface OzonFboPostingProductV3 {
  readonly digital_codes?: readonly string[];
  readonly is_marketplace_buyout?: boolean;
  readonly name?: string;
  readonly offer_id?: string;
  readonly price?: OzonFboPostingMoney;
  readonly quantity?: number;
  readonly sku?: number;
}
export interface OzonFboPostingV3 {
  readonly additional_data?: readonly OzonFboPostingAdditionalData[];
  readonly analytics_data?: OzonFboPostingAnalyticsData;
  readonly cancel_reason_id?: number;
  readonly cancellation?: OzonFboPostingCancellationV3;
  readonly created_at?: string;
  readonly external_order?: OzonFboPostingExternalOrder;
  readonly financial_data?: OzonFboPostingFinancialDataV3;
  readonly in_process_at?: string;
  readonly legal_info?: OzonFboPostingLegalInfo;
  readonly order_id?: number;
  readonly order_number?: string;
  readonly posting_number?: string;
  readonly products?: readonly OzonFboPostingProductV3[];
  readonly status?: string;
  readonly substatus?: string;
}
export interface ListFboPostingsV3Response {
  readonly cursor?: string;
  readonly has_next?: boolean;
  readonly postings?: readonly OzonFboPostingV3[];
}
