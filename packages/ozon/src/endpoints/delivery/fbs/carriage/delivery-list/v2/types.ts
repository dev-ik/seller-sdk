export interface ListFbsCarriageDeliveriesV2Request {
  /**
   * Указатель для выборки следующих данных.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cursor?: string;

  /**
   * Фильтр для поиска методов доставки и отгрузок.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: {
    /**
     * Идентификатор метода доставки. Для realFBS-складов получите его с помощью метода
     * [/v2/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodListV2). Для FBS-складов
     * используйте значение параметра `warehouse_id`. Его можно получить с помощью метода
     * [/v2/warehouse/list](#operation/WarehouseListV2).
     *
     * Формат: `int64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly delivery_method_id?: number;

    /**
     * Дата отгрузки. По умолчанию — текущая дата.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly departure_date?: string;
  };

  /**
   * Количество значений на странице.
   *
   * Формат: `int64`. Максимум: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
}

export interface OzonFbsCarriagePickupFeeV2 {
  readonly currency_code?: string;
  readonly value?: number;
}
export interface OzonFbsCarriageSummaryV2 {
  readonly all_blr_traceable?: boolean;
  readonly available_actions?: readonly string[];
  readonly carriage_volume?: number;
  readonly id?: number;
  readonly pickup_fee?: OzonFbsCarriagePickupFeeV2;
  readonly postings_count?: number;
  readonly quantum_count?: number;
  readonly status?: string;
}
export interface OzonFbsCarriageDeliveryErrorV2 {
  readonly code?: string;
  readonly description?: string;
  readonly status?: string;
}
export interface OzonFbsCarriageDeliveryMethodV2 {
  readonly carriage_postings_count?: number;
  readonly carriages?: readonly OzonFbsCarriageSummaryV2[];
  readonly cut_in?: string;
  readonly cutoff_at?: string;
  readonly delivery_method_id?: number;
  readonly delivery_method_name?: string;
  readonly delivery_method_status?: string;
  readonly departure_date?: string;
  readonly dropoff_address?: string;
  readonly dropoff_change_availability?: string;
  readonly dropoff_point_id?: number;
  readonly dropoff_point_type?: string;
  readonly errors?: readonly OzonFbsCarriageDeliveryErrorV2[];
  readonly first_mile_changing?: boolean;
  readonly first_mile_type?: string;
  readonly has_entrusted_acceptance?: boolean;
  readonly integration_type?: string;
  readonly is_optional_carriage?: boolean;
  readonly is_presort?: boolean;
  readonly is_rfbs?: boolean;
  readonly mandatory_packaged_count?: number;
  readonly mandatory_postings_count?: number;
  readonly optional_packaged_count?: number;
  readonly recommended_time_local?: string;
  readonly recommended_time_utc_offset_in_minutes?: number;
  readonly timeslot_from?: string;
  readonly timeslot_to?: string;
  readonly tpl_provider_icon_url?: string;
  readonly tpl_provider_name?: string;
  readonly warehouse_city?: string;
  readonly warehouse_id?: number;
  readonly warehouse_name?: string;
}
export interface ListFbsCarriageDeliveriesV2Response {
  readonly cursor?: string;
  readonly has_next?: boolean;
  readonly methods?: readonly OzonFbsCarriageDeliveryMethodV2[];
}
