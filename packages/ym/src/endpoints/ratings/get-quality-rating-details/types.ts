// Generated public types for this Yandex Market endpoint.
type RatingsAffectedOrderQualityRatingComponentType =
  | "DBS_CANCELLATION_RATE"
  | "DBS_LATE_DELIVERY_RATE"
  | "FBS_CANCELLATION_RATE"
  | "FBS_LATE_SHIP_RATE";
type RatingsApiResponseStatusType = "OK" | "ERROR";
type RatingsGetQualityRatingDetailsResponse = {
  readonly status: RatingsApiResponseStatusType;
  readonly result?: RatingsQualityRatingDetailsDTO;
};
type RatingsQualityRatingAffectedOrderDTO = {
  readonly orderId: number;
  readonly description: string;
  readonly componentType: RatingsAffectedOrderQualityRatingComponentType;
};
type RatingsQualityRatingDetailsDTO = {
  readonly affectedOrders: readonly RatingsQualityRatingAffectedOrderDTO[];
};

/**
 * Параметры метода «Заказы, которые повлияли на индекс качества».
 *
 * Возвращает список заказов, которые повлияли на индекс качества магазина. Чтобы узнать значение индекса качества, выполните запрос [POST v2/businesses/{businessId}/ratings/quality](../../reference/ratings/getQualityRatings.md).
 *
 * POST /v2/campaigns/{campaignId}/ratings/quality/details
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetQualityRatingDetailsInput = {
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
  };
};
/**
 * Успешный ответ метода «Заказы, которые повлияли на индекс качества».
 *
 * 200: Информация о заказах, которые повлияли на индекс качества.
 */
export type GetQualityRatingDetailsResponse =
  RatingsGetQualityRatingDetailsResponse;
