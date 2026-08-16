export interface ImportProductPicturesRequest {
  /**
   * Маркетинговый цвет.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly color_image?: string;
  /** Полный набор изображений в нужном порядке, до 30 ссылок. */
  readonly images?: readonly string[];

  /**
   * Идентификатор товара в системе Ozon — `product_id`.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_id: number;
}

export interface OzonProductPictureImportResultItem {
  readonly is_color?: boolean;
  readonly is_primary?: boolean;
  readonly product_id?: number;
  readonly state?: string;
  readonly url?: string;
}

export interface OzonProductPictureImportResult {
  readonly pictures?: readonly OzonProductPictureImportResultItem[];
}

export interface ImportProductPicturesResponse {
  readonly result?: OzonProductPictureImportResult;
}
