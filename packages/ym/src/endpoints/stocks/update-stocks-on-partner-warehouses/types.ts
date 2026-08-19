// Generated public types for this Yandex Market endpoint.
type StocksApiResponseStatusType = "OK" | "ERROR";
type StocksEmptyApiResponse = { readonly status: StocksApiResponseStatusType };
type StocksShopSku = string;
type StocksUpdateStockOnWarehouseItemDTO = {
  readonly sku: StocksShopSku;
  readonly partnerWarehouseId: number;
  readonly count: number;
  readonly updatedAt?: string;
};
type StocksUpdateStocksOnWarehousesRequest = {
  readonly skuItems: readonly StocksUpdateStockOnWarehouseItemDTO[];
};

/**
 * Параметры метода «Передача информации об остатках».
 *
 * Передает данные об остатках товаров на витрине.
 *
 * Обязательно указывайте SKU **в точности** так, как он указан в каталоге. Например, _557722_ и _0557722_ — это два разных SKU.
 *
 * Данные в каталоге обновляются не мгновенно
 *
 * Это занимает до нескольких минут.
 *
 * Метод подходит, только если в кабинете нет групп складов
 *
 * Если в кабинете есть группы складов, используйте метод [PUT v2/campaigns/{campaignId}/offers/stocks](../../reference/stocks/updateStocks.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
 *
 * POST /v3/businesses/{businessId}/offers/stocks/update
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateStocksOnPartnerWarehousesInput = {
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
  readonly body: StocksUpdateStocksOnWarehousesRequest;
};
/**
 * Успешный ответ метода «Передача информации об остатках».
 *
 * 200: Пустой ответ.
 */
export type UpdateStocksOnPartnerWarehousesResponse = StocksEmptyApiResponse;
