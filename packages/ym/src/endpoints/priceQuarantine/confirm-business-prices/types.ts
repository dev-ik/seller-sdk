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
 * Параметры метода «Удаление товара из карантина по цене в кабинете».
 *
 * Подтверждает во всех магазинах цену на товары, которые попали в карантин, и удаляет их из карантина.
 *
 * Товар попадает в карантин, если его цена меняется слишком резко. [Как настроить карантин](https://yandex.ru/support/marketplace/assortment/operations/prices.html#quarantine)
 *
 * Чтобы увидеть список товаров, которые попали в карантин, используйте запрос [POST v2/businesses/{businessId}/price-quarantine](getBusinessQuarantineOffers.md).
 *
 * POST /v2/businesses/{businessId}/price-quarantine/confirm
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type ConfirmBusinessPricesInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Идентификатор кабинета.
     *
     * Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).
     *
     * ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)
     *
     * Формат: `int64`.
     *
     * Минимальное значение: 1.
     */
    readonly businessId: number;
  } /**
   * Тело запроса.
   */;
  readonly body: PriceQuarantineConfirmPricesRequest;
};
/**
 * Успешный ответ метода «Удаление товара из карантина по цене в кабинете».
 *
 * 200: Ответ `200` обозначает, что цены подтверждены.
 */
export type ConfirmBusinessPricesResponse = PriceQuarantineEmptyApiResponse;
