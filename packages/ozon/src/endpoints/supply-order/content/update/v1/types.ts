import type { OzonSupplyContentUpdateError } from "../../shared/types.js";
export interface OzonSupplyContentUpdateItem {
  /**
   * Размер кванта.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly quant: number;

  /**
   * Количество товара.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly quantity: number;

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sku: number;
}
export interface UpdateSupplyOrderContentRequest {
  /**
   * Идентификатор заявки на поставку.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly order_id: number;

  /**
   * Идентификатор поставки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: number;

  /**
   * Новый товарный состав заявки на поставку. Максимум 5000 товаров.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly items: readonly OzonSupplyContentUpdateItem[];
}
export interface UpdateSupplyOrderContentResponse {
  readonly errors?: readonly OzonSupplyContentUpdateError[];
  readonly operation_id?: string;
}
