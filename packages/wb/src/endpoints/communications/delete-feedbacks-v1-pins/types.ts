// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Открепить отзывы».
 *
 * Метод позволяет открепить отзывы в карточке товара или в группе [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек.
 *
 * Чтобы получить `pinId` — ID операций закрепления, используйте метод [Список закреплённых и откреплённых отзывов](/openapi/user-communication#tag/pinnedFeedbacks/operation/getFeedbacksV1Pins).
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
 * DELETE /api/feedbacks/v1/pins
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type DeleteFeedbacksV1PinsInput = {
  /**
   * Список `pinId` — ID операций закрепления отзывов
   *
   * Пример: `[123456,234567,345678]`.
   *
   * Максимальное количество элементов: 500.
   */
  readonly body: readonly number[];
};
/**
 * Успешный ответ метода «Открепить отзывы».
 *
 * 200: Успешно.
 */
export type DeleteFeedbacksV1PinsResponse = {
  /**
   * Список `pinId` — ID операций закрепления отзывов, которые были успешно откреплены
   *
   * Пример: `[123456,234567,345678]`.
   */
  readonly data: readonly number[];
};
