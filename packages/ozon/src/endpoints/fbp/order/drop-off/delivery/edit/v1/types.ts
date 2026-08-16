export interface EditFbpDropOffOrderDeliveryV1Request {
  /**
   * Дата прибытия поставки на drop-off пункт.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly drop_off_date: string;

  /**
   * Идентификатор актуальной версии черновика.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly row_version: number;

  /**
   * Идентификатор поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}

export interface EditFbpDropOffOrderDeliveryV1Response {
  readonly row_version?: number;
}
