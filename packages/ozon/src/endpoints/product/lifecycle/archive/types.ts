import type { OzonProductLifecycleBooleanResponse } from "../shared/types.js";

export interface ArchiveProductsRequest {
  /** До 100 идентификаторов товаров Ozon. */
  readonly product_id: readonly number[];
}

export type ArchiveProductsResponse = OzonProductLifecycleBooleanResponse;
