import type { OzonCarriageContainerError } from "../../../shared/v1/types.js";

export interface GetCarriageContainerLabelsV1Request {
  /**
   * Идентификаторы грузомест.
   *
   * Максимум: `300`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly container_ids?: readonly string[];
}

export interface GetCarriageContainerLabelsV1Response {
  readonly content?: {
    readonly content_type?: string;
    readonly file_content?: string;
    readonly file_name?: string;
  };
  readonly error_containers?: readonly OzonCarriageContainerError[];
}
