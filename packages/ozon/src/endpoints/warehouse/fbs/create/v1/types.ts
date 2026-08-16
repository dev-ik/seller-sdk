import type { OzonWarehouseCoordinates } from "../../shared/v1/types.js";

export type OzonFbsWarehouseFirstMileType = "PICK_UP" | "DROP_OFF";
export type OzonFbsWarehouseWorkingDay =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

export interface CreateFbsWarehouseV1Request {
  /**
   * Координаты адреса склада.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly address_coordinates: OzonWarehouseCoordinates;

  /**
   * Время на приём заказов в минутах. Например, если вы передадите `3000`, приём заказов будет
   * завершён через 50 часов с момента передачи.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly cut_in_time: number;

  /**
   * Идентификатор drop-off пункта.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly drop_off_point_id?: number;

  /**
   * Тип первой мили: - `PICK_UP` — отгрузка заказов курьеру; - `DROP_OFF` — отгрузка заказов в пункт
   * приёма.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly first_mile_type: OzonFbsWarehouseFirstMileType;

  /**
   * `true`, если товар крупногабаритный.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_kgt: boolean;

  /**
   * Название склада.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly name: string;

  /**
   * Параметры склада.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly options?: {
    /**
     * Комментарий для курьера при отгрузке с типом `PICK_UP`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly comment?: string;

    /**
     * Номера телефонов для курьера при отгрузке с типом `PICK_UP`. Укажите в формате +7(XXX)XXX-XX-XX.
     *
     * Максимум элементов: `3`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly courier_phones?: readonly string[];

    /**
     * `true`, если автосборка включена.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly is_auto_assembly?: boolean;

    /**
     * `true`, если печать транспортной накладной включена.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly is_waybill_enabled?: boolean;
  };

  /**
   * Номер телефона склада. Укажите в формате +7(XXX)XXX-XX-XX.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly phone: string;

  /**
   * Идентификатор пункта возврата. Получите значение параметра методом
   * [/v1/warehouse/fbs/create/return-point/list](#operation/WarehouseFBSCreateReturnPointList).
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly return_point_id?: number;

  /**
   * Идентификатор таймслота.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly timeslot_id: number;

  /**
   * Рабочие дни склада: - `MONDAY` — понедельник, - `TUESDAY` — вторник, - `WEDNESDAY` — среда, -
   * `THURSDAY` — четверг, - `FRIDAY` — пятница, - `SATURDAY` — суббота, - `SUNDAY` — воскресенье.
   *
   * Максимум элементов: `7`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly working_days?: readonly OzonFbsWarehouseWorkingDay[];
}

export interface CreateFbsWarehouseV1Response {
  readonly operation_id?: string;
}
