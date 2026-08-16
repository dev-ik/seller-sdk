export interface DeleteDeliveryPolygonV1Request {
  /**
   * Идентификатор метода доставки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method_id: number;

  /**
   * Идентификатор полигона.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly polygon_id: number;

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export type DeleteDeliveryPolygonV1Response = void;
