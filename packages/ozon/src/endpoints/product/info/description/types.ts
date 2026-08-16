export type GetProductDescriptionRequest =
  | {
      /** Идентификатор товара в системе продавца — артикул. */
      readonly offer_id: string;
      /**
       * Идентификатор товара в системе Ozon — `product_id`.
       *
       * Формат: `int64`.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly product_id?: never;
    }
  | {
      /**
       * Идентификатор товара в системе продавца — артикул.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly offer_id?: never;
      /** Идентификатор товара в системе Ozon. */
      readonly product_id: number;
    };

export interface OzonProductDescription {
  readonly description?: string;
  readonly id?: number;
  readonly name?: string;
  readonly offer_id?: string;
}

export interface GetProductDescriptionResponse {
  readonly result?: OzonProductDescription;
}
