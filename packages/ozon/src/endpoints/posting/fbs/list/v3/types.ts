import type {
  OzonFbsPostingV3,
  OzonFbsPostingWithParamsV3,
} from "../../shared/v3/types.js";

export interface ListFbsPostingsV3Filter {
  /**
   * Идентификатор способа доставки. Можно получить с помощью метода
   * [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method_id?: readonly number[];

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
   * `true`, если товар прослеживаемый.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_blr_traceable?: boolean;

  /**
   * Укажите `true`, чтобы получить только отправления квантов. По умолчанию — `false`, в ответе
   * придут все отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_quantum?: boolean;

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
   * Идентификатор службы доставки. Можно получить с помощью метода
   * [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly provider_id?: readonly number[];

  /**
   * Дата начала периода, за который нужно получить список отправлений. Формат UTC:
   * ГГГГ-ММ-ДДTЧЧ:ММ:ССZ. Пример: 2019-08-24T14:15:22Z.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly since: string;

  /**
   * Статус отправления: - `awaiting_registration` — ожидает регистрации, - `acceptance_in_progress`
   * — идёт приёмка, - `awaiting_approve` — ожидает подтверждения, - `awaiting_packaging` — ожидает
   * упаковки, - `awaiting_deliver` — ожидает отгрузки, - `arbitration` — арбитраж, -
   * `client_arbitration` — клиентский арбитраж доставки, - `delivering` — доставляется, -
   * `driver_pickup` — у водителя, - `delivered` — доставлено, - `cancelled` — отменено, -
   * `not_accepted` — не принят на сортировочном центре, - `sent_by_seller` – отправлено продавцом.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly status?: string;

  /**
   * Дата конца периода, за который нужно получить список отправлений. Формат UTC:
   * ГГГГ-ММ-ДДTЧЧ:ММ:ССZ. Пример: 2019-08-24T14:15:22Z.
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
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id?: readonly string[];
}

export interface ListFbsPostingsV3Request {
  /**
   * Направление сортировки: - `asc` — по возрастанию, - `desc` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly dir?: string;

  /**
   * Фильтр.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter: ListFbsPostingsV3Filter;

  /**
   * Количество значений в ответе: - максимум — 1000, - минимум — 1.
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
  readonly offset: number;

  /**
   * Дополнительные поля, которые нужно добавить в ответ.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly with?: OzonFbsPostingWithParamsV3;
}

export interface ListFbsPostingsV3Response {
  readonly result?: {
    readonly has_next?: boolean;
    readonly postings?: readonly OzonFbsPostingV3[];
  };
}
