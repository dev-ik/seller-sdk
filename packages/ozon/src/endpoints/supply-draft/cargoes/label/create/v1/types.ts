import type { OzonCargoLabelErrors } from "../../../shared/types.js";
export interface CreateSupplyCargoLabelsRequest {
  /**
   * Идентификатор поставки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: number;

  /**
   * Информация о грузоместах.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cargoes?: readonly {
    /**
     * Идентификатор грузоместа.
     *
     * Формат: `int64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly cargo_id?: number;
  }[];
}
export interface CreateSupplyCargoLabelsResponse {
  readonly operation_id?: string;
  readonly errors?: OzonCargoLabelErrors;
}
