import type { OzonWarehouseOperationResponse } from "../operation/shared/types.js";

export interface ArchiveFbsWarehouseRequest {
  /**
   * Причина переноса склада в архив.
   *
   * Максимальная длина: `200`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly reason: string;

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

export type ArchiveFbsWarehouseResponse = OzonWarehouseOperationResponse;
