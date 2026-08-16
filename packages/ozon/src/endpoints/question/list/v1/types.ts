import type { OzonQuestion, OzonQuestionStatus } from "../../shared/types.js";

export interface ListQuestionsV1Filter {
  /**
   * Начало периода.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_from?: string;

  /**
   * Конец периода.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date_to?: string;

  /**
   * Статусы вопроса: - `NEW` — новый, - `ALL` — все вопросы, - `VIEWED` — просмотренный, -
   * `PROCESSED` — обработанный, - `UNPROCESSED` — необработанный.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly status?: OzonQuestionStatus;
}

export interface ListQuestionsV1Request {
  /**
   * Фильтр.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter?: ListQuestionsV1Filter;

  /**
   * Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого
   * запроса. Чтобы получить следующие значения, укажите `last_id` из ответа предыдущего запроса.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly last_id?: string;

  /**
   * Количество значений в ответе.
   *
   * Формат: `int64`. Максимум: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly limit?: number;

  /**
   * Направление сортировки: - `DESC` — по убыванию; - `ASC` — по возрастанию.
   *
   * Пример: `DESC`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sort_dir?: "DESC" | "ASC";
}

export interface ListQuestionsV1Response {
  readonly has_next?: boolean;
  readonly last_id?: string;
  readonly questions?: readonly OzonQuestion[];
}
