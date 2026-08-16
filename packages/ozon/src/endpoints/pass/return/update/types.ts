import type { OzonPassVehicleInput } from "../../shared/types.js";

export interface OzonReturnPassUpdate extends OzonPassVehicleInput {
  /**
   * Идентификатор пропуска.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly arrival_pass_id: number;

  /**
   * Время прибытия в формате UTC. В это время начнёт действовать пропуск. Чтобы изменить время
   * прибытия, используйте метод [/v1/carriage/pass/update](#operation/carriagePassUpdate).
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly arrival_time: string;
}

export interface UpdateReturnPassesRequest {
  /**
   * Список пропусков.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly arrival_passes: readonly OzonReturnPassUpdate[];
}
