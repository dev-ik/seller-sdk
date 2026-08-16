export interface ListDeliveryPolygonsV1Request {
  /**
   * Идентификатор метода доставки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method_id: number;

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export interface OzonDeliveryPolygon {
  readonly coordinates?: string;
  readonly polygon_id?: number;
  readonly time?: number;
}

export interface ListDeliveryPolygonsV1Response {
  readonly polygons?: readonly OzonDeliveryPolygon[];
}
