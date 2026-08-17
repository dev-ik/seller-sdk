// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Неотвеченные вопросы».
 *
 * Метод возвращает общее количество неотвеченных [вопросов](/openapi/user-communication#tag/questions/operation/getV1Questions) и количество неотвеченных вопросов за сегодня.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
 * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
 * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
 * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
 *
 * GET /api/v1/questions/count-unanswered
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type GetV1QuestionsCountUnansweredInput = undefined;
/**
 * Успешный ответ метода «Неотвеченные вопросы».
 *
 * 200: Успешно.
 */
export type GetV1QuestionsCountUnansweredResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * Количество неотвеченных вопросов
     *
     * Пример: `24`.
     */
    readonly countUnanswered?: number;

    /**
     * Количество неотвеченных вопросов за сегодня
     *
     * Пример: `0`.
     */
    readonly countUnansweredToday?: number;
  };

  /**
   * Есть ли ошибка
   *
   * Пример: `false`.
   */
  readonly error?: boolean;

  /**
   * Описание ошибки
   *
   * Пример: `""`.
   */
  readonly errorText?: string;

  /**
   * Дополнительные ошибки
   *
   * Пример: `null`.
   */
  readonly additionalErrors?: readonly string[] | null;
};
