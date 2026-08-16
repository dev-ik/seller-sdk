import type { OzonCarriageContainerDetails } from "../../shared/v1/types.js";

export interface GetCarriageContainerV1Request {
  /**
   * Идентификатор грузоместа.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly container_id: number;
}

export type GetCarriageContainerV1Response = OzonCarriageContainerDetails;
