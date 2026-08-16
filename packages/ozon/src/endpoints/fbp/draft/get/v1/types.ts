import type { OzonFbpArchiveDeliveryDetails } from "../../../archive/shared/v1/types.js";
import type { OzonFbpCancellationState } from "../../shared/v1/types.js";

export type OzonFbpDraftStatus =
  | "DRAFT_STATUS_UNSPECIFIED"
  | "NEW"
  | "SUPPLY_VARIANT_CONFIRMATION"
  | "SUPPLY_NOT_CONFIRMED";

export interface GetFbpDraftV1Request {
  /**
   * Идентификатор поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}

export interface GetFbpDraftV1Response {
  readonly bundle_id?: string;
  readonly cancellation_state?: OzonFbpCancellationState;
  readonly created_at?: string;
  readonly decline_reason?: {
    readonly failed_sku_ids?: readonly string[];
    readonly message?: string;
  };
  readonly deleted_at?: string;
  readonly delivery_details?: OzonFbpArchiveDeliveryDetails;
  readonly editable?: boolean;
  readonly id?: number;
  readonly is_cancelable?: boolean;
  readonly is_deletable?: boolean;
  readonly is_registration_available?: boolean;
  readonly locked?: boolean;
  readonly package_units_count?: number;
  readonly row_version?: number;
  readonly status?: OzonFbpDraftStatus;
  readonly supply_id?: string;
  readonly warehouse_id?: number;
}
