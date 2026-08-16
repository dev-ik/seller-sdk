import type {
  CreateSupplyDraftResponse,
  OzonSupplyDraftClusterInfo,
  OzonSupplyDraftDeletionSkuMode,
} from "../../shared/types.js";
export interface CreateDirectSupplyDraftRequest {
  /**
   * Информация о кластере.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cluster_info: OzonSupplyDraftClusterInfo;

  /**
   * Режим удаления SKU, которые не попали в поставку. Возможные значения: - `PARTIAL` — система
   * удалит только те единицы SKU, которые не прошли проверку; - `FULL` — система удалит все единицы
   * SKU, если хотя бы одна единица этого SKU не прошла проверку.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly deletion_sku_mode: OzonSupplyDraftDeletionSkuMode;
}
export type CreateDirectSupplyDraftResponse = CreateSupplyDraftResponse;
