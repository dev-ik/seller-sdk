import type { OzonErfbsSchedule } from "../../shared/v1/types.js";
import type { OzonWarehouseOperationResponse } from "../../../operation/shared/types.js";

export interface UpdateErfbsWarehouseV1Request {
  /**
   * `true`, если на складе доступна автосборка.
   *
   * Пример: `false`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_auto_assembly?: boolean;

  /**
   * Минимальная стоимость заказа.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly min_order_value?: number;

  /**
   * Название склада.
   *
   * Максимальная длина: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly name?: string;

  /**
   * Номер телефона склада.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly phone?: string;

  /**
   * Расписание работы склада.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly timetable_warehouse?: OzonErfbsSchedule;

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export type UpdateErfbsWarehouseV1Response = OzonWarehouseOperationResponse;
