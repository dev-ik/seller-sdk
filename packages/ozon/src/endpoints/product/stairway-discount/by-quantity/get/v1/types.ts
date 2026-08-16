export type OzonStairwayDiscountStatus = "IN_PROCESS" | "ERROR" | "SUCCESS";

export interface OzonStairwayDiscountInfoStep {
  readonly discount?: number;
  readonly quantity?: number;
  readonly step?: number;
}

export interface OzonProductStairwayDiscountInfo {
  readonly enabled?: boolean;
  readonly sku?: number;
  readonly stairway?: {
    readonly steps?: readonly OzonStairwayDiscountInfoStep[];
  };
  readonly status?: OzonStairwayDiscountStatus;
}

export interface GetProductStairwayDiscountByQuantityV1Request {
  /**
   * Список идентификаторов товара в системе Ozon — SKU.
   *
   * Максимум элементов: `5000`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly skus: readonly string[];
}

export interface GetProductStairwayDiscountByQuantityV1Response {
  readonly stairways?: readonly OzonProductStairwayDiscountInfo[];
}
