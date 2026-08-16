import type { OzonCargoRulesCheck } from "../../../shared/types.js";
export interface GetSupplyCargoesRulesRequest {
  /**
   * Список идентификаторов поставок в заявке. Максимум 100 идентификаторов.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_ids: readonly string[];
}
export interface GetSupplyCargoesRulesResponse {
  readonly supply_check_lists?: readonly OzonCargoRulesCheck[];
}
