// Generated public types for this Yandex Market endpoint.
type StocksApiResponseStatusType = "OK" | "ERROR";
type StocksEmptyApiResponse = { readonly status: StocksApiResponseStatusType };
type StocksShopSku = string;
type StocksUpdateStockDTO = {
  readonly sku: StocksShopSku;
  readonly items: readonly StocksUpdateStockItemDTO[];
};
type StocksUpdateStockItemDTO = {
  readonly count: number;
  readonly updatedAt?: string;
};
type StocksUpdateStocksRequest = {
  readonly skus: readonly StocksUpdateStockDTO[];
};

/**
 * Параметры метода «Передача информации об остатках».
 *
 * Передает данные об остатках товаров на витрине.
 *
 * Когда использовать этот метод
 *
 * Метод актуален только для кабинетов с группами складов. Если в кабинете нет групп складов, используйте метод [POST v3/businesses/{businessId}/offers/stocks/update](../../reference/stocks/updateStocksOnPartnerWarehouses.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
 *
 * Для группы складов передавайте остатки только для **одного любого склада**. Информация для остальных складов в этой группе обновится автоматически.
 *
 * Обязательно указывайте SKU **в точности** так, как он указан в каталоге. Например, _557722_ и _0557722_ — это два разных SKU.
 *
 * Данные в каталоге обновляются не мгновенно
 *
 * Это занимает до нескольких минут.
 *
 * PUT /v2/campaigns/{campaignId}/offers/stocks
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type UpdateStocksInput = {
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
  readonly body: StocksUpdateStocksRequest;
};
/**
 * Успешный ответ метода «Передача информации об остатках».
 *
 * 200: Пустой ответ.
 */
export type UpdateStocksResponse = StocksEmptyApiResponse;
