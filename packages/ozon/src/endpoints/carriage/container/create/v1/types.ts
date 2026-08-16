export interface CreateCarriageContainersV1Request {
  /**
   * Тип грузоместа: - `box` — коробка; - `pallet` — палета.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cargo_type: string;

  /**
   * Количество грузомест.
   *
   * Формат: `int32`. Минимум: `1`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly containers_count: number;

  /**
   * Тип сортировки: - `sort` — сортируемый; - `non-sort` — несортируемый.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_type: string;

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export interface CreateCarriageContainersV1Response {
  readonly container_ids?: readonly string[];
}
