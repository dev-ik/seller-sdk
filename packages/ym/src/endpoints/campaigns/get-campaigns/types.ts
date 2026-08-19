// Generated public types for this Yandex Market endpoint.
type CampaignsApiAvailabilityStatusType =
  | "AVAILABLE"
  | "DISABLED_BY_INACTIVITY"
  | "DISABLED_BY_NO_ACTIVE_CONTRACT"
  | "MANUALLY_DISABLED"
  | "DISABLED_BY_NO_PLACEMENT_TYPE";
type CampaignsBusinessDTO = {
  readonly id?: CampaignsBusinessId;
  readonly name?: string;
};
type CampaignsBusinessId = number;
type CampaignsCampaignDTO = {
  readonly domain?: string;
  readonly id?: CampaignsCampaignId;
  readonly clientId?: number;
  readonly business?: CampaignsBusinessDTO;
  readonly placementType?: CampaignsPlacementType;
  readonly apiAvailability?: CampaignsApiAvailabilityStatusType;
};
type CampaignsCampaignId = number;
type CampaignsFlippingPagerDTO = {
  readonly total?: number;
  readonly from?: number;
  readonly to?: number;
  readonly currentPage?: number;
  readonly pagesCount?: number;
  readonly pageSize?: number;
};
type CampaignsGetCampaignsResponse = {
  readonly campaigns: readonly CampaignsCampaignDTO[];
  readonly pager?: CampaignsFlippingPagerDTO;
  readonly paging?: CampaignsPackagingForwardScrollingPagerDTO;
};
type CampaignsPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type CampaignsPlacementType = "FBS" | "FBY" | "DBS" | "LAAS";

/**
 * Параметры метода «Список магазинов пользователя».
 *
 * **Для Api-Key-токена:** возвращает список магазинов в кабинете, для которого выдан токен. Нельзя получить список только подагентских магазинов.
 *
 * **Для OAuth-токена:** возвращает список магазинов, к которым имеет доступ пользователь — владелец токена авторизации, использованного в запросе. Для агентских пользователей список состоит из подагентских магазинов.
 *
 * Ограничение для параметра `pageSize`
 *
 * Не передавайте значение больше 100.
 *
 * GET /v2/campaigns
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetCampaignsInput = {
  /**
   * Параметры строки запроса.
   */
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
     * У данного лимита нет значения по умолчанию.
     *
     * Формат: `int32`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 100.
     */
    readonly limit?: number;

    /**
     * Параметр устарел и будет отключен 05.10.2026.
     *
     * Вместо `page` и `pageSize` используйте пагинацию по `pageToken` и `limit`.
     *
     * [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)
     *
     * Номер страницы результатов.
     *
     * Используется вместе с параметром `pageSize`.
     *
     * Формат: `int32`.
     *
     * Значение по умолчанию: `1`.
     *
     * Максимальное значение: 10000.
     */
    readonly page?: number;

    /**
     * Параметр устарел и будет отключен 05.10.2026.
     *
     * Вместо `page` и `pageSize` используйте пагинацию по `pageToken` и `limit`.
     *
     * [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)
     *
     * Размер страницы.
     *
     * Используется вместе с параметром `page`.
     *
     * Формат: `int32`.
     */
    readonly pageSize?: number;
  };
};
/**
 * Успешный ответ метода «Список магазинов пользователя».
 *
 * 200: Магазины пользователя.
 */
export type GetCampaignsResponse = CampaignsGetCampaignsResponse;
