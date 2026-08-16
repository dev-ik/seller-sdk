import type { OzonReturnV1 } from "../../shared/v1/types.js";
export interface OzonReturnTimeRangeV1 {
  /**
   * Начало периода.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly time_from?: string;

  /**
   * Окончание периода.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly time_to?: string;
}
export interface ListReturnsV1Filter {
  /**
   * Фильтр по штрихкоду возвратной этикетки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly barcode?: string;

  /**
   * Фильтр по статусу компенсации: - `1` — отправлена; - `2` — получена; - `3` — отменена; - `4` —
   * проведена декомпенсация.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly compensation_status_id?: number;

  /**
   * Фильтр по дате создания возврата.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly logistic_return_date?: OzonReturnTimeRangeV1;

  /**
   * Фильтр по артикулу товара.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offer_id?: string;

  /**
   * Фильтр по идентификатору заказа.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_id?: number;

  /**
   * Фильтр по номеру отправления. Передавайте не больше 50 постингов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_numbers?: readonly string[];

  /**
   * Фильтр по названию товара.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_name?: string;

  /**
   * Фильтр по схеме доставки: `FBS` или `FBO`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly return_schema?: string;

  /**
   * Фильтр по дате начала тарификации.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly storage_tariffication_start_date?: OzonReturnTimeRangeV1;

  /**
   * Фильтр по дате изменения статуса возврата.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly visual_status_change_moment?: OzonReturnTimeRangeV1;

  /**
   * Фильтр по статусу возврата: - `DisputeOpened` — открыт спор с покупателем; - `OnSellerApproval`
   * — на согласовании у продавца; - `ArrivedAtReturnPlace` — в пункте выдачи; -
   * `OnSellerClarification` — на уточнении у продавца; -
   * `OnSellerClarificationAfterPartialCompensation` — на уточнении у продавца после частичной
   * компенсации; - `OfferedPartialCompensation` — предложена частичная компенсация; -
   * `ReturnMoneyApproved` — одобрен возврат денег; - `PartialCompensationReturned` — вернули часть
   * денег; - `CancelledDisputeNotOpen` — возврат отклонён, спор не открыт; - `Rejected` — заявка
   * отклонена; - `CrmRejected` — заявка отклонена Ozon; - `Cancelled` — заявка отменена; -
   * `Approved` — заявка…
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly visual_status_name?: string;

  /**
   * Фильтр по идентификатору склада. Можно получить с помощью метода
   * [/v1/warehouse/list](#operation/WarehouseAPI_WarehouseList).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id?: number;
}
export interface ListReturnsV1Request {
  /**
   * Фильтры. Используйте только один фильтр в запросе: `logistic_return_date`,
   * `storage_tariffication_start_date` или `visual_status_change_moment`, иначе вернётся ошибка.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: ListReturnsV1Filter;

  /**
   * Идентификатор последнего подгруженного возврата.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: number;

  /**
   * Количество подгружаемых возвратов. Максимальное значение — 500.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
}
export interface ListReturnsV1Response {
  readonly has_next?: boolean;
  readonly returns?: readonly OzonReturnV1[];
}
