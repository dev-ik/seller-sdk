export interface GetFbsCarriageRequest {
  /**
   * Идентификатор перевозки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly carriage_id: number;
}
export interface GetFbsCarriageResponse {
  readonly act_type?: string;
  readonly all_blr_traceable?: boolean;
  readonly is_waybill_enabled?: boolean;
  readonly is_econom?: boolean;
  readonly arrival_pass_ids?: readonly string[];
  readonly available_actions?: readonly string[];
  readonly cancel_availability?: {
    readonly is_cancel_available?: boolean;
    readonly reason?: string;
  };
  readonly carriage_id?: number;
  readonly company_id?: number;
  readonly containers_count?: number;
  readonly created_at?: string;
  readonly delivery_method_id?: number;
  readonly departure_date?: string;
  readonly first_mile_type?: string;
  readonly has_postings_for_next_carriage?: boolean;
  readonly integration_type?: string;
  readonly is_container_label_printed?: boolean;
  readonly is_partial?: boolean;
  readonly partial_num?: number;
  readonly retry_count?: number;
  readonly status?: string;
  readonly tpl_provider_id?: number;
  readonly updated_at?: string;
  readonly warehouse_id?: number;
}
