// Generated public types for this Yandex Market endpoint.
type RegionsGetRegionsResponse = {
  readonly regions: readonly RegionsRegionDTO[];
  readonly paging?: RegionsPackagingForwardScrollingPagerDTO;
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

/**
 * Параметры метода «Поиск регионов по их имени».
 *
 * Возвращает информацию о регионе, удовлетворяющем заданным в запросе условиям поиска.
 *
 * Если найдено несколько регионов, удовлетворяющих условиям поиска, возвращается информация по каждому найденному региону (но не более десяти регионов) для возможности определения нужного региона по родительским регионам.
 *
 * GET /v2/regions
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type SearchRegionsByNameInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Название региона.
     *
     * Важно учитывать регистр: первая буква должна быть заглавной, остальные — строчными. Например, `Москва`.
     */
    readonly name: string;

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
     * Значение по умолчанию: `10`.
     *
     * Минимальное значение: 1.
     *
     * Максимальное значение: 20.
     */
    readonly limit?: number;
  };
};
/**
 * Успешный ответ метода «Поиск регионов по их имени».
 *
 * 200: Список найденных регионов.
 */
export type SearchRegionsByNameResponse = RegionsGetRegionsResponse;
