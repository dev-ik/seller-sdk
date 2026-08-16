import type { OzonSellerActionCurrency } from "../../../shared/v1/types.js";
export interface AddSellerActionProductsV1Request {
  /**
   * Идентификатор акции. Получите значение параметра методом
   * [/v1/seller-actions/list](#operation/SellerActionsList).
   *
   * Формат: `uint64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly action_id: number;

  /**
   * Информация о товарах.
   *
   * Максимум элементов: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly products: readonly {
    /**
     * Валюта: - `RUB` — российский рубль, - `BYN` — белорусский рубль, - `KZT` — тенге, - `EUR` —
     * евро, - `USD` — доллар США, - `CNY` — юань.
     *
     * Пример: `RUB`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly currency?: OzonSellerActionCurrency;

    /**
     * Размер скидки в процентах. Передайте параметр, если механика акции «Скидка».
     *
     * Формат: `float`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly discount_percent?: number;

    /**
     * Идентификатор товара в системе Ozon — SKU.
     *
     * Формат: `uint64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly sku: number;
  }[];
}
export type AddSellerActionProductsV1Response = void;
