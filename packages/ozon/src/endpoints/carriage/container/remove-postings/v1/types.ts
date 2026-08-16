import type { OzonCarriagePostingTaskResponse } from "../../shared/v1/types.js";

export interface RemoveCarriageContainerPostingsV1Request {
  /**
   * Идентификатор грузоместа.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly container_id: number;

  /**
   * Номера отправлений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_numbers: readonly string[];
}

export type RemoveCarriageContainerPostingsV1Response =
  OzonCarriagePostingTaskResponse;
