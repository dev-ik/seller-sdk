import type {
  CreateSupplyDraftResponse,
  OzonSupplyDraftClusterInfo,
  OzonSupplyDraftDeletionSkuMode,
  OzonSupplyDraftDeliveryInfo,
} from "../../shared/types.js";
export interface CreateMultiClusterSupplyDraftRequest {
  /**
   * Информация о кластерах.
   *
   * Максимум элементов: `20`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly clusters_info: readonly OzonSupplyDraftClusterInfo[];

  /**
   * Режим удаления SKU, которые не попали в поставку. Возможные значения: - `PARTIAL` — система
   * удалит только те единицы SKU, которые не прошли проверку; - `FULL` — система удалит все единицы
   * SKU, если хотя бы одна единица этого SKU не прошла проверку.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly deletion_sku_mode: OzonSupplyDraftDeletionSkuMode;

  /**
   * Информация о доставке.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_info: OzonSupplyDraftDeliveryInfo;
}
export type CreateMultiClusterSupplyDraftResponse = CreateSupplyDraftResponse;
