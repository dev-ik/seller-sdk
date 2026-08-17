// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Закрепить коды маркировки Честного знака за сборочными заданиями».
 *
 * Метод обновляет код маркировки [Честного знака](https://честныйзнак.рф/) в [идентификаторах маркировки сборочных заданий](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails).
 *
 * Закрепить код маркировки можно только за сборочным заданием в [статусе](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails) есть поле `sgtin`.
 *
 * Получить загруженные маркировки можно в [идентификаторах маркировки сборочного задания](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки DBS:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 500 запросов | 120 мс | 20 запросов |
 * | Сервисный | 1 мин | 500 запросов | 120 мс | 20 запросов |
 * | Базовый с секретом | 1 мин | 500 запросов | 120 мс | 20 запросов |
 * | Базовый | 1 ч | 10 запросов | 6 мин | 1 запрос |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/dbs/orders/meta/sgtin
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/dbs
 */
export type PostV3DbsOrdersMetaSgtinInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Максимальное количество элементов: 1000.
     */
    readonly orders: readonly {
      /**
       * ID сборочного задания
       *
       * Пример: `123456`.
       */
      readonly orderId: number;

      /**
       * Массив кодов маркировки Честного знака. Допускается от 16 до 135 символов для кода одной маркировки
       *
       * Пример: `["123456789012345678","1234567890123456"]`.
       *
       * Минимальное количество элементов: 1.
       *
       * Максимальное количество элементов: 24.
       */
      readonly sgtins: readonly string[];
    }[];
  };
};
/**
 * Успешный ответ метода «Закрепить коды маркировки Честного знака за сборочными заданиями».
 *
 * 200: Успешно.
 */
export type PostV3DbsOrdersMetaSgtinResponse = {
  /**
   * Уникальный ID запроса
   *
   * Пример: `"f1787bd2d1fdс35d6f537316514у4a05"`.
   */
  readonly requestId?: string;

  /** Описание отсутствует в OpenAPI WB. */
  readonly results?: readonly {
    /**
     * Детали ошибки
     */
    readonly errors?: readonly {
      /**
       * Код ошибки:
       *  - `404`
       *  - `409`
       *  - `400`
       *
       * Пример: `404`.
       */
      readonly code?: number;

      /**
       * - `NotFound` — сборочное задание не найдено
       * - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
       * - `ImeiIsNotFilled` — не заполнен IMEI
       * - `OrderNotB2B` — операция доступна только для сборочных заданий с признаком B2B-продажи `"isB2b":true`
       * - `InvalidOriginCountryCode` — некорректный код страны происхождения товара
       *
       * Пример: `"NotFound"`.
       */
      readonly detail?: string;
    }[];

    /**
     * Есть ли ошибки
     *
     * Пример: `true`.
     */
    readonly isError?: boolean;

    /**
     * ID сборочного задания с успешно обновлёнными данными
     *
     * Пример: `123456`.
     */
    readonly orderId?: number;
  }[];
};
