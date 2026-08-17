// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Ответить на отзыв».
 *
 * Метод позволяет ответить на [отзыв](/openapi/user-communication#tag/feedbacks/operation/getV1Feedbacks) покупателя.
 *
 *  ID отзыва не валидируется. Если в запросе вы передали некорректный ID, вы не получите ошибку.
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
 * POST /api/v1/feedbacks/answer
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type PostV1FeedbacksAnswerInput = {
  /**
   * Тело запроса.
   */
  readonly body?: {
    /**
     * ID отзыва
     *
     * Пример: `"J2FMRjUj6hwvwCElqssz"`.
     */
    readonly id: string;

    /**
     * Текст ответа
     *
     * Пример: `"Спасибо за Ваш отзыв!"`.
     */
    readonly text: string;
  };
};
/**
 * Успешный ответ метода «Ответить на отзыв».
 *
 * 204: Успешно.
 */
export type PostV1FeedbacksAnswerResponse = undefined;
