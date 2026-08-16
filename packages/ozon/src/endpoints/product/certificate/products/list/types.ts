type CertificateProductsPagination =
  | {
      /**
       * Количество значений на странице.
       *
       * Формат: `int64`. Минимум: `1`. Максимум: `1000`.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly limit: number;

      /**
       * Идентификатор последнего значения на странице. При первом запросе оставьте это поле пустым.
       * Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
       *
       * Формат: `int64`.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly last_id?: number;
      readonly page?: never;
      readonly page_size?: never;
    }
  | {
      /** @deprecated Use `limit` and `last_id`. */
      readonly page: number;
      /** @deprecated Use `limit` and `last_id`. */
      readonly page_size: number;
      readonly limit?: never;
      readonly last_id?: never;
    };

export type ListCertificateProductsRequest = {
  /**
   * Идентификатор сертификата.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly certificate_id: number;

  /**
   * Статус проверки товара при привязке к сертификату.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_status_code?: string;
} & CertificateProductsPagination;

export interface OzonCertificateProduct {
  readonly product_id?: number;
  readonly product_status_code?: string;
  readonly sku?: number;
}

export interface ListCertificateProductsResponse {
  readonly result?: {
    readonly items?: readonly OzonCertificateProduct[];
    readonly count?: number;
  };
}
