// Generated public types for this Yandex Market endpoint.
type RegionsFlippingPagerDTO = {
  readonly total?: number;
  readonly from?: number;
  readonly to?: number;
  readonly currentPage?: number;
  readonly pagesCount?: number;
  readonly pageSize?: number;
};
type RegionsGetRegionWithChildrenResponse = {
  readonly pager?: RegionsFlippingPagerDTO;
  readonly paging?: RegionsPackagingForwardScrollingPagerDTO;
  readonly regions?: RegionsRegionWithChildrenDTO;
};
type RegionsPackagingForwardScrollingPagerDTO = {
  readonly nextPageToken?: string;
};
type RegionsRegionDTO = {
  readonly id: number;
  readonly name: string;
  readonly type: RegionsRegionType;
  readonly parent?: RegionsRegionDTO;
};
type RegionsRegionType =
  | "OTHER"
  | "CONTINENT"
  | "REGION"
  | "COUNTRY"
  | "COUNTRY_DISTRICT"
  | "REPUBLIC"
  | "CITY"
  | "VILLAGE"
  | "CITY_DISTRICT"
  | "SUBWAY_STATION"
  | "REPUBLIC_AREA";
type RegionsRegionWithChildrenDTO = {
  readonly id: number;
  readonly name: string;
  readonly type: RegionsRegionType;
  readonly parent?: RegionsRegionDTO;
  readonly children?: readonly RegionsRegionDTO[] | null;
};

/**
 * Параметры метода «Информация о дочерних регионах».
 *
 * Возвращает информацию о регионах, являющихся дочерними по отношению к региону, идентификатор которого указан в запросе.
 *
 * GET /v2/regions/{regionId}/children
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type SearchRegionChildrenInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * Идентификатор региона.
     *
     * Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).
     *
     * Формат: `int64`.
     */
    readonly regionId: number;
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
     * У данного лимита нет значения по умолчанию.
     *
     * Формат: `int32`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 50.
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
 * Успешный ответ метода «Информация о дочерних регионах».
 *
 * 200: Регионы, являющиеся дочерними к указанному в запросе.
 */
export type SearchRegionChildrenResponse = RegionsGetRegionWithChildrenResponse;
