export interface OzonDeliveryPolygonBinding {
  /**
   * Идентификатор полигона.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly polygon_id: number;

  /**
   * Время в минутах, за которое доставят товар в этом полигоне.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly time: number;
}

export interface BindDeliveryPolygonV1Request {
  /**
   * Идентификатор метода доставки.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method_id: number;

  /**
   * Список полигонов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly polygons: readonly OzonDeliveryPolygonBinding[];

  /**
   * Расположение склада.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_location: {
    /**
     * Географическая широта расположения склада.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly lat: string;

    /**
     * Географическая долгота расположения склада.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly lon: string;
  };
}

export type BindDeliveryPolygonV1Response = Readonly<Record<string, never>>;
