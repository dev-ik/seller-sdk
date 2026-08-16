export interface EditFbpDropOffDeliveryV1Request {
  /**
   * Дата доставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly drop_off_date: string;

  /**
   * Идентификатор drop-off пункта.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly drop_off_point_id: number;

  /**
   * Уникальный идентификатор провинции.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly drop_off_province_uuid: string;

  /**
   * Идентификатор актуальной версии черновика.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly row_version: number;

  /**
   * Идентификатор заявки на поставку.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}
export interface EditFbpDropOffDeliveryV1Response {
  readonly row_version?: number;
}
