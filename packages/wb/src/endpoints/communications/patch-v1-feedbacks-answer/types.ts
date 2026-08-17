// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Отредактировать ответ на отзыв».
 *
 * Метод позволяет отредактировать уже отправленный [ответ на отзыв](/openapi/user-communication#tag/feedbacks/operation/postV1FeedbacksAnswer) покупателя.
 *
 * Отредактировать ответ можно только один раз в течение 60 дней c момента отправки.
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
 * PATCH /api/v1/feedbacks/answer
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type PatchV1FeedbacksAnswerInput = {
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
     * Пример: `"Спасибо за Ваш отзыв, он очень важен для нас!"`.
     */
    readonly text: string;
  };
};
/**
 * Успешный ответ метода «Отредактировать ответ на отзыв».
 *
 * 204: Успешно.
 */
export type PatchV1FeedbacksAnswerResponse = undefined;
