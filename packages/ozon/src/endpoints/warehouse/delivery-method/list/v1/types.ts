export interface ListDeliveryMethodsV1Request {
  /**
   * Количество элементов в ответе. Максимум — 50, минимум — 1.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ
   * начнётся с 11-го найденного элемента.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offset?: number;

  /**
   * Фильтр для поиска методов доставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: {
    /**
     * Идентификатор службы доставки.
     *
     * Формат: `int64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly provider_id?: number;

    /**
     * Статус метода доставки: - `NEW` — создан, - `EDITED` — редактируется, - `ACTIVE` — активный, -
     * `DISABLED` — неактивный.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly status?: string;

    /**
     * Идентификатор склада. Можно получить с помощью метода [/v1/warehouse/list
     * ](#operation/WarehouseAPI_WarehouseList).
     *
     * Формат: `int64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly warehouse_id?: number;
  };
}

export interface OzonDeliveryMethodV1 {
  readonly company_id?: number;
  readonly created_at?: string;
  readonly cutoff?: string;
  readonly id?: number;
  readonly name?: string;
  readonly provider_id?: number;
  readonly sla_cut_in?: number;
  readonly status?: string;
  readonly template_id?: number;
  readonly updated_at?: string;
  readonly warehouse_id?: number;
}

export interface ListDeliveryMethodsV1Response {
  readonly has_next?: boolean;
  readonly result?: readonly OzonDeliveryMethodV1[];
}
