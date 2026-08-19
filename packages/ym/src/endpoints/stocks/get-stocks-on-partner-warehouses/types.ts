// Generated public types for this Yandex Market endpoint.
type StocksApiResponseStatusType = "OK" | "ERROR";
type StocksGetStocksOnPartnerWarehousesDTO = {
  readonly partnerWarehouseId: number;
  readonly offers: readonly StocksPartnerWarehouseOfferDTO[];
  readonly paging?: StocksPackagingForwardScrollingPagerDTO;
};
type StocksGetStocksOnPartnerWarehousesRequest = {
  readonly partnerWarehouseId: number;
  readonly archived?: boolean;
  readonly offerIds?: readonly StocksShopSku[] | null;
};
type StocksGetStocksOnPartnerWarehousesResponse = {
  readonly status: StocksApiResponseStatusType;
  readonly result?: StocksGetStocksOnPartnerWarehousesDTO;
};
type StocksPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type StocksPartnerWarehouseOfferDTO = {
  readonly offerId: StocksShopSku;
  readonly stocks: readonly StocksWarehouseStockDTO[];
  readonly updatedAt?: string;
};
type StocksShopSku = string;
type StocksWarehouseStockDTO = {
  readonly type: StocksWarehouseStockType;
  readonly count: number;
};
type StocksWarehouseStockType =
  | "FIT"
  | "FREEZE"
  | "AVAILABLE"
  | "QUARANTINE"
  | "UTILIZATION"
  | "DEFECT"
  | "EXPIRED";

/**
 * Параметры метода «Информация об остатках».
 *
 * Возвращает данные об остатках товаров на складе кабинета.
 *
 * Метод подходит, только если в кабинете нет групп складов
 *
 * Если в кабинете есть группы складов, используйте метод [POST v2/campaigns/{campaignId}/offers/stocks](../../reference/stocks/getStocks.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
 *
 * POST /v3/businesses/{businessId}/offers/stocks
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetStocksOnPartnerWarehousesInput = {
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
   * Параметры строки запроса.
   */;
  readonly query?: {
    /**
     * Идентификатор страницы c результатами.
     *
     * Если параметр не указан, возвращается первая страница.
     *
     * Передавайте значение выходного параметра `nextPageToken`, полученное при последнем запросе.
     */
    readonly pageToken?: string;

    /**
     * Количество элементов на странице.
     *
     * Формат: `int32`.
     *
     * Значение по умолчанию: `50`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 100.
     */
    readonly limit?: number;
  } /**
   * Тело запроса.
   */;
  readonly body: StocksGetStocksOnPartnerWarehousesRequest;
};
/**
 * Успешный ответ метода «Информация об остатках».
 *
 * 200: Остатки товаров на складе.
 */
export type GetStocksOnPartnerWarehousesResponse =
  StocksGetStocksOnPartnerWarehousesResponse;
