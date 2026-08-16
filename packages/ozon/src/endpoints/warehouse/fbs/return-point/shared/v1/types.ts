import type { OzonWarehouseCoordinates } from "../../../shared/v1/types.js";

export type OzonReturnPointType = "UNSPECIFIED" | "PVZ" | "PPZ" | "SC";
export type OzonReturnPointWorkingDay =
  | "UNSPECIFIED"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

export interface OzonWarehouseReturnPoint {
  readonly address?: string;
  readonly coordinates?: Partial<OzonWarehouseCoordinates>;
  readonly id?: number;
  readonly name?: string;
  readonly type?: OzonReturnPointType;
  readonly utc_offset?: number;
  readonly working_days?: readonly {
    readonly day?: OzonReturnPointWorkingDay;
    readonly from?: string;
    readonly to?: string;
  }[];
}

export interface OzonWarehouseReturnPointListResponse {
  readonly has_next?: boolean;
  readonly is_selected_point_available?: boolean;
  readonly last_id?: number;
  readonly points?: readonly OzonWarehouseReturnPoint[];
}
