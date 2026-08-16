export type OzonDeliveryPolygonTime = 15 | 30 | 45 | 60 | 90 | 120 | 150;

export interface SetDeliveryPolygonTimeV1Request {
  /**
   * Текущее время доставки в минутах.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly current_time: OzonDeliveryPolygonTime;

  /**
   * Идентификатор метода доставки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method_id: number;

  /**
   * Новое время доставки в минутах.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly new_time: OzonDeliveryPolygonTime;

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

export type SetDeliveryPolygonTimeV1Response = void;
