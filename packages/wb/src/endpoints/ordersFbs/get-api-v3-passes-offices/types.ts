// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить список складов, для которых требуется пропуск».
 *
 * Метод возвращает список складов для привязки к [пропуску продавца](/openapi/orders-fbs#tag/Propuska-FBS/paths/~1api~1v3~1passes/get).
 *
 *  Данные, которые возвращает метод, могут меняться. Рекомендуем периодически синхронизировать список
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * GET /api/v3/passes/offices
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type GetApiV3PassesOfficesInput = undefined;
/**
 * Успешный ответ метода «Получить список складов, для которых требуется пропуск».
 *
 * 200: Успешно.
 */
export type GetApiV3PassesOfficesResponse = readonly {
  /**
   * Название
   *
   * Пример: `"Коледино"`.
   */
  readonly name?: string;

  /**
   * Адрес
   *
   * Пример: `"г. Подольск, д. Коледино, ул. Троицкая"`.
   */
  readonly address?: string;

  /**
   * ID
   *
   * Формат: `int64`.
   *
   * Пример: `1`.
   */
  readonly id?: number;
}[];
