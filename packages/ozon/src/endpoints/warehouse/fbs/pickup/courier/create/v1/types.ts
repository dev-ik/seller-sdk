export interface CreateFbsPickupCourierCallV1Request {
  /**
   * Идентификатор склада. Чтобы получить список складов для планирования выездов, используйте
   * [/v1/warehouse/fbs/pickup/planning/list](#operation/WarehouseFbsPickUpPlanningList).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export type CreateFbsPickupCourierCallV1Response = void;
