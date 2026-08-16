export interface ListFbsPickupHistoryV1Request {
  /**
   * Указатель для выборки следующих данных.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cursor?: string;

  /**
   * Фильтр.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: {
    /**
     * Дата отгрузки.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly planned_date?: string;

    /**
     * Идентификаторы складов.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly warehouse_id?: readonly string[];

    /**
     * `true`, если отгрузка запланирована.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly was_planned?: boolean;
  };

  /**
   * Количество значений на странице.
   *
   * Формат: `int64`. Минимум: `1`. Максимум: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
}

export interface OzonFbsPickupHistoryEntry {
  readonly planned_date?: string;
  readonly status?: string;
  readonly updated_at?: string;
  readonly warehouse_id?: number;
  readonly warehouse_name?: string;
  readonly was_planned?: boolean;
}

export interface ListFbsPickupHistoryV1Response {
  readonly result?: {
    readonly cursor?: string;
    readonly history?: readonly OzonFbsPickupHistoryEntry[];
  };
}
