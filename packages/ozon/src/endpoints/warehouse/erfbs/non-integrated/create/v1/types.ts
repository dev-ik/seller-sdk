import type {
  OzonErfbsConfiguredReturnMethod,
  OzonErfbsConfiguredWorkingDay,
  OzonErfbsReturnSettings,
  OzonErfbsWarehouseBase,
} from "../../../shared/v1/types.js";
import type { OzonWarehouseOperationResponse } from "../../../../operation/shared/types.js";

export interface CreateErfbsNonIntegratedWarehouseV1Request
  extends OzonErfbsWarehouseBase<OzonErfbsConfiguredWorkingDay> {
  /**
   * Информация о методе доставки «Вы или сторонняя служба».
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly delivery_method: {
    /**
     * Скорость отгрузки в доставку.
     *
     * Формат: `int64`. Минимум: `5`. Максимум: `45`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly courier_cutoff: number;

    /**
     * Время сборки.
     *
     * Формат: `int64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly cut_in: 15 | 30 | 60 | 120 | 180 | 240 | 300 | 360 | 420 | 480;

    /**
     * Полигоны доставки, созданные через [/v1/polygon/create](#operation/PolygonAPI_CreatePolygon), с
     * указанием времени доставки в каждый.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly delivery_polygons: readonly {
      /**
       * Идентификатор полигона.
       *
       * Формат: `int64`.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly id: number;

      /**
       * Время в минутах, за которое доставят товар в этом полигоне.
       *
       * Формат: `int64`.
       *
       * <!-- seller-sdk:ozon-openapi -->
       */
      readonly time: 15 | 30 | 45 | 60 | 90 | 120 | 150;
    }[];

    /**
     * Название метода доставки.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly name: string;

    /**
     * Информация о получении возвратов от покупателей.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly return_settings: OzonErfbsReturnSettings<OzonErfbsConfiguredReturnMethod>;
  };
}

export type CreateErfbsNonIntegratedWarehouseV1Response =
  OzonWarehouseOperationResponse;
