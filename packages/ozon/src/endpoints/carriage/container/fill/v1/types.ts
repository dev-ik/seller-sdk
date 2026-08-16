import type { OzonCarriagePostingTaskResponse } from "../../shared/v1/types.js";

export interface FillCarriageContainerV1Request {
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
   * Максимум: `300`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_numbers: readonly string[];
}

export type FillCarriageContainerV1Response = OzonCarriagePostingTaskResponse;
