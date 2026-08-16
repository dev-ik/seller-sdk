export type OzonFbpOrderValidationErrorType =
  | "ERROR_TYPE_UNSPECIFIED"
  | "DELIVERY_DRIVER_NAME_LENGTH_MAXIMUM_REACHED"
  | "DELIVERY_VEHICLE_GENRE_LENGTH_MAXIMUM_REACHED"
  | "DELIVERY_VEHICLE_REGISTRATION_PLATE_LENGTH_MAXIMUM_REACHED"
  | "DELIVERY_TPL_NAME_LENGTH_MAXIMUM_REACHED"
  | "DELIVERY_TRACKING_NUMBER_LENGTH_MAXIMUM_REACHED"
  | "DELIVERY_DRIVER_NAME_EMPTY"
  | "DELIVERY_VEHICLE_GENRE_EMPTY"
  | "DELIVERY_VEHICLE_REGISTRATION_PLATE_EMPTY"
  | "DELIVERY_TPL_NAME_EMPTY"
  | "DELIVERY_TRACKING_NUMBER_EMPTY"
  | "DELIVERY_BY_SELLER_EMPTY"
  | "DELIVERY_BY_TPL_EMPTY"
  | "RECEIVE_DATE_NOT_SET"
  | "SUPPLY_TYPE_NOT_SUPPORTED"
  | "INVALID_BUSINESS_FLOW"
  | "ORDER_LOCKED"
  | "INVALID_TIMESLOT"
  | "DROP_OFF_DETAILS_EMPTY"
  | "PICK_UP_ADDRESS_IS_EMPTY"
  | "PICK_UP_SENDER_NAME_IS_EMPTY"
  | "PICK_UP_SENDER_PHONE_IS_EMPTY"
  | "PICK_UP_ADDRESS_IS_TOO_LARGE"
  | "PICK_UP_SENDER_NAME_IS_TOO_LARGE"
  | "PICK_UP_SENDER_PHONE_IS_TOO_LARGE"
  | "PICK_UP_COMMENT_IS_TOO_LARGE"
  | "PICK_UP_DETAILS_EMPTY"
  | "DROP_OFF_ADDRESS_NOT_SET"
  | "INVALID_STATE";

export interface OzonFbpOrderMutationResponse {
  readonly error?: {
    readonly order_errors?: readonly OzonFbpOrderValidationErrorType[];
  };
  readonly is_error?: boolean;
  readonly row_version?: number;
}

export type OzonFbpOrderAttentionReason =
  | "ORDER_ATTENTION_TYPE_UNSPECIFIED"
  | "OLD"
  | "TIME_SLOT_EXPIRED";

export type OzonFbpOrderStatus =
  | "ORDER_STATUS_UNSPECIFIED"
  | "READY_TO_SUPPLY"
  | "FILLING_DELIVERY_DETAILS"
  | "COURIER_ASSIGNED"
  | "COURIER_PICKED_UP"
  | "ACCEPTANCE_AT_DROP_OFF_POINT"
  | "IN_TRANSIT_TO_STORAGE_WAREHOUSE"
  | "ACCEPTANCE_AT_STORAGE_WAREHOUSE"
  | "CANCELLED";

export interface OzonFbpOrderDetails {
  readonly attention_reasons?: readonly OzonFbpOrderAttentionReason[];
  readonly bundle_summary?: {
    readonly rounded_total_volume_in_litres?: number;
    readonly total_item_count?: number;
    readonly total_quantity?: number;
  };
  readonly bundle_uuid?: string;
  readonly can_be_cancelled?: boolean;
  readonly cancellation_state?: OzonFbpCancellationState;
  readonly created_date?: string;
  readonly delivery_details?: OzonFbpArchiveDeliveryDetails;
  readonly draft_id?: number;
  readonly has_consignment_note?: boolean;
  readonly has_label?: boolean;
  readonly id?: number;
  readonly locked?: boolean;
  readonly order_number?: string;
  readonly package_units_count?: number;
  readonly receive_date?: string;
  readonly row_version?: number;
  readonly status?: OzonFbpOrderStatus;
  readonly supply_id?: string;
  readonly warehouse_id?: number;
}
import type { OzonFbpArchiveDeliveryDetails } from "../../../archive/shared/v1/types.js";
import type { OzonFbpCancellationState } from "../../../draft/shared/v1/types.js";
