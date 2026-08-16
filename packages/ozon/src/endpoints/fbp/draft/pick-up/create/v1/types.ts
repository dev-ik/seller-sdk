import type { OzonFbpDraftCreatedResponse } from "../../../shared/v1/types.js";
import type { OzonFbpPickupDetails } from "../../shared/v1/types.js";

export interface CreateFbpPickupDraftV1Request {
  /**
   * Идентификатор состава поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly bundle_id: string;

  /**
   * Детали доставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_details: OzonFbpPickupDetails;

  /**
   * Количество грузомест.
   *
   * Формат: `int32`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly package_units_count: number;

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export type CreateFbpPickupDraftV1Response = OzonFbpDraftCreatedResponse;
