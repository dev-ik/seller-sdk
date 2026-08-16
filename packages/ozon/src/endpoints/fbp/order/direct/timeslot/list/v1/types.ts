import type { GetFbpDirectTimeslotsV1Response } from "../../../../../draft/direct/timeslot/get/v1/types.js";

export interface ListFbpDirectOrderTimeslotsV1Request {
  /**
   * Дата окончания нужного периода доступных таймслотов.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly interval_end: string;

  /**
   * Дата начала нужного периода доступных таймслотов.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly interval_start: string;

  /**
   * Идентификатор заявки на поставку.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly supply_id: string;
}

export type ListFbpDirectOrderTimeslotsV1Response =
  GetFbpDirectTimeslotsV1Response;
