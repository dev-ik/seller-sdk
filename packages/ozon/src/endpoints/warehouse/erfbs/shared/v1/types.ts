import type { OzonWarehouseCoordinates } from "../../../fbs/shared/v1/types.js";

export type OzonErfbsReturnMethod =
  | "UNSPECIFIED"
  | "COURIER"
  | "TRANSPORT_COMPANY";
export type OzonErfbsConfiguredReturnMethod = Exclude<
  OzonErfbsReturnMethod,
  "UNSPECIFIED"
>;
export type OzonErfbsWorkingDay =
  | "UNSPECIFIED"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";
export type OzonErfbsConfiguredWorkingDay = Exclude<
  OzonErfbsWorkingDay,
  "UNSPECIFIED"
>;

export interface OzonErfbsSchedule {
  /**
   * Выходные дни склада.
   *
   * Максимум элементов: `50`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly holidays?: readonly {
    /**
     * День в формате `YYYY-MM-DD`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly day?: string;

    /**
     * Время начала выходного дня в формате `HH:MM`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly from?: string;

    /**
     * Время окончания выходного дня в формате `HH:MM`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly to?: string;
  }[];

  /**
   * Рабочие дни склада.
   *
   * Минимум элементов: `5`. Максимум элементов: `7`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly working_days?: readonly {
    /**
     * Рабочий день: - `UNSPECIFIED` — не определён, - `MONDAY` — понедельник, - `TUESDAY` — вторник, -
     * `WEDNESDAY` — среда, - `THURSDAY` — четверг, - `FRIDAY` — пятница, - `SATURDAY` — суббота, -
     * `SUNDAY` — воскресенье.
     *
     * Пример: `UNSPECIFIED`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly day?: OzonErfbsWorkingDay;

    /**
     * Время начала рабочего дня в формате `HH:MM`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly from?: string;

    /**
     * Время окончания рабочего дня в формате `HH:MM`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly to?: string;
  }[];
}

/** Обязательное расписание при создании склада eRFBS. */
export type OzonErfbsCreateSchedule<
  WorkingDay extends OzonErfbsWorkingDay = OzonErfbsWorkingDay,
> = Omit<OzonErfbsSchedule, "working_days"> & {
  /**
   * Рабочие дни склада.
   *
   * Минимум элементов: `5`. Максимум элементов: `7`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly working_days: readonly {
    /**
     * Рабочий день: - `UNSPECIFIED` — не определён, - `MONDAY` — понедельник, - `TUESDAY` — вторник, -
     * `WEDNESDAY` — среда, - `THURSDAY` — четверг, - `FRIDAY` — пятница, - `SATURDAY` — суббота, -
     * `SUNDAY` — воскресенье.
     *
     * Пример: `UNSPECIFIED`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly day: WorkingDay;
    /**
     * Время начала рабочего дня в формате `HH:MM`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly from: string;
    /**
     * Время окончания рабочего дня в формате `HH:MM`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly to: string;
  }[];
};

export interface OzonErfbsReturnSettings<
  ReturnMethod extends OzonErfbsReturnMethod = OzonErfbsReturnMethod,
> {
  /**
   * Количество дней, за которое вы свяжетесь с покупателем. Параметр обязательный, если
   * `return_method = COURIER`.
   *
   * Формат: `int64`. Максимум: `5`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly contact_days?: number;

  /**
   * Индекс отделения Почты России для [«лёгкого
   * возврата»](https://seller-edu.ozon.ru/rfbs/vozvraty/vozvraty#%C2%AB%D0%BB%D1%91%D0%B3%D0%BA%D0%B8%D0%B8-%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%82%C2%BB-%D0%BF%D0%BE%D1%87%D1%82%D0%BE%D0%B8-%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B8).
   *
   * Минимальная длина: `6`. Максимальная длина: `6`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly post_office_zipcode?: string;

  /**
   * Способы возврата: - `UNSPECIFIED` — не определён, - `COURIER` — курьером, - `TRANSPORT_COMPANY`
   * — транспортной компанией.
   *
   * Пример: `UNSPECIFIED`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly return_method: ReturnMethod;

  /**
   * Название транспортной компании. Параметр обязательный, если `return_method = TRANSPORT_COMPANY`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly transport_company_name?: string;
}

export interface OzonErfbsDeliveryCosts {
  /**
   * Минимальный вес в килограммах.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly min_weight?: number;

  /**
   * Максимальный вес в килограммах.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly max_weight?: number;

  /**
   * Минимальная стоимость заказа в копейках.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly min_order_price?: number;

  /**
   * Максимальная стоимость заказа в копейках.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly max_order_price?: number;

  /**
   * Цена в копейках.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly seller_payment?: number;
}

export interface OzonErfbsWarehouseBase<
  WorkingDay extends OzonErfbsWorkingDay = OzonErfbsWorkingDay,
> {
  /**
   * Координаты адреса склада.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly address_coordinates: OzonWarehouseCoordinates;

  /**
   * `true`, если на складе доступна автосборка.
   *
   * Пример: `false`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly is_auto_assembly?: boolean;

  /**
   * Минимальная стоимость заказа в рублях.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly min_order_value?: number;

  /**
   * Название склада.
   *
   * Максимальная длина: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly name: string;

  /**
   * Номер телефона склада.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly phone: string;

  /**
   * Расписание работы склада.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly timetable_warehouse: OzonErfbsCreateSchedule<WorkingDay>;
}
