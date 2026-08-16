import type { OzonFbsWarehouseWorkingDay } from "../../create/v1/types.js";
import type { OzonWarehouseCoordinates } from "../../shared/v1/types.js";

export interface UpdateFbsWarehouseV1Request {
  /**
   * Координаты склада.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly address_coordinates: OzonWarehouseCoordinates;

  /**
   * Название склада.
   *
   * Минимальная длина: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly name?: string;

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
     * Номера телефонов для курьера при отгрузке с типом `PICK_UP`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly courier_phones?: readonly string[];

    /**
     * Признак включённой автосборки.
     *
     * Пример: `false`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly is_auto_assembly?: boolean;

    /**
     * Признак включённой печати транспортной накладной.
     *
     * Пример: `false`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly is_waybill_enabled?: boolean;
  };

  /**
   * Номер телефона склада.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly phone?: string;

  /**
   * Идентификатор склада.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly warehouse_id: number;

  /**
   * Рабочие дни склада: - `MONDAY` — понедельник; - `TUESDAY` — вторник; - `WEDNESDAY` — среда; -
   * `THURSDAY` — четверг; - `FRIDAY` — пятница; - `SATURDAY` — суббота; - `SUNDAY` — воскресенье.
   *
   * Минимум: `5`. Максимум: `7`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly working_days?: readonly OzonFbsWarehouseWorkingDay[];
}

export interface UpdateFbsWarehouseV1Response {
  readonly operation_id?: string;
}
