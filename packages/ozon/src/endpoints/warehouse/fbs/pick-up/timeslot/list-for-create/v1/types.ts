import type {
  OzonWarehouseCoordinates,
  OzonWarehouseTimeslotsResponse,
} from "../../../../shared/v1/types.js";

export interface ListPickUpTimeslotsForWarehouseCreateV1Request {
  /**
   * Координаты склада.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly address_coordinates: OzonWarehouseCoordinates;

  /**
   * Признак крупногабаритного товара.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_kgt: boolean;
}

export interface ListPickUpTimeslotsForWarehouseCreateV1Response
  extends OzonWarehouseTimeslotsResponse {
  readonly is_pickup_supported?: boolean;
}
