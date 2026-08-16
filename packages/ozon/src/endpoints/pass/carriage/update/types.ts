import type { OzonPassVehicleInput } from "../../shared/types.js";

export interface OzonCarriagePassUpdate extends OzonPassVehicleInput {
  /**
   * Идентификатор пропуска.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly id: number;

  /**
   * `true`, если будете вывозить возвраты. По умолчанию — `false`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly with_returns?: boolean;
}

export interface UpdateCarriagePassesRequest {
  /**
   * Список пропусков.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly arrival_passes: readonly OzonCarriagePassUpdate[];

  /**
   * Идентификатор перевозки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly carriage_id: number;
}
