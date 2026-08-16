export interface ListWarehousesV1Request {
  /**
   * Количество значений в ответе.
   *
   * Формат: `int64`. Максимум: `200`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ
   * начнётся с 11-го найденного элемента.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offset?: number;

  /**
   * Дополнительные поля, которые нужно добавить в ответ.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly with?: {
    /**
     * `true`, чтобы добавить в ответ информацию о возможности установить цену.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly able_to_set_price?: boolean;
  };
}

export type OzonFirstMileType = "DropOff" | "Pickup";

export interface OzonWarehouseFirstMile {
  readonly dropoff_point_id?: string;
  readonly dropoff_timeslot_id?: number;
  readonly first_mile_is_changing?: boolean;
  readonly first_mile_type?: OzonFirstMileType;
}

export interface OzonSellerWarehouseV1 {
  readonly has_entrusted_acceptance?: boolean;
  readonly is_rfbs?: boolean;
  readonly name?: string;
  readonly warehouse_id?: number;
  readonly can_print_act_in_advance?: boolean;
  readonly first_mile_type?: OzonWarehouseFirstMile;
  readonly has_postings_limit?: boolean;
  readonly is_karantin?: boolean;
  readonly is_kgt?: boolean;
  readonly is_economy?: boolean;
  readonly is_able_to_set_price?: boolean;
  readonly is_presorted?: boolean;
  readonly is_timetable_editable?: boolean;
  readonly min_postings_limit?: number;
  readonly postings_limit?: number;
  readonly min_working_days?: number;
  readonly status?: string;
  readonly working_days?: readonly string[];
}

export interface ListWarehousesV1Response {
  readonly result?: readonly OzonSellerWarehouseV1[];
}
