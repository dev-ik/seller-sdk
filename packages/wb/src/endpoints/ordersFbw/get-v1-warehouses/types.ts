// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список складов».
 *
 * Метод возвращает список складов WB.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 6 запросов | 10 сек | 6 запросов |
 * | Сервисный | 1 мин | 6 запросов | 10 сек | 6 запросов |
 * | Базовый с секретом | 1 мин | 6 запросов | 10 сек | 6 запросов |
 * | Базовый | 12 ч | 1 запрос | 12 ч | 1 запрос |
 *
 * GET /api/v1/warehouses
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbw
 */
export type GetV1WarehousesInput = undefined;
/**
 * Успешный ответ метода «Список складов».
 *
 * 200: Успешно.
 */
export type GetV1WarehousesResponse = readonly {
  /**
   * ID склада
   */
  readonly ID?: number;

  /**
   * Название склада
   */
  readonly name?: string;

  /**
   * Адрес склада
   */
  readonly address?: string;

  /**
   * Режим работы склада
   */
  readonly workTime?: string;

  /**
   * Доступен ли в качестве склада назначения:
   * - `true` — да
   * - `false` — нет
   */
  readonly isActive?: boolean;

  /**
   * Доступен ли в качестве транзитного склада:
   * - `true` — да
   * - `false` — нет
   */
  readonly isTransitActive?: boolean;
}[];
