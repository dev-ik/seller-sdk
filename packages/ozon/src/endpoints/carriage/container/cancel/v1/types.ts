import type { OzonCarriageContainerTaskResponse } from "../../shared/v1/types.js";

export interface CancelCarriageContainersV1Request {
  /**
   * Идентификаторы грузомест.
   *
   * Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly container_ids: readonly string[];
}

export type CancelCarriageContainersV1Response =
  OzonCarriageContainerTaskResponse;
