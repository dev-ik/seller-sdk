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
     * Валюта: - `RUB` — российский рубль; - `BYN` — белорусский рубль; - `KZT` — тенге; - `EUR` —
     * евро; - `USD` — доллар США; - `CNY` — юань.
     *
     * Пример: `RUB`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly currency?: OzonSellerActionCurrency;

    /**
     * Цена товара по акции. Если передаёте нецелое число, цена округлится в большую сторону.
     *
     * Формат: `double`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly action_price?: number;
    /**
     * Размер скидки в процентах. Передайте параметр, если выбрали механику акции «Скидка» или «Скидка
     * по промокоду» и получили `actions.action_parameters.discount_type = PERCENT` в методе
     * [/v1/seller-actions/list](#operation/SellerActionsList).
     *
     * Формат: `double`.
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
