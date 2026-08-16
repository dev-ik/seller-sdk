export interface ListFbpDropOffPointsV1Request {
  /**
   * Следующий номер страницы.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly next_page_number?: number;

  /**
   * Количество элементов на странице.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly page_size: number;

  /**
   * Уникальный идентификатор провинции.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly province_uuid: string;

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}
export interface ListFbpDropOffPointsV1Response {
  readonly drop_off_points?: readonly {
    readonly city?: string;
    readonly drop_off_point_id?: number;
    readonly nearest_drop_off_date?: string;
    readonly point_address?: string;
    readonly province_uuid?: string;
  }[];
}
