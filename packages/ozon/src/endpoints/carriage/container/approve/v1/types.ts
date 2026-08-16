import type { OzonCarriageContainerTaskResponse } from "../../shared/v1/types.js";

export interface ApproveCarriageContainersV1Request {
  /**
   * Идентификаторы грузомест.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly container_ids: readonly string[];
}

export type ApproveCarriageContainersV1Response =
  OzonCarriageContainerTaskResponse;
