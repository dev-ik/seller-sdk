export interface GetRelatedProductSkusRequest {
  /** До 200 исходных SKU как int64-строк. */
  readonly sku: readonly string[];
}

export interface OzonRelatedProductSku {
  /** HIDDEN, AVAILABLE или UNAVAILABLE по описанию OpenAPI. */
  readonly availability?: string;
  /** Дата удаления в формате RFC 3339. */
  readonly deleted_at?: string;
  /** SDS, FBO, FBS или Crossborder по описанию OpenAPI. */
  readonly delivery_schema?: string;
  readonly product_id?: number;
  readonly sku?: number;
}

export interface OzonRelatedProductSkuError {
  readonly code?: string;
  readonly message?: string;
  readonly sku?: number;
}

export interface GetRelatedProductSkusResponse {
  readonly errors?: readonly OzonRelatedProductSkuError[];
  readonly items?: readonly OzonRelatedProductSku[];
}
