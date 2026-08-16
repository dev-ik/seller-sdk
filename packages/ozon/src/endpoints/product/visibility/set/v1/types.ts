import type {
  OzonProductPlacement,
  OzonProductShowcase,
  OzonSelectPermission,
} from "../../shared/types.js";

export interface OzonProductVisibilityInput {
  /**
   * Платформа для размещения товаров: - `OZON` — только на Ozon. - `SELECT` — только на Селект.
   * [Подробнее об Ozon Селект в Базе знаний продавца](https://seller-edu.ozon.ru/libra/ozon-select)
   * - `OZON_SELECT` — на Селект и Ozon. - `NONE` — товар скрыт везде. Только для продавцов, которые
   * работают через Ozon Доставку. [Подробнее об Ozon Доставке в Базе знаний
   * продавца](https://seller-edu.ozon.ru/libra/ozon-logistika/osobennosti-raboty#что-такое-ozon-доставка)
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly placement: Exclude<OzonProductPlacement, "UNSPECIFIED">;

  /**
   * Идентификатор товара в системе Ozon — SKU.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sku: number;
}

export interface SetProductVisibilityV1Request {
  /**
   * Информация о видимости товара.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly item_placement: readonly OzonProductVisibilityInput[];
}

export interface OzonProductVisibilitySetResult {
  readonly select_permission?: OzonSelectPermission;
  readonly seller_item_placement?: OzonProductPlacement;
  readonly seller_item_placement_list?: readonly OzonProductShowcase[];
  readonly showcases_visibility?: OzonProductPlacement;
  readonly showcases_visibility_list?: readonly OzonProductShowcase[];
  readonly sku?: number;
  readonly warnings?: readonly string[];
}

export interface OzonProductVisibilitySetError {
  readonly code?: string;
  readonly sku?: number;
}

export interface SetProductVisibilityV1Response {
  readonly items?: readonly OzonProductVisibilitySetResult[];
  readonly items_errors?: readonly OzonProductVisibilitySetError[];
}
