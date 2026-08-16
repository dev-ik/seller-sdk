export type OzonFbsAssemblySortDirection = "ASC" | "DESC";

export interface ListFbsAssemblyPostingsRequest {
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
     * Фильтр по времени, до которого продавцу нужно собрать заказ. Начало периода. Формат:
     * `YYYY-MM-DDThh:mm:ss.mcsZ`. Пример: `2020-03-18T07:34:50.359Z`.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly cutoff_from: string;

    /**
     * Фильтр по времени, до которого продавцу нужно собрать заказ. Конец периода. Формат:
     * `YYYY-MM-DDThh:mm:ss.mcsZ`. Пример: `2020-03-18T07:34:50.359Z`.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly cutoff_to: string;

    /**
     * Идентификатор способа доставки. Можно получить с помощью метода
     * [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList).
     *
     * Формат: `int64`. Максимум: `1000`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly delivery_method_id?: number;
  };

  /**
   * Количество значений на странице.
   *
   * Формат: `int64`. Максимум: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Направление сортировки: - `ASC` — по возрастанию, - `DESC` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir: OzonFbsAssemblySortDirection;
}

export interface OzonFbsAssemblyPostingListProduct {
  readonly offer_id?: string;
  readonly picture_url?: string;
  readonly product_name?: string;
  readonly quantity?: number;
  readonly sku?: number;
}

export interface OzonFbsAssemblyPostingListItem {
  readonly assembly_code?: string;
  readonly posting_number?: string;
  readonly products?: readonly OzonFbsAssemblyPostingListProduct[];
}

export interface ListFbsAssemblyPostingsResponse {
  readonly cursor?: string;
  readonly cutoff?: string;
  readonly postings?: readonly OzonFbsAssemblyPostingListItem[];
}
