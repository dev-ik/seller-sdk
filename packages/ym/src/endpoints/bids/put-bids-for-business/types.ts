// Generated public types for this Yandex Market endpoint.
type BidsApiResponseStatusType = "OK" | "ERROR";
type BidsBid = number;
type BidsEmptyApiResponse = { readonly status: BidsApiResponseStatusType };
type BidsPutSkuBidsRequest = { readonly bids: readonly BidsSkuBidItemDTO[] };
type BidsShopSku = string;
type BidsSkuBidItemDTO = { readonly sku: BidsShopSku; readonly bid: BidsBid };

/**
 * Параметры метода «Включение буста продаж и установка ставок».
 *
 * Запускает буст продаж — создает и включает кампанию, добавляет в нее товары и назначает на них ставки.
 *
 * Как в кабинете выглядит кампания, созданная через API
 *
 * ![](../../_images/api-boost.png)
 *
 * При первом использовании запроса Маркет: создаст единую на все магазины бизнес-аккаунта кампанию, добавит в нее товары с указанными ставками, включит для них ценовую стратегию и запустит продвижение. Повторное использование запроса позволит обновить ставки на товары в этой кампании или добавить новые. Подробнее о ценовой стратегии читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/marketing/campaigns.html#price-strategy).
 *
 * Если товара с указанным SKU нет, он будет проигнорирован. Если в будущем в каталоге появится товар с таким SKU, он автоматически будет добавлен в кампанию с указанной ставкой.
 *
 * Запрос всегда работает с одной и той же созданной через API кампанией. Если в кабинете удалить ее, при следующем выполнении запроса Маркет создаст новую. Другими кампаниями управлять через API не получится. У созданной через API кампании всегда наибольший приоритет над остальными — изменить его нельзя.
 *
 * Выполнение запроса включает кампанию и ценовую стратегию, если они были отключены.
 *
 * Внести другие изменения в созданную через API кампанию можно в кабинете:
 *
 * * выключить или включить кампанию;
 * * изменить ее название;
 * * выключить или включить ценовую стратегию.
 *
 * Чтобы остановить продвижение отдельных товаров и удалить их из кампании, передайте для них нулевую ставку в параметре `bid`.
 *
 * Подробнее о том, как работает буст продаж, читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/marketing/campaigns.html).
 *
 * Узнать расходы на буст продаж можно с помощью запроса [POST v2/campaigns/{campaignId}/stats/orders](../../reference/orders-stats/getOrdersStats.md). Сумма содержится в поле `bidFee`.
 *
 * Данные обновляются не мгновенно
 *
 * Это занимает до нескольких минут.
 *
 * PUT /v2/businesses/{businessId}/bids
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type PutBidsForBusinessInput = {
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
   * description
   */;
  readonly body: BidsPutSkuBidsRequest;
};
/**
 * Успешный ответ метода «Включение буста продаж и установка ставок».
 *
 * 200: Все получилось: ставки установлены или обновлены. Если нужно, добавлены новые товары и запущена кампания.
 */
export type PutBidsForBusinessResponse = BidsEmptyApiResponse;
