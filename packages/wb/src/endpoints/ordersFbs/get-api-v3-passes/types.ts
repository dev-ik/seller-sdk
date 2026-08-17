// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить список пропусков».
 *
 * Метод возвращает список всех [созданных](/openapi/orders-fbs#tag/Propuska-FBS/paths/~1api~1v3~1passes/post) пропусков продавца.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * GET /api/v3/passes
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type GetApiV3PassesInput = undefined;
/**
 * Успешный ответ метода «Получить список пропусков».
 *
 * 200: Успешно.
 */
export type GetApiV3PassesResponse = readonly {
  /**
   * Имя водителя
   *
   * Пример: `"Александр"`.
   */
  readonly firstName?: string;

  /**
   * Дата окончания действия пропуска
   *
   * Пример: `"2022-07-31 17:53:13+00:00"`.
   */
  readonly dateEnd?: string;

  /**
   * Фамилия водителя
   *
   * Пример: `"Петров"`.
   */
  readonly lastName?: string;

  /**
   * Марка машины
   *
   * Пример: `"Lamborghini"`.
   */
  readonly carModel?: string;

  /**
   * Номер машины
   *
   * Пример: `"A456BC123"`.
   */
  readonly carNumber?: string;

  /**
   * Название склада
   *
   * Пример: `"Коледино"`.
   */
  readonly officeName?: string;

  /**
   * Адрес склада
   *
   * Пример: `"г. Подольск, д. Коледино, ул. Троицкая"`.
   */
  readonly officeAddress?: string;

  /**
   * ID склада
   *
   * Формат: `int64`.
   *
   * Пример: `15`.
   */
  readonly officeId?: number;

  /**
   * ID пропуска
   *
   * Формат: `int64`.
   *
   * Пример: `1`.
   */
  readonly id?: number;
}[];
