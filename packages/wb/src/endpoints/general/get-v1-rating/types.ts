// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить рейтинг продавца».
 *
 * Для доступа к методу используйте токен (/openapi/api-information#tag/authorization/Kak-sozdat-personalnyj-bazovyj-ili-testovyj-token) для категории Вопросы и отзывы
 *
 *  Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Сервисному токену
 *
 * Метод возвращает пользовательский рейтинг продавца и количество отзывов.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 1 запрос | 1 мин | 1 запрос |
 *
 * GET /api/common/v1/rating
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/api-information
 */
export type GetV1RatingInput = undefined;
/**
 * Успешный ответ метода «Получить рейтинг продавца».
 *
 * 200: Успешно.
 */
export type GetV1RatingResponse = {
  /**
   * Количество отзывов
   *
   * Пример: `12355`.
   */
  readonly feedbackCount?: number;

  /**
   * Рейтинг продавца
   *
   * Формат: `float`.
   *
   * Пример: `4.55`.
   */
  readonly valuation?: number;
};
