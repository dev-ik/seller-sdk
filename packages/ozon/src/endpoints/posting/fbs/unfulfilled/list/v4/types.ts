import type {
  OzonFbsPostingSortDirectionV4,
  OzonFbsPostingV4,
  OzonFbsPostingWithParamsV4,
} from "../../../shared/v4/types.js";

export interface OzonFbsLastChangedStatusDateV4 {
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
}

export interface ListUnfulfilledFbsPostingsV4Filter {
  /**
   * Время, до которого продавцу нужно собрать заказ. Начало периода.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cutoff_from?: string;

  /**
   * Время, до которого продавцу нужно собрать заказ. Конец периода.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cutoff_to?: string;

  /**
   * Минимальная дата передачи отправления в доставку.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivering_date_from?: string;

  /**
   * Максимальная дата передачи отправления в доставку.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivering_date_to?: string;

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
   * Период, в который последний раз изменялся статус отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_changed_status_date?: OzonFbsLastChangedStatusDateV4;

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
   * Статус отправления: - `acceptance_in_progress` — идёт приёмка; - `awaiting_approve` — ожидает
   * подтверждения; - `awaiting_packaging` — ожидает упаковки; - `awaiting_registration` — ожидает
   * регистрации; - `awaiting_deliver` — ожидает отгрузки; - `arbitration` — арбитраж; -
   * `client_arbitration` — клиентский арбитраж доставки; - `delivering` — доставляется; -
   * `driver_pickup` — у водителя; - `not_accepted` — не принято на сортировочном центре.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly statuses?: readonly string[];

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

export interface ListUnfulfilledFbsPostingsV4Request {
  /**
   * Указатель для выборки следующих данных.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cursor?: string;

  /**
   * Фильтр запроса. Используйте фильтр по времени сборки — `cutoff` или по дате передачи отправления
   * в доставку — `delivering_date`. Если использовать их вместе, в ответе вернётся ошибка. Чтобы
   * использовать фильтр по времени сборки, заполните поля `cutoff_from` и `cutoff_to`. Чтобы
   * использовать фильтр по дате передачи отправления в доставку, заполните поля
   * `delivering_date_from` и `delivering_date_to`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: ListUnfulfilledFbsPostingsV4Filter;

  /**
   * Количество значений в ответе.
   *
   * Формат: `int64`. Минимум: `1`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit?: number;

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

export interface ListUnfulfilledFbsPostingsV4Response {
  readonly count?: number;
  readonly cursor?: string;
  readonly has_next?: boolean;
  readonly postings?: readonly OzonFbsPostingV4[];
}
