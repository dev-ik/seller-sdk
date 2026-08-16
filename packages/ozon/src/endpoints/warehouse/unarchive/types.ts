import type { OzonWarehouseOperationResponse } from "../operation/shared/types.js";

export interface UnarchiveFbsWarehouseRequest {
  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;

  /**
   * Идентификатор пункта возврата. Получите значение параметра методом
   * [/v1/warehouse/fbs/update/return-point/list](#operation/WarehouseFBSUpdateReturnPointList).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly return_point_id?: number;
}

export type UnarchiveFbsWarehouseResponse = OzonWarehouseOperationResponse;
