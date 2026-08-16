import type { OzonDeliveryCoordinates } from "../../shared/v1/types.js";

export interface GetDeliveryMapV1Request {
  /**
   * Область карты для получения кластеров и точек самовывоза.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly viewport?: {
    /**
     * Координаты левого нижнего угла области видимости карты.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly left_bottom?: OzonDeliveryCoordinates;

    /**
     * Координаты правого верхнего угла области видимости карты.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly right_top?: OzonDeliveryCoordinates;
  };

  /**
   * Масштаб карты.
   *
   * Формат: `int32`. Минимум: `0`. Максимум: `19`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly zoom?: number;
}

export interface OzonDeliveryMapCluster {
  readonly coordinate?: OzonDeliveryCoordinates;
  readonly is_same_building?: boolean;
  readonly map_point_ids?: readonly string[];
  readonly points_count?: number;
  readonly viewport?: {
    readonly left_bottom?: OzonDeliveryCoordinates;
    readonly right_top?: OzonDeliveryCoordinates;
  };
}

export interface GetDeliveryMapV1Response {
  readonly clusters?: readonly OzonDeliveryMapCluster[];
}
