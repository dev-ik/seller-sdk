export interface ListRemovalSummaryRequest {
  /**
   * Дата начала отчётного периода в формате `YYYY-MM-DD`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_from: string;

  /**
   * Дата окончания отчётного периода в формате `YYYY-MM-DD`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_to: string;

  /**
   * Идентификатор последнего значения на странице. Чтобы получить следующие значения, укажите
   * `last_id` из ответа предыдущего запроса.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: string;

  /**
   * Количество элементов в ответе.
   *
   * Формат: `int32`. Минимум: `1`. Максимум: `500`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
}

export interface OzonRemovalSummaryRow {
  readonly barcode?: string;
  readonly box_barcode?: string;
  readonly box_height?: number;
  readonly box_id?: number;
  readonly box_length?: number;
  readonly box_state?: string;
  readonly box_volume?: number;
  readonly box_weight?: number;
  readonly box_width?: number;
  readonly clearing_warehouse_name?: string;
  readonly delivery_date?: string;
  readonly delivery_type?: string;
  readonly destination_warehouse_address?: string;
  readonly destination_warehouse_name?: string;
  readonly given_out_date?: string;
  readonly is_auto_return?: boolean;
  readonly name?: string;
  readonly offer_id?: string;
  readonly preliminary_delivery_price?: number;
  readonly quant_count?: number;
  readonly quantity_for_return?: number;
  readonly return_created_at?: string;
  readonly return_id?: number;
  readonly return_state?: string;
  readonly sku?: number;
  readonly stock_type?: string;
  readonly utilization_date?: string;
}

export interface ListRemovalSummaryResponse {
  readonly last_id?: string;
  readonly returns_summary_report_rows?: readonly OzonRemovalSummaryRow[];
}
