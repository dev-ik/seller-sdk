// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Статистика по поисковым кластерам с детализацией по дням».
 *
 * Метод формирует статистику по поисковым кластерам за указанный период с детализацией по дням.
 * Можно использовать для кампаний с моделями оплаты `cpm` — за показы и `cpc` — за клики.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 10 запросов | 6 сек | 20 запросов |
 * | Сервисный | 1 мин | 10 запросов | 6 сек | 20 запросов |
 * | Базовый с секретом | 1 мин | 10 запросов | 6 сек | 20 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * POST /adv/v1/normquery/stats
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PostV1NormqueryStatsInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Дата начала периода
     *
     * Формат: `date`.
     *
     * Пример: `"2025-01-01"`.
     */
    readonly from: string;

    /**
     * Дата окончания периода периода
     *
     * Формат: `date`.
     *
     * Пример: `"2025-01-31"`.
     */
    readonly to: string;

    /**
     * Максимальное количество элементов: 100.
     */
    readonly items: readonly {
      /**
       * ID кампании
       *
       * Формат: `int64`.
       */
      readonly advertId: number;

      /**
       * Артикул WB
       *
       * Формат: `int64`.
       */
      readonly nmId: number;
    }[];
  };
};
/**
 * Успешный ответ метода «Статистика по поисковым кластерам с детализацией по дням».
 *
 * 200: Успешно.
 */
export type PostV1NormqueryStatsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly items: readonly {
    /**
     * ID кампании
     *
     * Формат: `int64`.
     */
    readonly advertId: number;

    /**
     * Артикул WB
     *
     * Формат: `int64`.
     */
    readonly nmId: number;

    /**
     * Статистика с детализацией по дням
     */
    readonly dailyStats?: readonly {
      /**
       * Дата
       *
       * Формат: `date`.
       */
      readonly date: string;

      /** Описание отсутствует в OpenAPI WB. */
      readonly stat?: {
        /**
         * Поисковый кластер
         */
        readonly normQuery?: string;

        /**
         * Количество просмотров.
         *
         * Для кампаний с типом оплаты `cpc` — за клики — значение будет `null`
         */
        readonly views?: number | null;

        /**
         * Количество кликов
         */
        readonly clicks?: number;

        /**
         * Количество добавлений товаров в корзину
         */
        readonly atbs?: number;

        /**
         * Количество заказов
         */
        readonly orders?: number;

        /**
         * CTR (click-through rate) — отношение числа кликов к количеству показов в процентах.
         *
         * Для кампаний с типом оплаты `cpc` — за клики — значение будет `null`
         *
         * Формат: `float`.
         */
        readonly ctr?: number | null;

        /**
         * Средняя стоимость клика в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
         *
         * Формат: `float`.
         */
        readonly cpc?: number;

        /**
         * Средняя стоимость за тысячу показов в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances).
         *
         * Для кампаний с типом оплаты `cpc` — за клики — значение будет `null`
         *
         * Формат: `float`.
         */
        readonly cpm?: number | null;

        /**
         * Средняя позиция товара на страницах поисковой выдачи
         *
         * Формат: `float`.
         */
        readonly avgPos?: number;

        /**
         * Количество заказанных товаров, шт.
         */
        readonly shks?: number;

        /**
         * Затраты на продвижение товаров в конкретном поисковом кластере кампании
         *
         * Формат: `double`.
         */
        readonly spend?: number;
      };
    }[];
  }[];
};
