// Generated public types for this Yandex Market endpoint.
type PriceQuarantineApiResponseStatusType = "OK" | "ERROR";
type PriceQuarantineConfirmPricesRequest = {
  readonly offerIds: readonly PriceQuarantineShopSku[];
};
type PriceQuarantineEmptyApiResponse = {
  readonly status: PriceQuarantineApiResponseStatusType;
};
type PriceQuarantineShopSku = string;

/**
 * Параметры метода «Удаление товара из карантина по цене в магазине».
 *
 * Подтверждает в заданном магазине цену на товары, которые попали в карантин, и удаляет их из карантина.
 *
 * Товар попадает в карантин, если его цена меняется слишком резко. [Как настроить карантин](https://yandex.ru/support/marketplace/assortment/operations/prices.html#quarantine)
 *
 * Чтобы увидеть список товаров, которые попали в карантин, используйте запрос [POST v2/campaigns/{campaignId}/price-quarantine](getCampaignQuarantineOffers.md).
 *
 * POST /v2/campaigns/{campaignId}/price-quarantine/confirm
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type ConfirmCampaignPricesInput = {
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
  readonly body: PriceQuarantineConfirmPricesRequest;
};
/**
 * Успешный ответ метода «Удаление товара из карантина по цене в магазине».
 *
 * 200: Ответ `200` обозначает, что цены подтверждены.
 */
export type ConfirmCampaignPricesResponse = PriceQuarantineEmptyApiResponse;
