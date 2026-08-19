// Generated public types for this Yandex Market endpoint.
type BidsApiResponseStatusType = "OK" | "ERROR";
type BidsBid = number;
type BidsGetBidsInfoRequest = { readonly skus?: readonly BidsShopSku[] | null };
type BidsGetBidsInfoResponse = {
  readonly status: BidsApiResponseStatusType;
  readonly result?: BidsGetBidsInfoResponseDTO;
};
type BidsGetBidsInfoResponseDTO = {
  readonly bids: readonly BidsSkuBidItemDTO[];
  readonly paging?: BidsPackagingForwardScrollingPagerDTO;
};
type BidsPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type BidsShopSku = string;
type BidsSkuBidItemDTO = { readonly sku: BidsShopSku; readonly bid: BidsBid };

/**
 * Параметры метода «Информация об установленных ставках».
 *
 * Возвращает значения ставок для заданных товаров.
 *
 * Получить информацию по кампаниям, созданным в кабинете, не получится
 *
 * В ответе возвращаются значения только тех ставок, которые вы установили через запрос [PUT v2/businesses/{businessId}/bids](../../reference/bids/putBidsForBusiness.md).
 *
 * POST /v2/businesses/{businessId}/bids/info
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetBidsInfoForBusinessInput = {
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
     * Значение по умолчанию: `250`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 500.
     */
    readonly limit?: number;
  } /**
   * description
   */;
  readonly body?: BidsGetBidsInfoRequest;
};
/**
 * Успешный ответ метода «Информация об установленных ставках».
 *
 * 200: Значения ставок для заданных товаров. В ответ попадают только товары, на которые установлены ставки.
 */
export type GetBidsInfoForBusinessResponse = BidsGetBidsInfoResponse;
