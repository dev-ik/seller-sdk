export interface GetFbsReturnCompanyInfoV1Request {
  /**
   * Фильтры.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: {
    /**
     * Фильтр по идентификатору drop-off пункта.
     *
     * Формат: `int64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly place_id?: number;
  };

  /**
   * Разделение ответа метода.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly pagination: {
    /**
     * Идентификатор последнего drop-off пункта на странице. Для первого запроса оставьте это поле
     * пустым. Чтобы получить следующие значения, укажите `id` последнего drop-off пункта из ответа
     * предыдущего запроса.
     *
     * Формат: `int64`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly last_id?: number;

    /**
     * Количество drop-off пунктов на странице. Максимум — 500.
     *
     * Формат: `int32`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly limit: number;
  };
}
export interface OzonFbsReturnDropOffPointV1 {
  readonly address?: string;
  readonly box_count?: number;
  readonly id?: number;
  readonly name?: string;
  readonly pass_info?: {
    readonly count?: number;
    readonly is_required?: boolean;
  };
  readonly place_id?: number;
  readonly returns_count?: number;
  readonly utc_offset?: string;
  readonly warehouses_ids?: readonly string[];
}
export interface GetFbsReturnCompanyInfoV1Response {
  readonly drop_off_points?: readonly OzonFbsReturnDropOffPointV1[];
  readonly has_next?: boolean;
}
