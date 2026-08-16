import type { OzonDeliveryCoordinates } from "../../../shared/v1/types.js";

export interface GetDeliveryPointInfoV1Request {
  /**
   * Идентификаторы точек на карте.
   *
   * Максимум элементов: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly map_point_ids?: readonly string[];
}

export interface OzonDeliveryPointTime {
  readonly hours?: number;
  readonly minutes?: number;
}

export interface OzonDeliveryPointWorkingPeriod {
  readonly max?: OzonDeliveryPointTime;
  readonly min?: OzonDeliveryPointTime;
}

export interface OzonDeliveryPointMethod {
  readonly address?: string;
  readonly address_details?: {
    readonly city?: string;
    readonly house?: string;
    readonly region?: string;
    readonly street?: string;
  };
  readonly coordinates?: OzonDeliveryCoordinates;
  readonly delivery_type?: { readonly id?: number; readonly name?: string };
  readonly description?: string;
  readonly fitting_rooms_count?: number;
  readonly holidays?: readonly {
    readonly begin?: string;
    readonly end?: string;
  }[];
  readonly holidays_filled?: boolean;
  readonly images?: readonly string[];
  readonly location_id?: string;
  readonly map_point_id?: number;
  readonly name?: string;
  readonly properties?: readonly {
    readonly enabled?: boolean;
    readonly name?: string;
  }[];
  readonly pvz_rating?: number;
  readonly storage_period?: number;
  readonly working_hours?: readonly {
    readonly date?: string;
    readonly periods?: readonly OzonDeliveryPointWorkingPeriod[];
  }[];
}

export interface OzonDeliveryPointInfo {
  readonly delivery_method?: OzonDeliveryPointMethod;
  readonly enabled?: boolean;
}

export interface GetDeliveryPointInfoV1Response {
  readonly points?: readonly OzonDeliveryPointInfo[];
}
