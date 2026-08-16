import type { OzonFbpDraftValidationError } from "../../../shared/v1/types.js";
export interface EditFbpDirectSellerDeliveryDraftV1Request {
  /**
   * ФИО водителя.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly driver_name: string;

  /**
   * Идентификатор актуальной версии черновика.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly row_version: number;

  /**
   * Идентификатор заявки на поставку.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;

  /**
   * Номер автомобиля.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly vehicle_number: string;

  /**
   * Тип автомобиля.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly vehicle_type: string;
}
export interface EditFbpDirectSellerDeliveryDraftV1Response {
  readonly error?: { readonly errors?: readonly OzonFbpDraftValidationError[] };
  readonly is_error?: boolean;
  readonly row_version?: number;
}
