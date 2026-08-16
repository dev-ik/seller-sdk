import type {
  OzonPassCreationResponse,
  OzonPassVehicleInput,
} from "../../shared/types.js";

export interface OzonReturnPassInput extends OzonPassVehicleInput {
  /**
   * Время прибытия в формате UTC. В это время пропуск начнёт действовать.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly arrival_time: string;

  /**
   * Идентификатор склада, на который оформляется пропуск.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly dropoff_point_id: number;

  /**
   * Идентификатор склада продавца. Можно получить с помощью метода
   * [/v1/warehouse/list](#operation/WarehouseAPI_WarehouseList).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export interface CreateReturnPassesRequest {
  /**
   * Список пропусков.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly arrival_passes: readonly OzonReturnPassInput[];
}

export type CreateReturnPassesResponse = OzonPassCreationResponse;
