// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Непросмотренные отзывы и вопросы».
 *
 * Метод проверяет наличие непросмотренных [вопросов](/openapi/user-communication#tag/questions/operation/getV1Questions) и [отзывов](/openapi/user-communication#tag/feedbacks/operation/getV1Feedbacks) от покупателей. Если у продавца есть непросмотренные вопросы или отзывы, возвращает `true`.
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
 * GET /api/v1/new-feedbacks-questions
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type GetV1NewFeedbacksQuestionsInput = undefined;
/**
 * Успешный ответ метода «Непросмотренные отзывы и вопросы».
 *
 * 200: Успешно.
 */
export type GetV1NewFeedbacksQuestionsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly data?: {
    /**
     * Есть ли непросмотренные вопросы:
     *  - `true` — да
     *  - `false` — нет
     *
     * Пример: `true`.
     */
    readonly hasNewQuestions?: boolean;

    /**
     * Есть ли непросмотренные отзывы:
     *  - `true` — да
     *  - `false` — нет
     *
     * Пример: `false`.
     */
    readonly hasNewFeedbacks?: boolean;
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
