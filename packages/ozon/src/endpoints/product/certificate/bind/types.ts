type CertificateProductSelection =
  | {
      /**
       * Список идентификаторов товаров в системе Ozon — SKU, к которым относится этот сертификат.
       *
       * Максимум элементов: `1000`.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly skus: readonly string[];
      readonly product_id?: never;
    }
  | {
      /**
       * Массив идентификаторов товаров в системе Ozon — `product_id`, к которым относится этот
       * сертификат.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly product_id: readonly number[];
      readonly skus?: never;
    };
export type BindProductCertificateRequest = {
  /**
   * Идентификатор сертификата, который был присвоен при его загрузке.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly certificate_id: number;
} & CertificateProductSelection;
export interface BindProductCertificateResponse {
  readonly result?: boolean;
}
