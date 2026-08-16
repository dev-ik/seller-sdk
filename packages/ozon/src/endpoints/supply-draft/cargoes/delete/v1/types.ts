import type { OzonCargoDeleteError } from "../../shared/types.js";
export interface DeleteSupplyCargoesRequest {
  /**
   * Список идентификаторов грузомест, которые нужно удалить. Максимум 70 значений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cargo_ids: readonly string[];

  /**
   * Идентификатор поставки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: number;
}
export interface DeleteSupplyCargoesResponse {
  readonly errors?: OzonCargoDeleteError;
  readonly operation_id?: string;
}
