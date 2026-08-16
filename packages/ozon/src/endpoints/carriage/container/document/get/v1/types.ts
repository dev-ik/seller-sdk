export interface GetCarriageContainerDocumentsV1Request {
  /**
   * Идентификаторы грузомест.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly container_ids: readonly string[];
}

export interface GetCarriageContainerDocumentsV1Response {
  readonly content_type?: string;
  readonly file_content?: string;
  readonly file_name?: string;
}
