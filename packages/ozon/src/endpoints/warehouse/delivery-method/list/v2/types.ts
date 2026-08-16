export type OzonDeliveryMethodSortDirection = "ASC" | "DESC";
export type OzonDeliveryMethodStatus =
  | "NEW"
  | "EDITED"
  | "ACTIVE"
  | "DISABLED"
  | "WAITING"
  | "BROKEN";

export interface ListDeliveryMethodsV2Request {
  /**
   * Количество значений в ответе.
   *
   * Формат: `int64`. Минимум: `1`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Указатель для выборки следующих данных.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cursor?: string;

  /**
   * Направление сортировки: - `ASC` — по возрастанию; - `DESC` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir?: OzonDeliveryMethodSortDirection;

  /**
   * Фильтр для поиска методов доставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: {
    /**
     * Идентификаторы методов доставки.
     *
     * Максимум элементов: `100`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly delivery_method_ids?: readonly string[];

    /**
     * Идентификаторы служб доставки.
     *
     * Максимум элементов: `100`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly provider_ids?: readonly string[];

    /**
     * Идентификаторы складов. Получите с помощью метода
     * [/v2/warehouse/list](#operation/WarehouseListV2).
     *
     * Максимум элементов: `100`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly warehouse_ids?: readonly string[];

    /**
     * Статус метода доставки: - `NEW` — создан, - `EDITED` — редактируется, - `ACTIVE` — активный, -
     * `DISABLED` — неактивный, - `WAITING` — на проверке, - `BROKEN` — с ошибкой.
     *
     * Пример: `NEW`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly status?: readonly OzonDeliveryMethodStatus[];
  };
}

export interface OzonDeliveryMethodV2 {
  readonly created_at?: string;
  readonly cutoff?: string;
  readonly id?: number;
  readonly is_express?: boolean;
  readonly name?: string;
  readonly provider_id?: number;
  readonly sla_cut_in?: number;
  readonly status?: string;
  readonly template_id?: number;
  readonly tpl_dropoff_point?: {
    readonly address?: string;
    readonly address_coordinates?: {
      readonly latitude?: number;
      readonly longitude?: number;
    };
    readonly code?: string;
    readonly name?: string;
  };
  readonly tpl_integration_type?: string;
  readonly updated_at?: string;
  readonly warehouse_id?: number;
}

export interface ListDeliveryMethodsV2Response {
  readonly cursor?: string;
  readonly has_next?: boolean;
  readonly delivery_methods?: readonly OzonDeliveryMethodV2[];
}
