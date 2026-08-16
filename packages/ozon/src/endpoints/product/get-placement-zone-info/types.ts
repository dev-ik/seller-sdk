/** Параметры получения зон размещения товаров. */
export interface GetProductPlacementZoneInfoRequest {
  /** От 1 до 150 идентификаторов товара в системе Ozon — SKU. */
  readonly skus: readonly string[];
}

/** Зона размещения товара перед поставкой. */
export type OzonProductPlacementZone =
  | "UNSPECIFIED"
  | "CLOSED_ZONE"
  | "DANGEROUS_GOODS"
  | "PRODUCTS"
  | "SORT"
  | "NON_SORT"
  | "OVERSIZE"
  | "JEWELRY"
  | "UNRESOLVED";

/** Товар и определённая для него зона размещения. */
export interface OzonProductPlacement {
  /** Зона размещения товара. */
  readonly placement_zone?: OzonProductPlacementZone;
  /** Идентификатор товара в системе Ozon — SKU. */
  readonly sku?: number;
}

/** Результат получения зон размещения товаров. */
export interface GetProductPlacementZoneInfoResponse {
  /** Список товаров с зонами размещения. */
  readonly products_placement?: readonly OzonProductPlacement[];
}
