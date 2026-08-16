export interface ListFbsPostingProductCountriesV2Request {
  /**
   * Фильтрация по строке.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly name_search?: string;
}
export interface OzonFbsPostingProductCountryV2 {
  readonly country_iso_code?: string;
  readonly name?: string;
}
export interface ListFbsPostingProductCountriesV2Response {
  readonly result?: readonly OzonFbsPostingProductCountryV2[];
}
