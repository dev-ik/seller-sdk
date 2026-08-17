// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить информацию о подписке Джем».
 *
 * Информацию о подписке Джем можно получить с токеном любой категории (/openapi/api-information#tag/authorization/Kategorii-tokenov)
 *
 *  Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Сервисному токену
 *
 * Метод возвращает информацию о подписке [Джем](https://seller.wildberries.ru/monetization/jam):
 *  - Если продавец никогда не подключал подписку Джем, возвращается пустой ответ `200`.
 *  - Если продавец активировал и никогда не отменял подписку, возвращается:
 *  - дата активации подписки `since`
 *  - дата окончания текущего оплаченного периода `till`
 *  - Если подписка закончилась или была отменена, но продавец подключил её повторно, возвращается:
 *  - дата первой активации подписки `since`
 *  - дата окончания текущего оплаченного периода `till`
 *  - Если подписка неактивна, возвращается:
 *  - дата первой активации подписки `since`
 *  - дата окончания последнего оплаченного периода `till`
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 1 запрос | 1 мин | 10 запросов |
 *
 * GET /api/common/v1/subscriptions
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/api-information
 */
export type GetV1SubscriptionsInput = undefined;
/**
 * Успешный ответ метода «Получить информацию о подписке Джем».
 *
 * 200: Успешно.
 */
export type GetV1SubscriptionsResponse = {
  /**
   * Статус подписки:
   *  - `active` — активна
   *  - `inactive` — истекла или отменена
   *
   * Пример: `"active"`.
   */
  readonly state: "active" | "inactive";

  /**
   * Источник подключения подписки:
   *  - `constructor` — покупка через раздел **Конструктор тарифов**
   *  - `jam` — покупка через раздел **Подписка «Джем»**
   *
   * Пример: `"jam"`.
   */
  readonly activationSource: "constructor" | "jam";

  /**
   * Уровень подписки:
   *  - `standard`
   *  - `advanced`
   *  - `premium`
   *
   * Пример: `"premium"`.
   */
  readonly level: "standard" | "advanced" | "premium";

  /**
   * Дата и время первой активации подписки. Не меняется при продлении или повторной активации
   *
   * Формат: `date-time`.
   *
   * Пример: `"2026-03-16T08:38:08.056406Z"`.
   */
  readonly since: string;

  /**
   * Дата и время окончания подписки
   *
   * Формат: `date-time`.
   *
   * Пример: `"2026-04-25T14:44:28.393587Z"`.
   */
  readonly till: string;
};
