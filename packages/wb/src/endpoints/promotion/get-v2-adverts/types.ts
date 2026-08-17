// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Информация о кампаниях».
 *
 * Метод возвращает информацию о рекламных кампаниях с единой или ручной ставкой по их статусам, типам оплаты и ID.
 *
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
 * | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
 * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /api/advert/v2/adverts
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV2AdvertsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * ID кампаний, максимум 50
     *
     * Пример: `"12345,23456,34567,45678,56789"`.
     */
    readonly ids?: string;

    /**
     * Статусы кампаний:
     * - `-1` — удалена, процесс удаления будет завершён в течение 10 минут
     * - `4` — готова к запуску
     * - `7` — завершена
     * - `8` — отменена
     * - `9` — активна
     * - `11` — на паузе
     *
     * Пример: `"-1,4,8"`.
     */
    readonly statuses?: string;

    /**
     * Тип оплаты:
     * - `cpm` — за показы
     * - `cpc` — за клик
     */
    readonly payment_type?: "cpm" | "cpc";
  };
};
/**
 * Успешный ответ метода «Информация о кампаниях».
 *
 * 200: Успешно.
 */
export type GetV2AdvertsResponse = {
  /**
   * Кампании
   */
  readonly adverts: readonly {
    /**
     * Тип ставки:
     *  - `unified` — единая ставка
     *  - `manual` — ручная ставка
     */
    readonly bid_type: string;

    /**
     * Валюта [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
     *
     * Формат: `ISO 4217`.
     */
    readonly currency?: string;

    /**
     * ID кампании
     *
     * Формат: `int64`.
     */
    readonly id: number;

    /**
     * Настройки товаров
     */
    readonly nm_settings:
      | readonly {
          /** Описание отсутствует в OpenAPI WB. */
          readonly bids_kopecks: {
            /**
             * Ставка в поиске
             *
             * Формат: `int64`.
             */
            readonly search: number;

            /**
             * Ставка в рекомендациях
             *
             * Формат: `int64`.
             */
            readonly recommendations: number;
          };

          /** Описание отсутствует в OpenAPI WB. */
          readonly subject: {
            /**
             * ID предмета
             *
             * Формат: `int64`.
             */
            readonly id: number;

            /**
             * Название предмета
             */
            readonly name: string;
          };

          /**
           * Артикул WB
           *
           * Формат: `int64`.
           */
          readonly nm_id: number;
        }[]
      | null;

    /** Описание отсутствует в OpenAPI WB. */
    readonly settings: {
      /**
       * Тип оплаты:
       * - `cpm` — за показы
       * - `cpc` — за клик
       */
      readonly payment_type: string;

      /**
       * Название кампании
       */
      readonly name: string;

      /**
       * Места размещения
       */
      readonly placements: {
        /**
         * Размещение в поиске:
         *  - `false` — отключено
         *  - `true` — включено
         */
        readonly search: boolean;

        /**
         * Размещение в рекомендациях:
         *  - `false` — отключено
         *  - `true` — включено
         */
        readonly recommendations: boolean;
      };
    };

    /**
     * Ограничения кампании
     */
    readonly restrictions: {
      /**
       * Можно ли изменять список товаров кампании:
       *  - `true` — да
       *  - `false` — нет
       */
      readonly can_change_nms?: boolean;
    };

    /**
     * Статус кампании:
     * - `-1` — удалена, процесс удаления будет завершён в течение 10 минут
     * - `4` — готова к запуску
     * - `7` — завершена
     * - `8` — отменена
     * - `9` — активна
     * - `11` — на паузе
     */
    readonly status: -1 | 4 | 7 | 8 | 9 | 11;

    /** Описание отсутствует в OpenAPI WB. */
    readonly timestamps: {
      /**
       * Время создания кампании
       *
       * Формат: `date-time`.
       */
      readonly created: string;

      /**
       * Время последнего изменения кампании
       *
       * Формат: `date-time`.
       */
      readonly updated: string;

      /**
       * Время последнего запуска кампании
       *
       * Формат: `date-time`.
       */
      readonly started: string | null;

      /**
       * Время удаления кампании. Если кампания не удалена, время указывается в будущем
       *
       * Формат: `date-time`.
       */
      readonly deleted: string;
    };
  }[];
};
