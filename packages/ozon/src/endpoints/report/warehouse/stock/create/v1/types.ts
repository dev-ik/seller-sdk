import type {
  OzonCreateReportResponse,
  OzonReportLanguage,
} from "../../../../shared/types.js";
export interface CreateWarehouseStockReportV1Request {
  /**
   * Язык ответа: - `RU` — русский, - `EN` — английский.
   *
   * Пример: `DEFAULT`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly language?: OzonReportLanguage;

  /**
   * Идентификаторы складов. Ограничение значений в запросе. Максимум — 50.
   *
   * Максимальная длина: `50`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouseId: readonly string[];
}
export type CreateWarehouseStockReportV1Response = OzonCreateReportResponse;
