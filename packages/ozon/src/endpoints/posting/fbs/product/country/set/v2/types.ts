export interface SetFbsPostingProductCountryV2Request {
  /**
   * Двухбуквенный код добавляемой страны по стандарту ISO_3166-1. Список доступных
   * стран-изготовителей и их ISO коды можно получить с помощью метода
   * [/v2/posting/fbs/product/country/list](#operation/PostingAPI_ListCountryProductFbsPostingV2).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly country_iso_code: string;

  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;

  /**
   * Идентификатор товара в системе Ozon — `product_id`.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_id: number;
}
export interface SetFbsPostingProductCountryV2Response {
  readonly is_gtd_needed?: boolean;
  readonly product_id?: number;
}
