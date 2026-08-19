// Generated public types for this Yandex Market endpoint.
type OrderDeliveryApiResponseStatusType = "OK" | "ERROR";
type OrderDeliveryEmptyApiResponse = {
  readonly status: OrderDeliveryApiResponseStatusType;
};
type OrderDeliverySetOrderDeliveryTrackCodeRequest = {
  readonly trackCode: string;
  readonly deliveryServiceId: number;
};

/**
 * Параметры метода «Передача трек‑номера посылки».
 *
 * Передает Маркету трек‑номер, по которому покупатель может отследить посылку со своим заказом через службу доставки. Если покупатели смогут узнать, на каком этапе доставки находятся их заказы, доверие покупателей к вашему магазину может возрасти.
 *
 * Передать трек‑номер можно, только если заказ находится в статусе `PROCESSING`, `DELIVERY` или `PICKUP`.
 *
 * POST /v2/campaigns/{campaignId}/orders/{orderId}/delivery/track
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type SetOrderDeliveryTrackCodeInput = {
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
  readonly body: OrderDeliverySetOrderDeliveryTrackCodeRequest;
};
/**
 * Успешный ответ метода «Передача трек‑номера посылки».
 *
 * 200: Трек‑номер посылки и идентификатор службы доставки были успешно переданы.
 */
export type SetOrderDeliveryTrackCodeResponse = OrderDeliveryEmptyApiResponse;
