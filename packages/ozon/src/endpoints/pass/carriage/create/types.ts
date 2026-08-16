import type {
  OzonPassCreationResponse,
  OzonPassVehicleInput,
} from "../../shared/types.js";

export interface OzonCarriagePassInput extends OzonPassVehicleInput {
  /**
   * `true`, если будете вывозить возвраты. По умолчанию — `false`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly with_returns?: boolean;
}

export interface CreateCarriagePassesRequest {
  /**
   * Список пропусков.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly arrival_passes: readonly OzonCarriagePassInput[];

  /**
   * Идентификатор перевозки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly carriage_id: number;
}

export type CreateCarriagePassesResponse = OzonPassCreationResponse;
