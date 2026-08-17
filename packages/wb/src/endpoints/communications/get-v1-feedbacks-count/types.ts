// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Количество отзывов».
 *
 * Метод возвращает количество обработанных или необработанных [отзывов](/openapi/user-communication#tag/feedbacks/operation/getV1Feedbacks) за заданный период.
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
 * GET /api/v1/feedbacks/count
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type GetV1FeedbacksCountInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Дата начала периода в формате Unix timestamp
     *
     * Пример: `1688465092`.
     */
    readonly dateFrom?: number;

    /**
     * Дата конца периода в формате Unix timestamp
     *
     * Пример: `1688465092`.
     */
    readonly dateTo?: number;

    /**
     * Обработан ли отзыв:
     *  - `true` — да
     *  - `false` — нет
     *
     * Пример: `false`.
     *
     * Значение по умолчанию: `true`.
     */
    readonly isAnswered?: boolean;
  };
};
/**
 * Успешный ответ метода «Количество отзывов».
 *
 * 200: Успешно.
 */
export type GetV1FeedbacksCountResponse = {
  /**
   * Количество отзывов
   *
   * Пример: `724583`.
   */
  readonly data?: number;

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
