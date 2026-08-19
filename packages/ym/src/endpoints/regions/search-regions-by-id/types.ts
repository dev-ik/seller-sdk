// Generated public types for this Yandex Market endpoint.
type RegionsGetRegionByIdResponse = {
  readonly regions?: readonly RegionsRegionDTO[] | null;
  readonly region: RegionsRegionDTO;
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
 * Параметры метода «Информация о регионе».
 *
 * Возвращает информацию о регионе.
 *
 * GET /v2/regions/{regionId}
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type SearchRegionsByIdInput = {
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
  };
};
/**
 * Успешный ответ метода «Информация о регионе».
 *
 * 200: Найденный регион.
 */
export type SearchRegionsByIdResponse = RegionsGetRegionByIdResponse;
