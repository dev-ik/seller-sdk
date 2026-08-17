// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить цены продавца и суммы к оплате».
 *
 * Метод возвращает:
 *  - цены продавца без учёта скидок
 *  - суммы к оплате покупателем с учетом всех скидок и кэшбека
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов получения и удаления идентификаторов маркировки Самовывоз:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 150 запросов | 400 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/click-collect/orders/final-price
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/in-store-pickup
 */
export type PostV3ClickCollectOrdersFinalPriceInput = {
  /**
   * Тело запроса.
   */
  readonly body?: {
    /**
     * Список ID сборочных заданий
     */
    readonly orders?: readonly number[];
  };
};
/**
 * Успешный ответ метода «Получить цены продавца и суммы к оплате».
 *
 * 200: Успешно.
 */
export type PostV3ClickCollectOrdersFinalPriceResponse = {
  /**
   * Уникальный ID запроса
   */
  readonly requestId: string;

  /**
   * Данные ответа
   */
  readonly results: readonly {
    /**
     * ID сборочного задания
     */
    readonly orderId: number;

    /**
     * Данные сборочного задания.
     *
     * Если `"data":{}`, данные формируются. Повторите запрос позднее. Максимальное время формирования данных около 3 минут.
     *
     * Если `data` отсутствует, данных по сборочному заданию не предусмотрено. Используйте данные из ответов методов:
     *  - [Получить список новых сборочных заданий](/docs/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/getV3ClickCollectOrdersNew)
     *  - [Получить информацию о завершенных сборочных заданиях](/docs/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/getV3ClickCollectOrders)
     */
    readonly data?: {
      /**
       * Цена продавца в валюте продажи без учёта скидок, умноженная на 100. Предоставляется в информационных целях
       */
      readonly originalPrice?: number;

      /**
       * Цена продавца в валюте страны продавца без учёта скидок, умноженная на 100. Предоставляется в информационных целях
       */
      readonly convertedOriginalPrice?: number;

      /**
       * Сумма к оплате покупателем в валюте продажи с учетом всех скидок и кэшбека, умноженная на 100. Код валюты продажи указан в поле `currencyCode`. Предоставляется в информационных целях
       */
      readonly originalFinalPrice?: number;

      /**
       * Сумма к оплате покупателем в валюте страны продавца с учетом всех скидок и кэшбека, умноженная на 100. Предоставляется в информационных целях
       */
      readonly convertedOriginalFinalPrice?: number;

      /**
       * Код валюты продажи
       *
       * Формат: `ISO 4217`.
       */
      readonly currencyCode?: number;

      /**
       * Код валюты страны продавца
       *
       * Формат: `ISO 4217`.
       */
      readonly convertedCurrencyCode?: number;
    };

    /**
     * Детали ошибки
     */
    readonly errors?: readonly {
      /**
       * Код ошибки:
       *  - `404` — `NotFound`
       *  - `400` — `StatusMismatch`
       *  - `422` — `PriceNotCalculated`
       *
       * Пример: `404`.
       */
      readonly code: number;

      /**
       * - `NotFound` — сборочное задание не найдено (`404`)
       * - `StatusMismatch` — операция невозможна для этого статуса сборочного задания (`400`)
       * - `PriceNotCalculated` — операция невозможна для сборочных заданий, созданных ранее 23.07.2026 (`422`)
       *
       * Пример: `"NotFound"`.
       */
      readonly detail: string;
    }[];

    /**
     * Есть ли ошибки
     */
    readonly isError?: boolean;
  }[];
};
