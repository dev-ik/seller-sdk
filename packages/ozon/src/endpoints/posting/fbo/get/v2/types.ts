import type {
  OzonFboPostingV2,
  OzonFboPostingWith,
} from "../../shared/types.js";
export interface GetFboPostingV2Request {
  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;

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
export interface GetFboPostingV2Response {
  readonly result?: OzonFboPostingV2;
}
