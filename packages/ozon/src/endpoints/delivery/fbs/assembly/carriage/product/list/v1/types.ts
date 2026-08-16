export interface ListFbsAssemblyCarriageProductsRequest {
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
  readonly filter: {
    /**
     * Идентификатор перевозки.
     *
     * Формат: `int64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly carriage_id: number;

    /**
     * Фильтр по времени, до которого продавцу нужно собрать заказ. Начало периода. Формат:
     * `YYYY-MM-DDThh:mm:ss.mcsZ`. Пример: `2020-03-18T07:34:50.359Z`.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly cutoff_from?: string;

    /**
     * Фильтр по времени, до которого продавцу нужно собрать заказ. Конец периода. Формат:
     * `YYYY-MM-DDThh:mm:ss.mcsZ`. Пример: `2020-03-18T07:34:50.359Z`.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly cutoff_to?: string;

    /**
     * Идентификатор метода доставки. Можно получить с помощью метода
     * [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList).
     *
     * Формат: `int64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly delivery_method_id?: number;
  };

  /**
   * Количество значений на странице.
   *
   * Формат: `int64`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
}

export interface OzonFbsAssemblyCarriageProduct {
  readonly offer_id?: string;
  readonly picture_url?: string;
  readonly posting_numbers?: readonly string[];
  readonly product_name?: string;
  readonly quantity?: number;
  readonly sku?: number;
}

export interface ListFbsAssemblyCarriageProductsResponse {
  readonly cursor?: string;
  readonly products?: readonly OzonFbsAssemblyCarriageProduct[];
}
