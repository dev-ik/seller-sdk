export type OzonWarehouseCarriageLabelType = "UNSPECIFIED" | "BIG" | "SMALL";
export type OzonWarehouseFirstMileType = "UNSPECIFIED" | "PICK_UP" | "DROP_OFF";
export type OzonWarehouseWorkingDay =
  | "UNSPECIFIED"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

export interface ListWarehousesV2Request {
  /**
   * Количество значений в ответе.
   *
   * Максимум: `200`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Указатель для выборки следующих данных.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cursor?: string;

  /**
   * Идентификаторы складов.
   *
   * Максимум: `200`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_ids?: readonly string[];
}

export interface OzonWarehouseAddressInfo {
  readonly address?: string;
  readonly latitude?: number;
  readonly longitude?: number;
  readonly utc?: string;
}

export interface OzonWarehouseFirstMileV2 {
  readonly dropoff_point_id?: string;
  readonly first_mile_is_changing?: boolean;
  readonly timeslot_from?: string;
  readonly timeslot_id?: number;
  readonly timeslot_to?: string;
  readonly type?: OzonWarehouseFirstMileType;
}

export interface OzonWarehouseWorkingHours {
  readonly time_from?: string;
  readonly time_to?: string;
}

export interface OzonWarehouseTimetable {
  readonly timetable_from?: string;
  readonly timetable_to?: string;
  readonly working_hours?: readonly OzonWarehouseWorkingHours[];
}

export interface OzonSellerWarehouseV2 {
  readonly address_info?: OzonWarehouseAddressInfo;
  readonly carriage_label_type?: OzonWarehouseCarriageLabelType;
  readonly courier_comment?: string;
  readonly courier_phones?: readonly string[];
  readonly created_at?: string;
  readonly cut_in_time?: number;
  readonly first_mile?: OzonWarehouseFirstMileV2;
  readonly has_entrusted_acceptance?: boolean;
  readonly has_postings_limit?: boolean;
  readonly is_auto_assembly?: boolean;
  readonly is_comfort?: boolean;
  readonly is_express?: boolean;
  readonly is_kgt?: boolean;
  readonly is_rfbs?: boolean;
  readonly is_waybill_enabled?: boolean;
  readonly min_postings_limit?: number;
  readonly name?: string;
  readonly pause_at?: string | null;
  readonly phone?: string;
  readonly postings_limit?: number;
  readonly sla_cut_in?: number;
  readonly status?: string;
  readonly timetable?: OzonWarehouseTimetable;
  readonly updated_at?: string;
  readonly warehouse_id?: number;
  readonly warehouse_type?: string;
  readonly with_item_list?: boolean;
  readonly working_days?: readonly OzonWarehouseWorkingDay[];
}

export interface ListWarehousesV2Response {
  readonly cursor?: string;
  readonly warehouses?: readonly OzonSellerWarehouseV2[];
  readonly has_next?: boolean;
}
