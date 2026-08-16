import type { OzonFbsAssemblySortDirection } from "../../../posting/list/v1/types.js";

export interface ListFbsAssemblyProductsRequest {
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
   * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, ответ
   * начнётся с 11 найденного элемента.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offset?: number;

  /**
   * Направление сортировки: - `ASC` — по возрастанию, - `DESC` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir?: OzonFbsAssemblySortDirection;
}

export interface OzonFbsAssemblyProductPosting {
  readonly posting_number?: string;
  readonly quantity?: number;
}

export interface OzonFbsAssemblyProduct {
  readonly offer_id?: string;
  readonly picture_url?: string;
  readonly postings?: readonly OzonFbsAssemblyProductPosting[];
  readonly product_name?: string;
  readonly quantity?: number;
  readonly sku?: number;
}

export interface ListFbsAssemblyProductsResponse {
  readonly has_next?: boolean;
  readonly products?: readonly OzonFbsAssemblyProduct[];
  readonly products_count?: number;
}
