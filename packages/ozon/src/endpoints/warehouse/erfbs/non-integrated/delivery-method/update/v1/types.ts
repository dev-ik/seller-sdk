import type {
  OzonErfbsConfiguredReturnMethod,
  OzonErfbsReturnSettings,
} from "../../../../shared/v1/types.js";
import type { OzonWarehouseOperationResponse } from "../../../../../operation/shared/types.js";

export interface UpdateErfbsNonIntegratedDeliveryMethodV1Request {
  /**
   * Скорость отгрузки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly courier_cutoff: 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45;

  /**
   * Время сборки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cut_in: 15 | 30 | 60 | 120 | 180 | 240 | 300 | 360 | 420 | 480;

  /**
   * Идентификатор метода доставки.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method_id: number;

  /**
   * Название метода доставки.
   *
   * Максимальная длина: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly name: string;

  /**
   * Настройки возвратов от покупателей.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly return_settings: OzonErfbsReturnSettings<OzonErfbsConfiguredReturnMethod>;

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;
}

export type UpdateErfbsNonIntegratedDeliveryMethodV1Response =
  OzonWarehouseOperationResponse;
