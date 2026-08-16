export interface ListPassesFilter {
  /**
   * Фильтр по идентификатору пропуска.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly arrival_pass_ids?: readonly string[];

  /**
   * Фильтр по цели въезда: - `FBS_DELIVERY` — отгрузка. - `FBS_RETURN` — вывоз возвратов. Если
   * параметр не указан, учитываются обе цели. Указанная причина должна быть в списке причин в
   * пропусках.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly arrival_reason?: string;

  /**
   * Фильтр по точке отгрузки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly dropoff_point_ids?: readonly string[];

  /**
   * `true`, чтобы получить только активные заявки на пропуск.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly only_active_passes?: boolean;

  /**
   * Фильтр по складу продавца. Можно получить с помощью метода
   * [/v1/warehouse/list](#operation/WarehouseAPI_WarehouseList).
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_ids?: readonly string[];
}

export interface ListPassesRequest {
  /**
   * Указатель для выборки следующих данных.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cursor?: string;

  /**
   * Фильтры.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: ListPassesFilter;
  /** От 1 до 1000. */
  readonly limit: number;
}

export interface OzonArrivalPass {
  readonly arrival_pass_id?: number;
  readonly arrival_reasons?: readonly string[];
  readonly arrival_time?: string;
  readonly driver_name?: string;
  readonly driver_phone?: string;
  readonly dropoff_point_id?: number;
  readonly is_active?: boolean;
  readonly vehicle_license_plate?: string;
  readonly vehicle_model?: string;
  readonly warehouse_id?: number;
}

export interface ListPassesResponse {
  readonly arrival_passes?: readonly OzonArrivalPass[];
  readonly cursor?: string;
}
