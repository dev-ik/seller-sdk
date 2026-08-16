export interface GetProductPicturesRequest {
  /** Идентификаторы товаров Ozon (`product_id`), не более 1000 за запрос. */
  readonly product_id: readonly string[];
}

export interface OzonProductPictureInfoError {
  readonly message?: string;
  readonly url?: string;
}

export interface OzonProductPictureInfoItem {
  readonly product_id?: number;
  readonly primary_photo?: readonly string[];
  readonly photo?: readonly string[];
  readonly color_photo?: readonly string[];
  readonly errors?: readonly OzonProductPictureInfoError[];
}

export interface GetProductPicturesResponse {
  readonly items?: readonly OzonProductPictureInfoItem[];
}
