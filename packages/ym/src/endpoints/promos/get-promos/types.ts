// Generated public types for this Yandex Market endpoint.
type PromosApiResponseStatusType = "OK" | "ERROR";
type PromosChannelType =
  | "PUSH"
  | "STRETCH_MAIN"
  | "MAIN_PAGE_CAROUSEL"
  | "PRODUCT_RETAIL_PAGE"
  | "MAIN_PAGE_CAROUSEL_WEB"
  | "PRODUCT_SEPARATE_LANDING"
  | "SUPER_SHELF_CATEGORY"
  | "CAROUSEL_RETAIL_PAGE"
  | "POPUP_APPLICATION"
  | "POST_TELEGRAM"
  | "CPA"
  | "WEB_PERFORMANCE_DIRECT"
  | "APP_PERFORMANCE"
  | "BANNER_PICKUP_POINT"
  | "BLOGGER_PERFORMANCE"
  | "DIGITAL_CHANNEL_BANNER"
  | "YANDEX_ECOSYSTEM_CHANNELS"
  | "PARTNERS_MAIN_BANNER"
  | "OTHER";
type PromosGetPromoAssortmentInfoDTO = {
  readonly activeOffers: number;
  readonly potentialOffers?: number;
  readonly processing?: boolean;
};
type PromosGetPromoBestsellerInfoDTO = {
  readonly bestseller: boolean;
  readonly entryDeadline?: string;
  readonly renewalEnabled?: boolean;
};
type PromosGetPromoConstraintsDTO = {
  readonly warehouseIds?: readonly number[] | null;
};
type PromosGetPromoDTO = {
  readonly id: string;
  readonly name: string;
  readonly period: PromosPromoPeriodDTO;
  readonly participating: boolean;
  readonly assortmentInfo: PromosGetPromoAssortmentInfoDTO;
  readonly mechanicsInfo: PromosGetPromoMechanicsInfoDTO;
  readonly bestsellerInfo: PromosGetPromoBestsellerInfoDTO;
  readonly channels?: readonly PromosChannelType[] | null;
  readonly constraints?: PromosGetPromoConstraintsDTO;
};
type PromosGetPromoMechanicsInfoDTO = {
  readonly type: PromosMechanicsType;
  readonly promocodeInfo?: PromosGetPromoPromocodeInfoDTO;
};
type PromosGetPromoPromocodeInfoDTO = {
  readonly promocode: string;
  readonly discount: number;
};
type PromosGetPromosRequest = {
  readonly participation?: PromosPromoParticipationType;
  readonly mechanics?: PromosMechanicsType;
};
type PromosGetPromosResponse = {
  readonly status: PromosApiResponseStatusType;
  readonly result?: PromosGetPromosResultDTO;
};
type PromosGetPromosResultDTO = {
  readonly promos: readonly PromosGetPromoDTO[];
};
type PromosMechanicsType =
  | "DIRECT_DISCOUNT"
  | "BLUE_FLASH"
  | "MARKET_PROMOCODE";
type PromosPromoParticipationType = "PARTICIPATING_NOW" | "PARTICIPATED";
type PromosPromoPeriodDTO = {
  readonly dateTimeFrom: string;
  readonly dateTimeTo: string;
};

/**
 * Параметры метода «Получение списка акций».
 *
 * Возвращает информацию об акциях Маркета. Не возвращает данные об акциях, которые создал продавец.
 *
 * По умолчанию возвращаются акции, в которых продавец участвует или может принять участие.
 *
 * Чтобы получить текущие или завершенные акции, передайте параметр `participation`.
 *
 * Типы акций, которые возвращаются в ответе:
 *
 * * прямая скидка;
 * * флеш-акция;
 * * скидка по промокоду.
 *
 * POST /v2/businesses/{businessId}/promos
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetPromosInput = {
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
  readonly body?: PromosGetPromosRequest;
};
/**
 * Успешный ответ метода «Получение списка акций».
 *
 * 200: Список акций Маркета.
 */
export type GetPromosResponse = PromosGetPromosResponse;
