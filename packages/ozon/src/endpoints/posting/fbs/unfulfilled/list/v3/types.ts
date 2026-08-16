import type {
  OzonFbsPostingV3,
  OzonFbsPostingWithParamsV3,
} from "../../../shared/v3/types.js";

export interface OzonFbsLastChangedStatusDateV3 {
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

export interface ListUnfulfilledFbsPostingsV3Filter {
  /**
   * Фильтр по времени, до которого продавцу нужно собрать заказ. Начало периода. Формат:
   * YYYY-MM-DDThh:mm:ss.mcsZ. Пример: 2020-03-18T07:34:50.359Z.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cutoff_from: string;

  /**
   * Фильтр по времени, до которого продавцу нужно собрать заказ. Конец периода. Формат:
   * YYYY-MM-DDThh:mm:ss.mcsZ. Пример: 2020-03-18T07:34:50.359Z.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cutoff_to: string;

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
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method_id?: readonly number[];

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
  readonly last_changed_status_date?: OzonFbsLastChangedStatusDateV3;

  /**
   * Идентификатор службы доставки. Можно получить с помощью метода
   * [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly provider_id?: readonly number[];

  /**
   * Статус отправления: - `acceptance_in_progress` — идёт приёмка, - `awaiting_approve` — ожидает
   * подтверждения, - `awaiting_packaging` — ожидает упаковки, - `awaiting_registration` — ожидает
   * регистрации, - `awaiting_deliver` — ожидает отгрузки, - `arbitration` — арбитраж, -
   * `client_arbitration` — клиентский арбитраж доставки, - `delivering` — доставляется, -
   * `driver_pickup` — у водителя, - `not_accepted` — не принят на сортировочном центре.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly status?: string;

  /**
   * Идентификатор склада. Можно получить с помощью метода
   * [/v1/warehouse/list](#operation/WarehouseAPI_WarehouseList).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id?: readonly number[];
}

export interface ListUnfulfilledFbsPostingsV3Request {
  /**
   * Направление сортировки: - `asc` — по возрастанию, - `desc` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly dir?: string;

  /**
   * Фильтр запроса. Используйте фильтр либо по времени сборки — `cutoff`, либо по дате передачи
   * отправления в доставку — `delivering_date`. Если использовать их вместе, в ответе вернётся
   * ошибка. Чтобы использовать фильтр по времени сборки, заполните поля `cutoff_from` и `cutoff_to`.
   * Чтобы использовать фильтр по дате передачи отправления в доставку, заполните поля
   * `delivering_date_from` и `delivering_date_to`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter: ListUnfulfilledFbsPostingsV3Filter;

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

export interface ListUnfulfilledFbsPostingsV3Response {
  readonly result?: {
    readonly count?: number;
    readonly postings?: readonly OzonFbsPostingV3[];
  };
}
