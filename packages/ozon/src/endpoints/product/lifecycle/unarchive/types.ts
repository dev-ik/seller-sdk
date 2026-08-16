import type { OzonProductLifecycleBooleanResponse } from "../shared/types.js";

export interface UnarchiveProductsRequest {
  /** До 100 идентификаторов товаров Ozon. */
  readonly product_id: readonly number[];
}

export type UnarchiveProductsResponse = OzonProductLifecycleBooleanResponse;
