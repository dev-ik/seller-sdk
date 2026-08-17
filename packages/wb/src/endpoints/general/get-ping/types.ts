// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Проверка подключения».
 *
 * Метод проверяет:
 *  1. Успешно ли запрос доходит до WB API
 *  2. Валидность токена авторизации и URL запроса
 *  3. Совпадают ли категория токена и сервис
 *
 *  Метод не предназначен для проверки доступности сервисов WB
 *
 * У каждого сервиса есть свой вариант метода в зависимости от домена:
 *
 * | Категория | URL запроса |
 * |---------------|-----------------------|
 * | Контент | `https://content-api.wildberries.ru/ping`
 * `https://content-api-sandbox.wildberries.ru/ping` |
 * | Аналитика | `https://seller-analytics-api.wildberries.ru/ping` |
 * | Цены и скидки | `https://discounts-prices-api.wildberries.ru/ping`
 * `https://discounts-prices-api-sandbox.wildberries.ru/ping` |
 * | Маркетплейс | `https://marketplace-api.wildberries.ru/ping` |
 * | Статистика | `https://statistics-api.wildberries.ru/ping`
 * `https://statistics-api-sandbox.wildberries.ru/ping` |
 * | Продвижение | `https://advert-api.wildberries.ru/ping`
 * `https://advert-api-sandbox.wildberries.ru/ping` |
 * | Вопросы и отзывы | `https://feedbacks-api.wildberries.ru/ping`
 * `https://feedbacks-api-sandbox.wildberries.ru/ping` |
 * | Чат с покупателями | `https://buyer-chat-api.wildberries.ru/ping` |
 * | Поставки | `https://supplies-api.wildberries.ru/ping` |
 * | Возвраты покупателями | `https://returns-api.wildberries.ru/ping` |
 * | Документы | `https://documents-api.wildberries.ru/ping` |
 * | Финансы | `https://finance-api.wildberries.ru/ping` |
 * | Тарифы, Новости, Получить информацию о продавце | `https://common-api.wildberries.ru/ping` |
 * | Управление пользователями продавца | `https://user-management-api.wildberries.ru/ping` |
 *
 *  Максимум 3 запроса за 30 секунд (/openapi/api-information#tag/introduction/Limity-zaprosov). Если попытаться автоматизировать использование метода, запросы будут временно заблокированы. Лимит действует отдельно для каждого варианта метода в зависимости от домена
 *
 * GET /ping
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/api-information
 */
export type GetPingInput = undefined;
/**
 * Успешный ответ метода «Проверка подключения».
 *
 * 200: Успешно.
 */
export type GetPingResponse = {
  /**
   * Timestamp запроса
   */
  readonly TS?: string;

  /**
   * Статус
   */
  readonly Status?: "OK";
};
