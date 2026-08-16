import type { OzonWarehouseReturnPoint } from "../../../return-point/shared/v1/types.js";

export interface GetFbsWarehouseReturnMileInfoV1Request {
  /**
   * Идентификаторы складов.
   *
   * Минимум: `1`. Максимум: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_ids: readonly string[];
}

export interface GetFbsWarehouseReturnMileInfoV1Response {
  readonly return_mile_settings?: readonly {
    readonly is_return_mile_required?: boolean;
    readonly return_point?: OzonWarehouseReturnPoint;
    readonly warehouse_id?: number;
  }[];
}
