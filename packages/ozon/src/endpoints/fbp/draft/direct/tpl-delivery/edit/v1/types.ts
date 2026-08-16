import type { OzonFbpDraftValidationError } from "../../../shared/v1/types.js";

export interface EditFbpDirectTplDeliveryDraftV1Request {
  /**
   * Идентификатор актуальной версии черновика.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly row_version: number;

  /**
   * Идентификатор поставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;

  /**
   * Трек-номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly tracking_number: string;

  /**
   * Название транспортной компании.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly transport_company_name: string;
}

export interface EditFbpDirectTplDeliveryDraftV1Response {
  readonly error?: {
    readonly errors?: readonly OzonFbpDraftValidationError[];
  };
  readonly is_error?: boolean;
  readonly row_version?: number;
}
