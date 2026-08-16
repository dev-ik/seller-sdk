import type { PromotionProductsChangeResponse } from "../shared/types.js";

export interface DeactivatePromotionProductsRequest {
  /**
   * Идентификатор акции. Можно получить с помощью метода [/v1/actions](#operation/Promos).
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_id: number;

  /**
   * Список идентификаторов товаров в системе Ozon — `product_id`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_ids: readonly number[];
}

export type DeactivatePromotionProductsResponse =
  PromotionProductsChangeResponse;
