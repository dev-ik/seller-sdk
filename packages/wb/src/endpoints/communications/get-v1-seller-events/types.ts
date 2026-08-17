// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «События чатов».
 *
 * Метод возвращает список событий всех [чатов с покупателями](/openapi/user-communication#tag/buyersChat/operation/getV1SellerChats).
 *
 * Чтобы получить все события:
 *  1. Сделайте первый запрос без параметра `next`.
 *  2. Повторяйте запрос со значением параметра `next` из ответа на предыдущий запрос, пока `totalEvents` не станет равным `0`. Это будет означать, что вы получили все события.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 10 сек | 10 запросов | 1 сек | 10 запросов |
 * | Сервисный | 10 сек | 10 запросов | 1 сек | 10 запросов |
 * | Базовый с секретом | 10 сек | 10 запросов | 1 сек | 10 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /api/v1/seller/events
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/communications
 */
export type GetV1SellerEventsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Пагинатор. С какого момента получить следующий пакет данных.
     * Формат Unix timestamp **с миллисекундами**
     */
    readonly next?: number;
  };
};
/**
 * Успешный ответ метода «События чатов».
 *
 * 200: Успешно.
 */
export type GetV1SellerEventsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly result?: {
    /**
     * Пагинатор. Значение поля необходимо указать в запросе для получения следующего пакета данных
     *
     * Формат: `Unix timestamp`.
     */
    readonly next?: number;

    /**
     * Время новейшего события в ответе
     *
     * Формат: `date-time`.
     */
    readonly newestEventTime?: string;

    /**
     * Время старейшего события в ответе
     *
     * Формат: `date-time`.
     */
    readonly oldestEventTime?: string;

    /**
     * Количество событий
     */
    readonly totalEvents?: number;

    /** Описание отсутствует в OpenAPI WB. */
    readonly events?: readonly {
      /**
       * ID чата
       */
      readonly chatID?: string;

      /**
       * ID события
       */
      readonly eventID?: string;

      /** Описание отсутствует в OpenAPI WB. */
      readonly eventType?: "message";

      /**
       * Признак нового чата:
       * - `false` — чат не новый
       * - `true` — чат новый
       */
      readonly isNewChat?: boolean;

      /**
       * Данные сообщения
       */
      readonly message?: {
        /** Описание отсутствует в OpenAPI WB. */
        readonly attachments?: {
          /** Описание отсутствует в OpenAPI WB. */
          readonly goodCard?: {
            /**
             * Артикул WB
             */
            readonly nmID?: number;

            /**
             * Фактическая цена с учетом всех скидок. Взимается с покупателя
             */
            readonly price?: number;

            /**
             * Валюта
             */
            readonly priceCurrency?: string;

            /**
             * Уникальный ID заказа.
             *
             * Примечание: `rid` — это `srid` в ответах методов:
             *  - [Заявки покупателей на возврат](./user-communication#tag/buyersReturns/operation/getV1Claims)
             *  - [Лента заказов](./analytics#tag/orderFeed/operation/postV1OrderFeed)
             *  - [Заказы](./reports#tag/mainReports/operation/getV1SupplierOrders)
             *  - [Продажи](./reports#tag/mainReports/operation/getV1SupplierSales)
             *  - [Отчёт о возвратах и перемещении товаров](./reports#tag/returnsAndItemMovementReport)
             *  - [Детализации к отчётам реализации по ID отчётов](./financial-reports-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailedReportId)
             *  - [Детализации к отчётам реализации за период](./financial-reports-and-accounting#tag/financialReports/operation/postV1SalesReportsDetailed)
             *  - [Детализации к отчётам об издержках на приём платежей по ID отчётов](./financial-reports-and-accounting#tag/financialReports/operation/postV1AcquiringDetailedReportId)
             *  - [Детализации к отчётам об издержках на приём платежей за период](./financial-reports-and-accounting#tag/financialReports/operation/postV1AcquiringDetailed)
             */
            readonly rid?: string;

            /**
             * Размер товара, соответствует `wbSize` в [карточке товара](./work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1list/post)
             */
            readonly size?: string;
          };

          /**
           * Файлы
           */
          readonly files?: readonly {
            /**
             * Тип файла
             */
            readonly contentType?: string;

            /**
             * Дата загрузки файла
             */
            readonly date?: string;

            /**
             * ID файла. [Получить файл](./user-communication#tag/buyersChat/operation/getV1SellerDownloadId)
             */
            readonly downloadID?: string;

            /**
             * Название файла
             */
            readonly name?: string;

            /**
             * URL для получения файла
             */
            readonly url?: string;

            /**
             * Размер файла в байтах
             */
            readonly size?: number;
          }[];

          /**
           * Изображения
           */
          readonly images?: readonly {
            /**
             * Дата загрузки изображения
             */
            readonly date?: string;

            /**
             * ID файла. [Получить файл](./user-communication#tag/buyersChat/operation/getV1SellerDownloadId)
             */
            readonly downloadID?: string;

            /**
             * URL для получения изображения
             */
            readonly url?: string;
          }[];
        };

        /**
         * Текст сообщения
         */
        readonly text?: string;
      };

      /**
       * Источник отправки сообщения:
       * - `seller-portal` — портал продавцов
       * - `seller-public-api` — API Чата с покупателями
       * - `rusite` — портал покупателей
       * - `global` — портал `global.wildberries.ru`
       * - `ios` — мобильная операционная система от **Apple**
       * - `android` — операционная система **Android** от **Google**
       */
      readonly source?: string;

      /**
       * Время появления события на сервере. Формат Unix timestamp
       */
      readonly addTimestamp?: number;

      /**
       * Время появления события на сервере в UTC
       */
      readonly addTime?: string;

      /**
       * Подпись чата. Доступна только при `"isNewChat": true`. Требуется при [отправке сообщения](./user-communication#tag/buyersChat/operation/postV1SellerMessage)
       */
      readonly replySign?: string;

      /** Описание отсутствует в OpenAPI WB. */
      readonly sender?: "client" | "seller" | "wb";

      /**
       * Имя покупателя
       */
      readonly clientName?: string;
    }[];
  };

  /**
   * Ошибки, если есть
   */
  readonly errors?: readonly string[] | null;
};
