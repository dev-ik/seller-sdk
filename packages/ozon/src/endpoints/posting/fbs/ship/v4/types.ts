export interface OzonFbsShipProductV4 {
  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_id: number;

  /**
   * Количество экземпляров.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly quantity: number;
}
export interface OzonFbsShipPackageV4 {
  /**
   * Список товаров в отправлении.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly products: readonly OzonFbsShipProductV4[];
}
export interface ShipFbsPostingV4Request {
  /**
   * Список упаковок. Каждая упаковка содержит список отправлений, на которые делится заказ.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly packages: readonly OzonFbsShipPackageV4[];

  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;

  /**
   * Дополнительная информация.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly with?: {
    /**
     * Чтобы получить дополнительную информацию, передайте `true`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly additional_data?: boolean;
  };
}
export interface OzonFbsShipProductDetailV4 {
  readonly mandatory_mark?: readonly string[];
  readonly name?: string;
  readonly offer_id?: string;
  readonly price?: string;
  readonly quantity?: number;
  readonly sku?: number;
  readonly currency_code?: string;
}
export interface OzonFbsShipAdditionalDataV4 {
  readonly posting_number?: string;
  readonly products?: readonly OzonFbsShipProductDetailV4[];
}
export interface ShipFbsPostingV4Response {
  readonly additional_data?: readonly OzonFbsShipAdditionalDataV4[];
  readonly result?: readonly string[];
}
