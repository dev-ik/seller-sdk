export interface ListUnpaidLegalProductsV1Request {
  /**
   * Указатель для выборки следующих данных.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cursor?: string;

  /**
   * Количество значений в ответе.
   *
   * Формат: `int32`. Минимум: `1`. Максимум: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;
}
export interface OzonUnpaidLegalProduct {
  readonly image_url?: string;
  readonly name?: string;
  readonly offer_id?: string;
  readonly product_id?: number;
  readonly quantity?: number;
}
export interface ListUnpaidLegalProductsV1Response {
  readonly cursor?: string;
  readonly products?: readonly OzonUnpaidLegalProduct[];
}
