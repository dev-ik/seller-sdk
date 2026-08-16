import type { OzonSupplyCargoes } from "../../shared/types.js";
export interface GetSupplyCargoesRequest {
  /**
   * Список идентификаторов поставок в заявке.
   *
   * Максимум элементов: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_ids: readonly string[];
}
export interface GetSupplyCargoesResponse {
  readonly supply?: readonly OzonSupplyCargoes[];
}
