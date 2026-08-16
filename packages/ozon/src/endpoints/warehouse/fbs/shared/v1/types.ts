export interface OzonWarehouseCoordinates {
  /**
   * Широта.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly latitude: number;

  /**
   * Долгота.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly longitude: number;
}

export type OzonDropOffPointType = "PVZ" | "PPZ" | "SC";

export interface OzonDropOffPoint {
  readonly address?: string;
  readonly coordinates?: Partial<OzonWarehouseCoordinates>;
  readonly discount_percent?: number;
  readonly id?: string;
  readonly last_transit_time_local?: {
    readonly hours?: number;
    readonly minutes?: number;
    readonly nanos?: number;
    readonly seconds?: number;
  };
  readonly type?: OzonDropOffPointType;
}

export interface OzonWarehouseTimeslot {
  readonly acceptance_end_time_local?: string;
  readonly acceptance_start_time_local?: string;
  readonly from?: string;
  readonly id?: number;
  readonly to?: string;
}

export interface OzonWarehouseTimeslotsResponse {
  readonly timeslots?: readonly OzonWarehouseTimeslot[];
}
