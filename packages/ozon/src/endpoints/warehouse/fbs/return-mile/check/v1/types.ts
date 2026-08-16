import type { OzonFbsWarehouseFirstMileType } from "../../../create/v1/types.js";

export interface CheckFbsWarehouseReturnMileV1Request {
  /**
   * Код страны в формате ISO 2.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly country_code: string;

  /**
   * Тип первой мили: - `PICK_UP` — отгрузка заказов курьеру; - `DROP_OFF` — отгрузка заказов в пункт
   * приёма.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly first_mile_type: OzonFbsWarehouseFirstMileType;

  /**
   * Признак крупногабаритного товара.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_kgt: boolean;

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id?: number;
}

export interface CheckFbsWarehouseReturnMileV1Response {
  readonly should_set_return_mile?: boolean;
  readonly unavailability_reasons?: readonly string[];
}
