import type {
  OzonFboPostingV2,
  OzonFboPostingWith,
} from "../../shared/types.js";
export type OzonFboPostingSortDirectionV2 = "ASC" | "DESC";
export interface OzonFboPostingListFilterV2 {
  /**
   * Начало периода.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly since: string;

  /**
   * Конец периода.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly to: string;

  /**
   * Статус отправления. - `awaiting_packaging` — ожидает упаковки, - `awaiting_deliver` — ожидает
   * отгрузки, - `delivering` — доставляется, - `delivered` — доставлено, - `cancelled` — отменено.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly status?: string;
}
export interface ListFboPostingsV2Request {
  /**
   * Фильтр для поиска отправлений.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter: OzonFboPostingListFilterV2;

  /**
   * Количество значений в ответе: - максимум — 1000, - минимум — 1.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit: number;

  /**
   * Направление сортировки: - `ASC` — по возрастанию, - `DESC` — по убыванию.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly dir?: OzonFboPostingSortDirectionV2;

  /**
   * Количество элементов, которое будет пропущено в ответе. Например, если `offset = 10`, то ответ
   * начнётся с 11-го найденного элемента. Максимальное значение — 20000.
   *
   * Формат: `int64`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly offset?: number;

  /**
   * Если включена транслитерация адреса из кириллицы в латиницу — `true`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly translit?: boolean;

  /**
   * Дополнительные поля, которые нужно добавить в ответ.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly with?: OzonFboPostingWith;
}
export interface ListFboPostingsV2Response {
  readonly result?: readonly OzonFboPostingV2[];
}
