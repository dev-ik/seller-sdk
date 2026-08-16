export interface OzonFbpArchiveTimeslot {
  readonly timeslot_end?: string;
  readonly timeslot_start?: string;
}

export type OzonFbpArchiveSupplyType =
  | "SUPPLY_TYPE_UNSPECIFIED"
  | "DIRECT_BY_SELLER"
  | "DIRECT_BY_TPL"
  | "DROP_OFF"
  | "PICK_UP";

export interface OzonFbpArchiveDeliveryDetails {
  readonly direct_details?: {
    readonly by_seller_details?: {
      readonly driver_name?: string;
      readonly vehicle_registration_number?: string;
      readonly vehicle_type?: string;
    };
    readonly by_tpl_details?: {
      readonly tracking_number?: string;
      readonly transport_company_name?: string;
    };
    readonly timeslot_details?: {
      readonly timeslot?: OzonFbpArchiveTimeslot;
      readonly timeslot_reservation_id?: string;
    };
  };
  readonly drop_off_point?: {
    readonly id?: number;
    readonly province_uuid?: string;
    readonly timeslot?: OzonFbpArchiveTimeslot;
  };
  readonly pickup_details?: {
    readonly address?: string;
    readonly comment?: string;
    readonly date?: string;
    readonly sender_name?: string;
    readonly sender_phone?: string;
  };
  readonly supply_type?: OzonFbpArchiveSupplyType;
}

export type OzonFbpArchiveDeclineCode =
  | "DECLINE_REASON_CODE_UNSPECIFIED"
  | "CANNOT_CREATE_SUPPLY_ON_TPF"
  | "DROP_OFF_POINT_CLOSED"
  | "CODE_SUPPLY_LOST"
  | "COURIER_PICK_UP_REJECTED_BY_SELLER"
  | "BONDED_DOCUMENTS_REJECTED_BY_WAREHOUSE";

export type OzonFbpArchiveStatus =
  | "ARCHIVE_STATUS_UNSPECIFIED"
  | "COMPLETED"
  | "REJECTED_AT_SUPPLY_WAREHOUSE"
  | "CANCELLED_BY_SELLER";

export interface OzonFbpArchiveSupply {
  readonly act_file_uuid?: string;
  readonly bundle_id?: string;
  readonly bundle_sku_summary?: {
    readonly rounded_total_volume_in_litres?: number;
    readonly total_items_count?: number;
    readonly total_quantity?: number;
  };
  readonly business_flow_type_id?: number;
  readonly created_date?: string;
  readonly decline_reason?: {
    readonly code?: OzonFbpArchiveDeclineCode;
    readonly message?: string;
  };
  readonly delivery_details?: OzonFbpArchiveDeliveryDetails;
  readonly has_act?: boolean;
  readonly has_label?: boolean;
  readonly id?: number;
  readonly order_draft_id?: number;
  readonly order_number?: string;
  readonly package_units_count?: number;
  readonly receive_date?: string;
  readonly row_version?: number;
  readonly status?: OzonFbpArchiveStatus;
  readonly supply_id?: string;
  readonly warehouse_id?: number;
}
