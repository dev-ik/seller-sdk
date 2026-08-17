// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Необработанные отзывы».
 *
 * Метод возвращает:
 *  - количество необработанных [отзывов](/openapi/user-communication#tag/feedbacks/operation/getV1Feedbacks) за сегодня и за всё время
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
 * GET /api/v1/feedbacks/count-unanswered
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type GetV1FeedbacksCountUnansweredInput = undefined;
/**
 * Успешный ответ метода «Необработанные отзывы».
 *
 * 200: Успешно.
 */
export type GetV1FeedbacksCountUnansweredResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * Количество необработанных отзывов
     *
     * Пример: `1`.
     */
    readonly countUnanswered?: number;

    /**
     * Количество необработанных отзывов за сегодня
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
