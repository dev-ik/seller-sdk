import type { OzonCarriageContainerTaskResponse } from "../../shared/v1/types.js";

export interface RemoveCarriageContainersFromV1Request {
  /**
   * Идентификаторы грузомест.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly child_container_ids: readonly string[];

  /**
   * Идентификатор родительского грузоместа — палеты.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly parent_container_id: number;
}

export type RemoveCarriageContainersFromV1Response =
  OzonCarriageContainerTaskResponse;
