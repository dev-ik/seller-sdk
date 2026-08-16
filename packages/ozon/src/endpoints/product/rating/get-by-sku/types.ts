export interface GetProductRatingBySkuRequest {
  /**
   * Идентификаторы товаров в системе Ozon — SKU, для которых нужно вернуть контент-рейтинг.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly skus: readonly string[];
}

export interface OzonProductContentRatingCondition {
  readonly cost?: number;
  readonly description?: string;
  readonly fulfilled?: boolean;
  readonly key?: string;
}

export interface OzonProductContentRatingImproveAttribute {
  readonly id?: number;
  readonly name?: string;
}

export interface OzonProductContentRatingGroup {
  readonly conditions?: readonly OzonProductContentRatingCondition[];
  readonly improve_at_least?: number;
  readonly improve_attributes?: readonly OzonProductContentRatingImproveAttribute[];
  readonly key?: string;
  readonly name?: string;
  readonly rating?: number;
  readonly weight?: number;
}

export interface OzonProductContentRating {
  readonly groups?: readonly OzonProductContentRatingGroup[];
  readonly rating?: number;
  readonly sku?: number;
}

export interface GetProductRatingBySkuResponse {
  readonly products?: readonly OzonProductContentRating[];
}
