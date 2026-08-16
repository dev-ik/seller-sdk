import type {
  OzonFbsPostingSortDirectionV4,
  OzonFbsPostingV4,
  OzonFbsPostingWithParamsV4,
} from "../../shared/v4/types.js";

export interface ListFbsPostingsV4Filter {
  /**
   * Идентификатор способа доставки. Можно получить с помощью метода
   * [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList).
   *
   * Максимум элементов: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method_ids?: readonly string[];

  /**
   * Процесс обработки отправления: - `ozon` — доставка силами Ozon; - `aggregator` — доставка
   * внешней службой, Ozon регистрирует заказ; - `non_integrated` — доставка силами продавца; -
   * `3pl_tracking` — доставка внешней службой, продавец регистрирует заказ; - `hybrid` — гибридная
   * интеграция; - `hybrid_aggregator` — гибридная интеграция с доставкой внешней службой, Ozon
   * регистрирует заказ; - `hybrid_non_integrated` — гибридная интеграция с доставкой силами
   * продавца; - `hybrid_3pl_tracking` — гибридная интеграция с доставкой внешней службой, продавец
   * регистрирует заказ; - `click_and_collect` — бронирование в магазине партнёра; - `FBP` — доставка
   * с партнёрских складов Ozon.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly integration_type_flow?: readonly string[];

  /**
   * `true`, если товар отслеживаемый.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_blr_traceable?: boolean;

  /**
   * Период, в который последний раз изменялся статус у отправлений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_changed_status_date?: {
    /**
     * Дата начала периода.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly from?: string;

    /**
     * Дата окончания периода.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly to?: string;
  };

  /**
   * Идентификатор заказа.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_id?: number;

  /**
   * Номера заказов, к которым относятся отправления.
   *
   * Максимум элементов: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_numbers?: readonly string[];

  /**
   * Идентификатор службы доставки. Можно получить с помощью метода
   * [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList).
   *
   * Максимум элементов: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly provider_ids?: readonly string[];

  /**
   * Дата начала периода, за который нужно получить список отправлений.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly since: string;

  /**
   * Статус отправления: - `awaiting_registration` — ожидает регистрации; - `acceptance_in_progress`
   * — идёт приёмка; - `awaiting_approve` — ожидает подтверждения; - `awaiting_packaging` — ожидает
   * упаковки; - `awaiting_deliver` — ожидает отгрузки; - `arbitration` — арбитраж; -
   * `client_arbitration` — клиентский арбитраж доставки; - `delivering` — доставляется; -
   * `driver_pickup` — у водителя; - `delivered` — доставлено; - `cancelled` — отменено; -
   * `not_accepted` — не принято на сортировочном центре; - `sent_by_seller` – отправлено продавцом.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly statuses?: readonly string[];

  /**
   * Дата конца периода, за который нужно получить список отправлений.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly to: string;

  /**
   * Идентификатор склада. Можно получить с помощью метода
   * [/v1/warehouse/list](#operation/WarehouseAPI_WarehouseList).
   *
   * Максимум элементов: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_ids?: readonly string[];
}

export interface ListFbsPostingsV4Request {
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
  readonly filter: ListFbsPostingsV4Filter;

  /**
   * Количество значений в ответе.
   *
   * Формат: `int64`. Минимум: `1`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Направление сортировки: - `ASC` — по возрастанию; - `DESC` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir?: OzonFbsPostingSortDirectionV4;

  /**
   * `true`, чтобы включить транслитерацию адреса из кириллицы в латиницу.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly translit?: boolean;

  /**
   * Дополнительные поля, которые нужно добавить в ответ.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly with?: OzonFbsPostingWithParamsV4;
}

export interface ListFbsPostingsV4Response {
  readonly cursor?: string | null;
  readonly has_next?: boolean | null;
  readonly postings?: readonly OzonFbsPostingV4[] | null;
}
