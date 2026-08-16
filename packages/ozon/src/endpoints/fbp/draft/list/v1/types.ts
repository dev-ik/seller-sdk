import type { OzonFbpArchiveDeliveryDetails } from "../../../archive/shared/v1/types.js";
import type { OzonFbpDraftStatus } from "../../get/v1/types.js";
import type { OzonFbpCancellationState } from "../../shared/v1/types.js";

export interface ListFbpDraftsV1Request {
  /**
   * Количество элементов в ответе.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly count: number;

  /**
   * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого
   * запроса. Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: number;
}

export interface OzonFbpDraftListItem {
  readonly bundle_id?: string;
  readonly cancellation_state?: OzonFbpCancellationState;
  readonly created_at?: string;
  readonly deleted_at?: string;
  readonly delivery_details?: OzonFbpArchiveDeliveryDetails;
  readonly editable?: boolean;
  readonly id?: number;
  readonly is_cancelable?: boolean;
  readonly is_deletable?: boolean;
  readonly locked?: boolean;
  readonly package_units_count?: number;
  readonly status?: OzonFbpDraftStatus;
  readonly supply_id?: string;
  readonly warehouse_id?: number;
}

export interface ListFbpDraftsV1Response {
  readonly has_next?: boolean;
  readonly items?: readonly OzonFbpDraftListItem[];
  readonly last_id?: number;
}
