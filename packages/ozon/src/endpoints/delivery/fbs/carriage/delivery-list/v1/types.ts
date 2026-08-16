export interface ListFbsCarriageDeliveriesV1Request {
  /**
   * Идентификатор метода доставки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method_id?: number;

  /**
   * Дата отгрузки. По умолчанию — текущая дата.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly departure_date?: string;
}

export interface OzonFbsCarriageDeliveryErrorV1 {
  readonly code?: string;
  readonly description?: string;
  readonly status?: string;
}

export interface OzonFbsCarriageSummaryV1 {
  readonly id?: string;
  readonly postings_count?: number;
  readonly quantum_count?: number;
  readonly status?: string;
}

export interface OzonFbsCarriageDeliveryMethodV1 {
  readonly assembly_list_availability?: boolean;
  readonly can_create_another_carriage?: boolean;
  readonly carriage_postings_count?: number;
  readonly carriage_quantum_count?: number;
  readonly carriages?: readonly OzonFbsCarriageSummaryV1[];
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
  readonly errors?: readonly OzonFbsCarriageDeliveryErrorV1[];
  readonly first_mile_changing?: boolean;
  readonly first_mile_type?: string;
  readonly has_entrusted_acceptance?: boolean;
  readonly integration_type?: string;
  readonly is_presort?: boolean;
  readonly is_rfbs?: boolean;
  readonly mandatory_packaged_count?: number;
  readonly mandatory_packaged_quantum_count?: number;
  readonly mandatory_postings_count?: number;
  readonly mandatory_quantum_count?: number;
  readonly optional_packaged_count?: number;
  readonly postings_for_another_carriage_count?: number;
  readonly quantum_for_another_carriage_count?: number;
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

export interface ListFbsCarriageDeliveriesV1Response {
  readonly result?: readonly OzonFbsCarriageDeliveryMethodV1[];
}
