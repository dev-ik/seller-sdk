// Generated public types for this Yandex Market endpoint.
type StocksApiResponseStatusType = "OK" | "ERROR";
type StocksGetWarehouseStocksDTO = {
  readonly paging?: StocksPackagingForwardScrollingPagerDTO;
  readonly warehouses: readonly StocksWarehouseOffersDTO[];
};
type StocksGetWarehouseStocksRequest = {
  readonly stocksWarehouseId?: number;
  readonly hasStocks?: boolean;
  readonly withTurnover?: boolean;
  readonly archived?: boolean;
  readonly offerIds?: readonly StocksShopSku[] | null;
};
type StocksGetWarehouseStocksResponse = {
  readonly status: StocksApiResponseStatusType;
  readonly result?: StocksGetWarehouseStocksDTO;
};
type StocksPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type StocksShopSku = string;
type StocksTurnoverDTO = {
  readonly turnover: StocksTurnoverType;
  readonly turnoverDays?: number;
};
type StocksTurnoverType =
  | "LOW"
  | "ALMOST_LOW"
  | "HIGH"
  | "VERY_HIGH"
  | "NO_SALES"
  | "FREE_STORE";
type StocksWarehouseOfferDTO = {
  readonly offerId: StocksShopSku;
  readonly turnoverSummary?: StocksTurnoverDTO;
  readonly stocks: readonly StocksWarehouseStockDTO[];
  readonly updatedAt?: string;
};
type StocksWarehouseOffersDTO = {
  readonly warehouseId: number;
  readonly offers: readonly StocksWarehouseOfferDTO[];
};
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
 * Параметры метода «Информация об остатках и оборачиваемости».
 *
 * Возвращает данные об остатках товаров (для всех моделей) и об [оборачиваемости](*turnover) товаров (для модели FBY).
 *
 * Когда использовать этот метод
 *
 * Метод актуален:
 *
 * * для моделей FBY и LaaS;
 * * для моделей FBS, DBS и Экспресс, если в кабинете есть группы складов.
 *
 * Если в кабинете нет групп складов и вы работаете с моделями FBS, DBS или Экспресс, используйте метод [POST v3/businesses/{businessId}/offers/stocks](../../reference/stocks/getStocksOnPartnerWarehouses.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
 *
 * По умолчанию данные по оборачивамости не возращаются
 *
 * Чтобы они были в ответе, передавайте `true` в поле `withTurnover`.
 *
 * **Для моделей FBY и LaaS:** информация об остатках может возвращаться с нескольких складов Маркета, у которых будут разные `warehouseId`. Получить список складов Маркета можно с помощью метода [GET v2/warehouses](../../reference/warehouses/getFulfillmentWarehouses.md).
 *
 * **Для модели FBS:** в ответе может вернуться не только партнерский склад, но и склад возвратов Маркета. Это возможно, если возврат поступил в указанную продавцом точку возвратов и долго не был забран.
 *
 * [//]: <> (turnover: Среднее количество дней, за которое товар продается. Подробно об оборачиваемости рассказано в Справке Маркета для продавцов https://yandex.ru/support/marketplace/analytics/turnover.html.)
 *
 * POST /v2/campaigns/{campaignId}/offers/stocks
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetStocksInput = {
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
  readonly body?: StocksGetWarehouseStocksRequest;
};
/**
 * Успешный ответ метода «Информация об остатках и оборачиваемости».
 *
 * 200: Остатки товаров на складах.
 */
export type GetStocksResponse = StocksGetWarehouseStocksResponse;
