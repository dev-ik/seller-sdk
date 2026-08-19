// Generated public types for this Yandex Market endpoint.
type ShipmentsApiResponseStatusType = "OK" | "ERROR";
type ShipmentsEmptyApiResponse = {
  readonly status: ShipmentsApiResponseStatusType;
};
type ShipmentsTransferOrdersFromShipmentRequest = {
  readonly orderIds: readonly number[];
};

/**
 * Параметры метода «Перенос заказов в следующую отгрузку».
 *
 * Переносит указанные заказы из указанной отгрузки в следующую отгрузку. [Что такое отгрузка?](https://yandex.ru/support/marketplace/orders/fbs/process.html#ship)
 *
 * Используйте этот запрос, если не успеваете собрать и упаковать заказы вовремя.
 *
 * Такие переносы снижают индекс качества магазина
 *
 * Этот запрос предназначен для исключительных случаев. Если вы будете переносить заказы слишком часто, магазин столкнется с ограничениями. [Что за ограничения?](https://yandex.ru/support/marketplace/quality/score/fbs.html)
 *
 * Переносить заказы можно, если до формирования отгрузки осталось больше получаса.
 *
 * Перенос происходит не мгновенно, а занимает несколько минут.
 *
 * POST /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/orders/transfer
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type TransferOrdersFromShipmentInput = {
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

    /**
     * Идентификатор отгрузки.
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly shipmentId: number;
  } /**
   * Тело запроса.
   */;
  readonly body: ShipmentsTransferOrdersFromShipmentRequest;
};
/**
 * Успешный ответ метода «Перенос заказов в следующую отгрузку».
 *
 * 200: Запрос на перенос заказов проверен и принят, и они будут перенесены спустя несколько минут.
 */
export type TransferOrdersFromShipmentResponse = ShipmentsEmptyApiResponse;
