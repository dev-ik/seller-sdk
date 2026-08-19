// Generated public types for this Yandex Market endpoint.
type SupplyRequestsApiResponseStatusType = "OK" | "ERROR";
type SupplyRequestsGetSupplyRequestsDTO = {
  readonly requests: readonly SupplyRequestsSupplyRequestDTO[];
  readonly paging?: SupplyRequestsPackagingForwardScrollingPagerDTO;
};
type SupplyRequestsGetSupplyRequestsRequest = {
  readonly requestIds?: readonly SupplyRequestsSupplyRequestId[] | null;
  readonly requestDateFrom?: string | null;
  readonly requestDateTo?: string | null;
  readonly requestTypes?: readonly SupplyRequestsSupplyRequestType[] | null;
  readonly requestSubtypes?:
    | readonly SupplyRequestsSupplyRequestSubType[]
    | null;
  readonly requestStatuses?:
    | readonly SupplyRequestsSupplyRequestStatusType[]
    | null;
  readonly sorting?: SupplyRequestsSupplyRequestSortingDTO;
};
type SupplyRequestsGetSupplyRequestsResponse = {
  readonly status: SupplyRequestsApiResponseStatusType;
  readonly result?: SupplyRequestsGetSupplyRequestsDTO;
};
type SupplyRequestsGpsDTO = {
  readonly latitude: number;
  readonly longitude: number;
};
type SupplyRequestsPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type SupplyRequestsSortOrderType = "ASC" | "DESC";
type SupplyRequestsSupplyRequestCountersDTO = {
  readonly planCount?: number;
  readonly factCount?: number;
  readonly undefinedCount?: number;
  readonly surplusCount?: number;
  readonly shortageCount?: number;
  readonly defectCount?: number;
  readonly acceptableCount?: number;
  readonly unacceptableCount?: number;
  readonly actualPalletsCount?: number;
  readonly actualBoxCount?: number;
};
type SupplyRequestsSupplyRequestDTO = {
  readonly id: SupplyRequestsSupplyRequestIdDTO;
  readonly type: SupplyRequestsSupplyRequestType;
  readonly subtype: SupplyRequestsSupplyRequestSubType;
  readonly status: SupplyRequestsSupplyRequestStatusType;
  readonly updatedAt: string;
  readonly counters: SupplyRequestsSupplyRequestCountersDTO;
  readonly parentLink?: SupplyRequestsSupplyRequestReferenceDTO | null;
  readonly childrenLinks?:
    | readonly SupplyRequestsSupplyRequestReferenceDTO[]
    | null;
  readonly targetLocation: SupplyRequestsSupplyRequestLocationDTO;
  readonly transitLocation?: SupplyRequestsSupplyRequestLocationDTO;
};
type SupplyRequestsSupplyRequestId = number;
type SupplyRequestsSupplyRequestIdDTO = {
  readonly id: SupplyRequestsSupplyRequestId;
  readonly marketplaceRequestId?: string;
  readonly warehouseRequestId?: string;
};
type SupplyRequestsSupplyRequestLocationAddressDTO = {
  readonly fullAddress: string;
  readonly gps: SupplyRequestsGpsDTO;
};
type SupplyRequestsSupplyRequestLocationDTO = {
  readonly requestedDate?: string;
  readonly serviceId: number;
  readonly name: string;
  readonly address: SupplyRequestsSupplyRequestLocationAddressDTO;
  readonly type: SupplyRequestsSupplyRequestLocationType;
};
type SupplyRequestsSupplyRequestLocationType =
  | "FULFILLMENT"
  | "XDOC"
  | "PICKUP_POINT";
type SupplyRequestsSupplyRequestReferenceDTO = {
  readonly id: SupplyRequestsSupplyRequestIdDTO;
  readonly type: SupplyRequestsSupplyRequestReferenceType;
};
type SupplyRequestsSupplyRequestReferenceType =
  | "VIRTUAL_DISTRIBUTION"
  | "WITHDRAW"
  | "UTILIZATION"
  | "ADDITIONAL_SUPPLY";
type SupplyRequestsSupplyRequestSortAttributeType =
  | "ID"
  | "REQUESTED_DATE"
  | "UPDATED_AT"
  | "STATUS";
type SupplyRequestsSupplyRequestSortingDTO = {
  readonly direction: SupplyRequestsSortOrderType;
  readonly attribute: SupplyRequestsSupplyRequestSortAttributeType;
};
type SupplyRequestsSupplyRequestStatusType =
  | "CREATED"
  | "FINISHED"
  | "CANCELLED"
  | "INVALID"
  | "VALIDATED"
  | "PUBLISHED"
  | "ARRIVED_TO_SERVICE"
  | "ARRIVED_TO_XDOC_SERVICE"
  | "SHIPPED_TO_SERVICE"
  | "CANCELLATION_REQUESTED"
  | "CANCELLATION_REJECTED"
  | "REGISTERED_IN_ELECTRONIC_QUEUE"
  | "READY_FOR_UTILIZATION"
  | "TRANSIT_MOVING"
  | "WAREHOUSE_HANDLING"
  | "ACCEPTED_BY_WAREHOUSE_SYSTEM"
  | "READY_TO_WITHDRAW"
  | "NEED_PREPARATION"
  | "WAREHOUSE_SIGNED_ACT";
type SupplyRequestsSupplyRequestSubType =
  | "DEFAULT"
  | "XDOC"
  | "INVENTORYING_SUPPLY"
  | "INVENTORYING_SUPPLY_WAREHOUSE_BASED_PER_SUPPLIER"
  | "MOVEMENT_SUPPLY"
  | "ADDITIONAL_SUPPLY"
  | "VIRTUAL_DISTRIBUTION_CENTER"
  | "VIRTUAL_DISTRIBUTION_CENTER_CHILD"
  | "FORCE_PLAN"
  | "FORCE_PLAN_ANOMALY_PER_SUPPLY"
  | "PLAN_BY_SUPPLIER"
  | "ANOMALY_WITHDRAW"
  | "FIX_LOST_INVENTORYING"
  | "OPER_LOST_INVENTORYING"
  | "MOVEMENT_WITHDRAW"
  | "MISGRADING_SUPPLY"
  | "MISGRADING_WITHDRAW"
  | "MAN_UTIL"
  | "WITHDRAW_AUTO_UTILIZATION"
  | "EXTERNAL_WITHDRAW_INT_OZON"
  | "EXTERNAL_WITHDRAW_INT_WB";
type SupplyRequestsSupplyRequestType = "SUPPLY" | "WITHDRAW" | "UTILIZATION";

/**
 * Параметры метода «Получение информации о заявках на поставку, вывоз и утилизацию».
 *
 * По указанным фильтрам возвращает заявки на поставку, вывоз и утилизацию, а также информацию по ним.
 *
 * POST /v2/campaigns/{campaignId}/supply-requests
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetSupplyRequestsInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.
     *
     * Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:
     *
     * * блок **Идентификатор кампании**;
     * * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.
     *
     * ⚠️ Не путайте его с:
     * - идентификатором магазина, который отображается в личном кабинете продавца;
     * - рекламными кампаниями.
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly campaignId: number;
  } /**
   * Параметры строки запроса.
   */;
  readonly query?: {
    /**
     * Идентификатор страницы c результатами.
     *
     * Если параметр не указан, возвращается первая страница.
     *
     * Передавайте значение выходного параметра `nextPageToken`, полученное при последнем запросе.
     */
    readonly pageToken?: string;

    /**
     * Количество элементов на странице.
     *
     * Формат: `int32`.
     *
     * Значение по умолчанию: `50`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 100.
     */
    readonly limit?: number;
  } /**
   * Тело запроса.
   */;
  readonly body?: SupplyRequestsGetSupplyRequestsRequest;
};
/**
 * Успешный ответ метода «Получение информации о заявках на поставку, вывоз и утилизацию».
 *
 * 200: Список заявок и информация по ним.
 */
export type GetSupplyRequestsResponse = SupplyRequestsGetSupplyRequestsResponse;
