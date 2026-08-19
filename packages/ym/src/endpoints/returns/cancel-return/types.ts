// Generated public types for this Yandex Market endpoint.
type ReturnsApiResponseStatusType = "OK" | "ERROR";
type ReturnsCancelReturnDTO = { readonly operation: ReturnsOperationDTO };
type ReturnsCancelReturnRequest = { readonly returnId: number };
type ReturnsCancelReturnResponse = {
  readonly status: ReturnsApiResponseStatusType;
  readonly result?: ReturnsCancelReturnDTO;
};
type ReturnsOperationDTO = {
  readonly id: ReturnsOperationId;
  readonly type: ReturnsOperationType;
};
type ReturnsOperationId = string;
type ReturnsOperationType =
  | "ORDER_RECIPIENT_UPDATE"
  | "ORDER_DELIVERY_INTERVAL_UPDATE"
  | "ORDER_STATUS_UPDATE"
  | "RETURN_CANCELLATION";

/**
 * Параметры метода «Отмена возврата».
 *
 * Отменяет возврат.
 *
 * Это можно сделать только до принятия в пункте выдачи (`"shipmentStatus": "CREATED"`).
 *
 * Возврат отменяется не мгновенно
 *
 * Отмена возврата применяется в течение нескольких минут и только в случае успешного завершения операции. [Как проверить статус операции](../../reference/operations/getOperations.md)
 *
 * Используйте этот метод в подобных ситуациях
 *
 * Вы создали возврат, в котором указали 3 товара. Но покупатель передумал и решил вернуть только 2. Отмените возврат и создайте новый.
 *
 * POST /v1/campaigns/{campaignId}/returns/cancel
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type CancelReturnInput = {
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
  readonly body: ReturnsCancelReturnRequest;
};
/**
 * Успешный ответ метода «Отмена возврата».
 *
 * 200: Информация об операции по отмене возврата.
 *
 * Ответ `200` не значит, что возврат отменен
 *
 * При успешном выполнении запроса это произойдет через некоторое время. [Как проверить статус операции](../../reference/operations/getOperations.md).
 */
export type CancelReturnResponse = ReturnsCancelReturnResponse;
