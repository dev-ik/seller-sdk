import type { PromotionProductsChangeResponse } from "../shared/types.js";

export interface OzonPromotionProductActivation {
  /**
   * Идентификатор товара в системе Ozon — `product_id`.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly product_id: number;

  /**
   * Цена товара по акции.
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_price: number;

  /**
   * Количество единиц товара в акции типа «Скидка на сток».
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly stock?: number;
}

export interface ActivatePromotionProductsRequest {
  /**
   * Идентификатор акции. Можно получить с помощью метода [/v1/actions](#operation/Promos).
   *
   * Формат: `double`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_id: number;

  /**
   * Список товаров.
   *
   * Максимум элементов: `1000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly products: readonly OzonPromotionProductActivation[];
}

export type ActivatePromotionProductsResponse = PromotionProductsChangeResponse;
