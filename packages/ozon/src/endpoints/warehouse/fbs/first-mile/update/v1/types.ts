import type { OzonFbsWarehouseFirstMileType } from "../../../create/v1/types.js";

export interface UpdateFbsWarehouseFirstMileV1Request {
  /**
   * Время на приём заказов в минутах. Например, если вы передадите `3000`, приём заказов будет
   * завершён через 50 часов с момента передачи.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cut_in_time: number;

  /**
   * Идентификатор drop-off пункта. Если `first_mile_type = DROP_OFF`, параметр обязательный.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly drop_off_point_id?: number;

  /**
   * Тип первой мили: - `PICK_UP` — отгрузка заказов курьеру; - `DROP_OFF` — отгрузка заказов в пункт
   * приёма.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly first_mile_type: OzonFbsWarehouseFirstMileType;

  /**
   * Идентификатор пункта возврата. Получите значение параметра методом
   * [/v1/warehouse/fbs/update/return-point/list](#operation/WarehouseFBSUpdateReturnPointList).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly return_point_id?: number;

  /**
   * Идентификатор таймслота.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly timeslot_id: number;

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export interface UpdateFbsWarehouseFirstMileV1Response {
  readonly operation_id?: string;
}
