// Generated public types for this Yandex Market endpoint.
type OrdersApiResponseStatusType = "OK" | "ERROR";
type OrdersCustomerDTO = {
  readonly firstName: string;
  readonly lastName: string;
  readonly middleName?: string;
  readonly phone: string;
};
type OrdersDeliveryDateIntervalDTO = {
  readonly fromDate: string;
  readonly toDate: string;
};
type OrdersDeliveryIntervalsUpdateOptionDTO = {
  readonly deliveryDateInterval: OrdersDeliveryDateIntervalDTO;
  readonly deliveryTimeInterval: OrdersTimeIntervalDTO;
};
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
type OrdersTimeIntervalDTO = {
  readonly fromTime: string;
  readonly toTime: string;
};
type OrdersUpdateOrderDTO = {
  readonly id: number;
  readonly deliveryInterval?: OrdersDeliveryIntervalsUpdateOptionDTO;
  readonly customer?: OrdersCustomerDTO;
};
type OrdersUpdateOrderRequest = { readonly order: OrdersUpdateOrderDTO };
type OrdersUpdateOrderResponse = {
  readonly status: OrdersApiResponseStatusType;
  readonly result?: OrdersUpdateOrderResultDTO;
};
type OrdersUpdateOrderResultDTO = {
  readonly operations: readonly OrdersOperationDTO[];
};

/**
 * Параметры метода «Изменение заказа».
 *
 * Изменяет в заказе:
 *
 * * данные получателя;
 * * интервал дат курьерской доставки.
 *
 * Передавайте только ту информацию, которую хотите изменить. При необходимости вы можете отредактировать и данные получателя, и интервал доставки одновременно.
 *
 * Заказ можно изменить в любом статусе до вручения покупателю или отмены (`DELIVERED` или `CANCELLED`).
 *
 * Данные заказа обновляются не мгновенно
 *
 * Изменения применяются в течение нескольких минут и только в случае успешного завершения операции. [Как проверить статус операции](../../reference/operations/getOperations.md)
 *
 * POST /v1/campaigns/{campaignId}/orders/update
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateOrderInput = {
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
  readonly body: OrdersUpdateOrderRequest;
};
/**
 * Успешный ответ метода «Изменение заказа».
 *
 * 200: Информация об операции по изменению заказа.
 *
 * Ответ `200` не значит, что данные изменены
 *
 * При успешном выполнении запроса это произойдет через некоторое время. [Как проверить статус операции](../../reference/operations/getOperations.md).
 */
export type UpdateOrderResponse = OrdersUpdateOrderResponse;
