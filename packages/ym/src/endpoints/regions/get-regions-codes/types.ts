// Generated public types for this Yandex Market endpoint.
type RegionsCountryCode = string;
type RegionsCountryDTO = {
  readonly region: RegionsRegionDTO;
  readonly countryCode: RegionsCountryCode;
};
type RegionsGetRegionsCodesResponse = {
  readonly countries: readonly RegionsCountryDTO[];
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
 * Параметры метода «Список допустимых кодов стран».
 *
 * Возвращает список стран с их кодами в формате :no-translate[ISO 3166-1 alpha-2].
 *
 * Страна производства `countryCode` понадобится при продаже товаров из-за рубежа для бизнеса. [Инструкция](../../step-by-step/business-info.md)
 *
 * POST /v2/regions/countries
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetRegionsCodesInput = undefined;
/**
 * Успешный ответ метода «Список допустимых кодов стран».
 *
 * 200: Список стран с их кодами в формате :no-translate[ISO 3166-1 alpha-2].
 */
export type GetRegionsCodesResponse = RegionsGetRegionsCodesResponse;
