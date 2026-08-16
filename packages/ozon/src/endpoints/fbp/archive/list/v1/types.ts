import type {
  OzonFbpArchiveDeclineCode,
  OzonFbpArchiveDeliveryDetails,
  OzonFbpArchiveStatus,
} from "../../shared/v1/types.js";

export interface ListFbpArchiveSuppliesV1Request {
  /**
   * Количество элементов в ответе.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly count: string;

  /**
   * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого
   * запроса. Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: string;
}

export interface OzonFbpArchiveListItem {
  readonly act_file_uuid?: string;
  readonly bundle_id?: string;
  readonly bundle_sku_summary?: {
    readonly rounded_total_volume_in_litres?: number;
    readonly total_items_count?: number;
    readonly total_quantity?: number;
  };
  readonly created_date?: string;
  readonly decline_reason?: {
    readonly code?: OzonFbpArchiveDeclineCode;
    readonly message?: string;
  };
  readonly delivery_details?: OzonFbpArchiveDeliveryDetails;
  readonly external_order_id?: string;
  readonly has_act?: boolean;
  readonly has_label?: boolean;
  readonly order_draft_id?: number;
  readonly package_units_count?: number;
  readonly receive_date?: string;
  readonly row_version?: number;
  readonly status?: OzonFbpArchiveStatus;
  readonly supply_id?: string;
  readonly warehouse_id?: number;
  readonly whc_order_id?: number;
}

export interface ListFbpArchiveSuppliesV1Response {
  readonly has_next?: boolean;
  readonly items?: readonly OzonFbpArchiveListItem[];
  readonly last_id?: number;
}
