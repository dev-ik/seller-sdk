// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить информацию о продавце».
 *
 * Информацию о продавце можно получить с токеном любой категории (/openapi/api-information#tag/authorization/Kategorii-tokenov)
 *
 * Метод позволяет получать наименование продавца и ID его профиля.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 1 запрос | 1 мин | 10 запросов |
 * | Сервисный | 1 мин | 1 запрос | 1 мин | 10 запросов |
 * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 10 запросов |
 * | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
 *
 * GET /api/v1/seller-info
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/api-information
 */
export type GetV1SellerInfoInput = undefined;
/**
 * Успешный ответ метода «Получить информацию о продавце».
 *
 * 200: Успешно.
 */
export type GetV1SellerInfoResponse = {
  /**
   * Наименование продавца
   */
  readonly name?: string;

  /**
   * Уникальный ID продавца на Wildberries, [находящийся в публичном поле токена](./api-information#tag/authorization/Kak-ustroen-token)
   *
   * Формат: `UUID`.
   */
  readonly sid?: string;

  /**
   * ИНН
   */
  readonly tin?: string;

  /**
   * Торговое наименование продавца
   */
  readonly tradeMark?: string;
};
