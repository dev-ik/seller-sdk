export interface ListProductsWithWrongVolumeRequest {
  /** Cursor из предыдущего ответа; для первой страницы можно не передавать. */
  readonly cursor?: string;
  /** Максимальное количество товаров в ответе, от 1 до 1000. */
  readonly limit: number;
}

export interface OzonWrongVolumeProduct {
  readonly height?: number;
  readonly length?: number;
  readonly name?: string;
  readonly offer_id?: string;
  readonly product_id?: number;
  readonly sku?: number;
  readonly weight?: number;
  readonly width?: number;
}

export interface ListProductsWithWrongVolumeResponse {
  readonly cursor?: string;
  readonly products?: readonly OzonWrongVolumeProduct[];
}
