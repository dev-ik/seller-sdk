// Generated public types for this Yandex Market endpoint.
type OrdersApiResponseStatusType = "OK" | "ERROR";
type OrdersOperationDTO = {
  readonly id: OrdersOperationId;
  readonly type: OrdersOperationType;
};
type OrdersOperationId = string;
type OrdersOperationType =
  | "ORDER_RECIPIENT_UPDATE"
  | "ORDER_DELIVERY_INTERVAL_UPDATE"
  | "ORDER_STATUS_UPDATE"
  | "RETURN_CANCELLATION";
type OrdersOrderStateDTO = {
  readonly id: number;
  readonly status: OrdersOrderStatusType;
  readonly substatus?: OrdersOrderSubstatusType;
};
type OrdersOrderStatusType =
  | "PLACING"
  | "RESERVED"
  | "UNPAID"
  | "PROCESSING"
  | "DELIVERY"
  | "PICKUP"
  | "DELIVERED"
  | "CANCELLED"
  | "PENDING"
  | "PARTIALLY_RETURNED"
  | "RETURNED"
  | "UNKNOWN";
type OrdersOrderSubstatusType =
  | "RESERVATION_EXPIRED"
  | "USER_NOT_PAID"
  | "USER_UNREACHABLE"
  | "USER_CHANGED_MIND"
  | "USER_REFUSED_DELIVERY"
  | "USER_REFUSED_PRODUCT"
  | "SHOP_FAILED"
  | "USER_REFUSED_QUALITY"
  | "REPLACING_ORDER"
  | "PROCESSING_EXPIRED"
  | "PENDING_EXPIRED"
  | "SHOP_PENDING_CANCELLED"
  | "PENDING_CANCELLED"
  | "USER_FRAUD"
  | "RESERVATION_FAILED"
  | "USER_PLACED_OTHER_ORDER"
  | "USER_BOUGHT_CHEAPER"
  | "MISSING_ITEM"
  | "BROKEN_ITEM"
  | "WRONG_ITEM"
  | "PICKUP_EXPIRED"
  | "DELIVERY_PROBLEMS"
  | "LATE_CONTACT"
  | "CUSTOM"
  | "DELIVERY_SERVICE_FAILED"
  | "WAREHOUSE_FAILED_TO_SHIP"
  | "DELIVERY_SERVICE_UNDELIVERED"
  | "PREORDER"
  | "AWAIT_CONFIRMATION"
  | "STARTED"
  | "PACKAGING"
  | "READY_TO_SHIP"
  | "SHIPPED"
  | "ASYNC_PROCESSING"
  | "WAITING_USER_INPUT"
  | "WAITING_BANK_DECISION"
  | "BANK_REJECT_CREDIT_OFFER"
  | "CUSTOMER_REJECT_CREDIT_OFFER"
  | "CREDIT_OFFER_FAILED"
  | "AWAIT_DELIVERY_DATES_CONFIRMATION"
  | "SERVICE_FAULT"
  | "DELIVERY_SERVICE_RECEIVED"
  | "USER_RECEIVED"
  | "WAITING_FOR_STOCKS"
  | "AS_PART_OF_MULTI_ORDER"
  | "READY_FOR_LAST_MILE"
  | "LAST_MILE_STARTED"
  | "ANTIFRAUD"
  | "DELIVERY_USER_NOT_RECEIVED"
  | "DELIVERY_SERVICE_DELIVERED"
  | "DELIVERED_USER_NOT_RECEIVED"
  | "USER_WANTED_ANOTHER_PAYMENT_METHOD"
  | "USER_RECEIVED_TECHNICAL_ERROR"
  | "USER_FORGOT_TO_USE_BONUS"
  | "DELIVERY_SERVICE_NOT_RECEIVED"
  | "DELIVERY_SERVICE_LOST"
  | "SHIPPED_TO_WRONG_DELIVERY_SERVICE"
  | "DELIVERED_USER_RECEIVED"
  | "WAITING_TINKOFF_DECISION"
  | "COURIER_SEARCH"
  | "COURIER_FOUND"
  | "COURIER_IN_TRANSIT_TO_SENDER"
  | "COURIER_ARRIVED_TO_SENDER"
  | "COURIER_RECEIVED"
  | "COURIER_NOT_FOUND"
  | "COURIER_NOT_DELIVER_ORDER"
  | "COURIER_RETURNS_ORDER"
  | "COURIER_RETURNED_ORDER"
  | "WAITING_USER_DELIVERY_INPUT"
  | "PICKUP_SERVICE_RECEIVED"
  | "PICKUP_USER_RECEIVED"
  | "CANCELLED_COURIER_NOT_FOUND"
  | "COURIER_NOT_COME_FOR_ORDER"
  | "DELIVERY_NOT_MANAGED_REGION"
  | "INCOMPLETE_CONTACT_INFORMATION"
  | "INCOMPLETE_MULTI_ORDER"
  | "INAPPROPRIATE_WEIGHT_SIZE"
  | "TECHNICAL_ERROR"
  | "SORTING_CENTER_LOST"
  | "COURIER_SEARCH_NOT_STARTED"
  | "LOST"
  | "AWAIT_PAYMENT"
  | "AWAIT_LAVKA_RESERVATION"
  | "USER_WANTS_TO_CHANGE_ADDRESS"
  | "FULL_NOT_RANSOM"
  | "PRESCRIPTION_MISMATCH"
  | "DROPOFF_LOST"
  | "DROPOFF_CLOSED"
  | "DELIVERY_TO_STORE_STARTED"
  | "USER_WANTS_TO_CHANGE_DELIVERY_DATE"
  | "WRONG_ITEM_DELIVERED"
  | "DAMAGED_BOX"
  | "AWAIT_DELIVERY_DATES"
  | "LAST_MILE_COURIER_SEARCH"
  | "PICKUP_POINT_CLOSED"
  | "LEGAL_INFO_CHANGED"
  | "USER_HAS_NO_TIME_TO_PICKUP_ORDER"
  | "DELIVERY_CUSTOMS_ARRIVED"
  | "DELIVERY_CUSTOMS_CLEARED"
  | "FIRST_MILE_DELIVERY_SERVICE_RECEIVED"
  | "AWAIT_AUTO_DELIVERY_DATES"
  | "AWAIT_USER_PERSONAL_DATA"
  | "NO_PERSONAL_DATA_EXPIRED"
  | "CUSTOMS_PROBLEMS"
  | "AWAIT_CASHIER"
  | "WAITING_POSTPAID_BUDGET_RESERVATION"
  | "AWAIT_SERVICEABLE_CONFIRMATION"
  | "POSTPAID_BUDGET_RESERVATION_FAILED"
  | "AWAIT_CUSTOM_PRICE_CONFIRMATION"
  | "READY_FOR_PICKUP"
  | "TOO_MANY_DELIVERY_DATE_CHANGES"
  | "TOO_LONG_DELIVERY"
  | "DEFERRED_PAYMENT"
  | "POSTPAID_FAILED"
  | "INCORRECT_PERSONAL_DATA"
  | "CUSTOMS_FAILED_MARKET"
  | "CUSTOMS_FAILED_USER_COMMERCIAL_ITEMS"
  | "CUSTOMS_FAILED_USER_DUTY_NOT_PAID"
  | "CUSTOMS_FAILED_USER_INVALID_PERSONAL_DATA"
  | "CUSTOMS_FAILED_USER_ADDITIONAL_DATA_NOT_PROVIDED"
  | "AWAIT_PAYMENT_AFTER_DELIVERY"
  | "AWAIT_USER_STEAM_FAST_URL"
  | "USER_IDENTIFICATION_MISMATCH"
  | "PURCHASE_GROUP_THRESHOLD_NOT_REACHED_CANCELLED"
  | "UNKNOWN";
type OrdersOrderUpdateStatusType = "OK" | "ERROR";
type OrdersUpdateOrderStatusDTO = {
  readonly id?: number;
  readonly status?: OrdersOrderStatusType;
  readonly substatus?: OrdersOrderSubstatusType;
  readonly updateStatus?: OrdersOrderUpdateStatusType;
  readonly errorDetails?: string;
  readonly operation?: OrdersOperationDTO;
};
type OrdersUpdateOrderStatusesDTO = {
  readonly orders: readonly OrdersUpdateOrderStatusDTO[];
};
type OrdersUpdateOrderStatusesRequest = {
  readonly orders: readonly OrdersOrderStateDTO[];
};
type OrdersUpdateOrderStatusesResponse = {
  readonly status: OrdersApiResponseStatusType;
  readonly result?: OrdersUpdateOrderStatusesDTO;
};

/**
 * Параметры метода «Изменение статусов нескольких заказов».
 *
 * Изменяет статусы нескольких заказов.
 *
 * Возможные изменения статусов:
 *
 * * Если магазин подтвердил и подготовил заказ к отправке, то заказ из статуса `"status": "PROCESSING"`и этапа обработки `"substatus": "STARTED"` нужно перевести в статус `"status": "PROCESSING"` и этап обработки `"substatus": "READY_TO_SHIP"`.
 * * Если магазин подтвердил заказ, но не может его выполнить (например, товар числится в базе, но отсутствует на складе или нет нужного цвета), то заказ из статуса `"status": "PROCESSING"` и этапа обработки `"substatus": "STARTED"` нужно перевести в статус `"status": "CANCELLED"` с причиной отмены заказа `"substatus": "SHOP_FAILED"`.
 * * Если магазин подготовил заказ к отгрузке, но не может его выполнить (например, последний товар был поврежден или оказался с браком), то заказ из статуса `"status": "PROCESSING"` и этапа обработки `"substatus": "READY_TO_SHIP"` нужно перевести в статус `"status": "CANCELLED"` с причиной отмены заказа `"substatus": "SHOP_FAILED"`.
 *
 * Полная информация о статусной модели DBS-заказов: [Как изменяются статусы заказов](../../concepts/dbs-order-status-model.md).
 *
 * **Как подтвердить LaaS-заказ**
 *
 * Для подтверждения черновика заказа передайте статус `"status": "PROCESSING"` с подстатусом `"substatus": "STARTED"`.
 *
 * Подтверждение заказа, созданного с параметром `draft` равным `false`, не требуется.
 *
 * **Как отменить LaaS-заказ**
 *
 * Передайте статус `"status": "CANCELLED"` с причиной отмены заказа `"substatus": "SHOP_FAILED"`.
 *
 * При успешном выполнении запроса отмена произойдет через некоторое время. [Как проверить статус операции](../../reference/operations/getOperations.md)
 *
 * POST /v2/campaigns/{campaignId}/orders/status-update
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateOrderStatusesInput = {
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
   * Тело запроса.
   */;
  readonly body: OrdersUpdateOrderStatusesRequest;
};
/**
 * Успешный ответ метода «Изменение статусов нескольких заказов».
 *
 * 200: Возвращается информация об обновленных статусах заказов.
 */
export type UpdateOrderStatusesResponse = OrdersUpdateOrderStatusesResponse;
