export interface OzonProductDeleteInput {
  /** Идентификатор товара в системе продавца — артикул. */
  readonly offer_id: string;
}

export interface DeleteProductsRequest {
  /** До 500 архивных товаров без SKU. */
  readonly products: readonly OzonProductDeleteInput[];
}

export interface OzonProductDeleteStatus {
  readonly error?: string;
  readonly is_deleted?: boolean;
  readonly offer_id?: string;
}

export interface DeleteProductsResponse {
  /** Поэлементные результаты удаления. */
  readonly status?: readonly OzonProductDeleteStatus[];
}
