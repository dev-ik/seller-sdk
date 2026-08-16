import type { OzonDeliveryCoordinates } from "../../../shared/v1/types.js";

export interface OzonDeliveryPointListItem {
  readonly coordinate?: OzonDeliveryCoordinates;
  readonly map_point_id?: number;
}

export interface ListDeliveryPointsV1Response {
  readonly points?: readonly OzonDeliveryPointListItem[];
}
