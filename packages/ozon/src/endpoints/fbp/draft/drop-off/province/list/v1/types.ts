export interface ListFbpDropOffProvincesV1Request {
  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}
export interface ListFbpDropOffProvincesV1Response {
  readonly provinces?: readonly {
    readonly name?: string;
    readonly points_count?: number;
    readonly province_uuid?: string;
  }[];
}
