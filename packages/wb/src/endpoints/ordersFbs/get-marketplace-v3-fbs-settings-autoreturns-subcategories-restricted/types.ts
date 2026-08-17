// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить предметы, которые не хранятся на складах WB».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену
 *
 * Метод возвращает список ID предметов, товары которых не могут храниться на складах WB и будут возвращены в ПВЗ автоматически.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * GET /api/marketplace/v3/fbs/settings/autoreturns/subcategories/restricted
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedInput =
  {
    /**
     * Параметры строки запроса.
     */
    readonly query: {
      /**
       * Параметр пагинации. Устанавливает значение, с которого надо получить следующий пакет данных. Для получения полного списка данных должен быть равен `0` в первом запросе. Для следующих запросов необходимо брать значения из одноимённого поля в ответе.
       *
       * Формат: `int64`.
       *
       * Пример: `0`.
       */
      readonly next: number;

      /**
       * Количество предметов в ответе
       *
       * Формат: `int32`.
       *
       * Минимальное значение: 100.
       *
       * Максимальное значение: 1000.
       *
       * Пример: `1000`.
       */
      readonly limit: number;
    };
  };
/**
 * Успешный ответ метода «Получить предметы, которые не хранятся на складах WB».
 *
 * 200: Успешно.
 */
export type GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse =
  {
    /**
     * Параметр пагинации. Содержит значение, которое необходимо указать в запросе для получения следующего пакета данных
     *
     * Формат: `int64`.
     */
    readonly next: number | null;

    /**
     * Список ID предметов, товары которых не хранятся на складах WB
     */
    readonly data: readonly {
      /**
       * ID предмета
       */
      readonly subjectId: number;
    }[];
  };
