export interface ListAvailableFbsCarriagesRequest {
  /**
   * Фильтр по методу доставки. Можно получить с помощью метода
   * [/v2/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodListV2).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method_id: number;

  /**
   * Дата отгрузки. По умолчанию — текущая дата.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly departure_date?: string;
}
export interface OzonAvailableFbsCarriageError {
  readonly code?: string;
  readonly status?: string;
}
export interface OzonAvailableFbsCarriage {
  readonly carriage_id?: number;
  readonly carriage_postings_count?: number;
  readonly carriage_status?: string;
  readonly cutoff_at?: string;
  readonly delivery_method_id?: number;
  readonly delivery_method_name?: string;
  readonly errors?: readonly OzonAvailableFbsCarriageError[];
  readonly first_mile_type?: string;
  readonly has_entrusted_acceptance?: boolean;
  readonly mandatory_postings_count?: number;
  readonly mandatory_packaged_count?: number;
  readonly recommended_time_local?: string;
  readonly recommended_time_utc_offset_in_minutes?: number;
  readonly tpl_provider_icon_url?: string;
  readonly tpl_provider_name?: string;
  readonly warehouse_city?: string;
  readonly warehouse_id?: number;
  readonly warehouse_name?: string;
  readonly warehouse_timezone?: string;
}
export interface ListAvailableFbsCarriagesResponse {
  readonly result?: readonly OzonAvailableFbsCarriage[];
}
