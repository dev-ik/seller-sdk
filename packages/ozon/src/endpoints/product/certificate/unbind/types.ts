type CertificateProductSelection =
  | {
      /**
       * Список идентификаторов товаров в системе Ozon — SKU, которые нужно отвязать от сертификата.
       *
       * Максимум элементов: `1000`.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly skus: readonly string[];
      readonly product_id?: never;
    }
  | {
      /** @deprecated Use `skus`. */
      readonly product_id: readonly string[];
      readonly skus?: never;
    };

export type UnbindProductCertificateRequest = {
  /**
   * Идентификатор сертификата.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly certificate_id: number;
} & CertificateProductSelection;

export interface OzonCertificateUnbindResult {
  readonly error?: string;
  readonly product_id?: number;
  readonly updated?: boolean;
}

export interface UnbindProductCertificateResponse {
  readonly result?: readonly OzonCertificateUnbindResult[];
}
