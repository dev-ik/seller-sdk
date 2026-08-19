// Generated public types for this Yandex Market endpoint.
type OrdersApiResponseStatusType = "OK" | "ERROR";
type OrdersEmptyApiResponse = { readonly status: OrdersApiResponseStatusType };
type OrdersUpdateExternalOrderIdRequest = { readonly externalOrderId: string };

/**
 * Параметры метода «Передача внешнего идентификатора заказа».
 *
 * Передает Маркету идентификатор заказа в системе магазина.
 *
 * Его нельзя передавать:
 *
 * * больше одного раза;
 * * после перехода заказа в статус `PROCESSING` с подстатусом `READY_TO_SHIP`.
 *
 * Этот идентификатор отражается в документах отгрузки: акте приема-передачи, листе сборки и ярлыках.
 *
 * В штрихкодах могут быть только символы ASCII
 *
 * Если во внешнем идентификаторе вы используете другие символы, на ярлыке в штрихкоде будет отображаться идентификатор заказа Маркета.
 *
 * POST /v2/campaigns/{campaignId}/orders/{orderId}/external-id
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateExternalOrderIdInput = {
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
     * Идентификатор заказа.
     *
     * Формат: `int64`.
     */
    readonly orderId: number;
  } /**
   * Тело запроса.
   */;
  readonly body: OrdersUpdateExternalOrderIdRequest;
};
/**
 * Успешный ответ метода «Передача внешнего идентификатора заказа».
 *
 * 200: Внешний идентификатор заказа успешно передан.
 */
export type UpdateExternalOrderIdResponse = OrdersEmptyApiResponse;
