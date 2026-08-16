export interface CreateDeliveryPolygonV1Request {
  /**
   * Координаты полигона доставки в формате `[[[lat long]]]`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly coordinates: string;
}

export interface CreateDeliveryPolygonV1Response {
  readonly polygon_id?: number;
}
