export interface GetProductImportStatusRequest {
  /**
   * Код задачи на импорт товаров. Можно получить с помощью метода
   * [/v3/product/import](#operation/ProductAPI_ImportProductsV3).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly task_id: number;
}

export interface OzonProductImportItemError {
  readonly attribute_id?: number;
  readonly attribute_name?: string;
  readonly code?: string;
  readonly description?: string;
  readonly field?: string;
  readonly level?: string;
  readonly message?: string;
  readonly state?: string;
}

export interface OzonProductImportStatusItem {
  readonly errors?: readonly OzonProductImportItemError[];
  readonly offer_id?: string;
  readonly product_id?: number;
  /** Документированные значения: pending, imported, failed и skipped. */
  readonly status?: string;
}

export interface OzonProductImportStatusResult {
  readonly items?: readonly OzonProductImportStatusItem[];
  readonly total?: number;
}

export interface GetProductImportStatusResponse {
  readonly result?: OzonProductImportStatusResult;
}
