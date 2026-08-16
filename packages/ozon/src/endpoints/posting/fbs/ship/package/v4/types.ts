export interface OzonFbsShipPackageProductV4 {
  /**
   * Идентификаторы экземпляров товара.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly exemplarsIds?: readonly string[];

  /**
   * Идентификатор товара в системе продавца — SKU.
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

export interface ShipFbsPostingPackageV4Request {
  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;

  /**
   * Список товаров в отправлении.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly products?: readonly OzonFbsShipPackageProductV4[];
}

export interface ShipFbsPostingPackageV4Response {
  readonly result?: string;
}
