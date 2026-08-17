// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Детальная информация об акциях».
 *
 * Метод возвращает подробную информацию об [акции](/openapi/promotion#tag/promoCalendar/operation/getV1CalendarPromotionsDetails) по ID.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Календарь акций:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /api/v1/calendar/promotions/details
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV1CalendarPromotionsDetailsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * ID акций, по которым нужно вернуть информацию
     *
     * Пример: `[1,3,64]`.
     *
     * Минимальное количество элементов: 1.
     *
     * Максимальное количество элементов: 100.
     */
    readonly promotionIDs: readonly number[];
  };
};
/**
 * Успешный ответ метода «Детальная информация об акциях».
 *
 * 200: Успешно.
 */
export type GetV1CalendarPromotionsDetailsResponse = {
  /**
   * Данные ответа
   */
  readonly data?: {
    /**
     * Список акций
     */
    readonly promotions?: readonly {
      /**
       * ID акции
       *
       * Пример: `123`.
       */
      readonly id?: number;

      /**
       * Название акции
       *
       * Пример: `"ХИТЫ ГОДА"`.
       */
      readonly name?: string;

      /**
       * Описание акции
       *
       * Пример: `"В акции принимают участие самые популярные товары 2023 года. Карточки товаров будут выделены плашкой «ХИТ ГОДА», чтобы покупатели замечали эти товары среди других. Также они будут размещены под баннерами на главной странице и примут участие в PUSH-уведомлениях. С ценами для вступления в акцию вы можете ознакомиться ниже."`.
       */
      readonly description?: string;

      /**
       * Преимущества акции
       *
       * Пример: `["Плашка","Баннер","Топ выдачи товаров"]`.
       */
      readonly advantages?: readonly string[];

      /**
       * Начало акции
       *
       * Пример: `"2023-06-05T21:00:00Z"`.
       */
      readonly startDateTime?: string;

      /**
       * Конец акции
       *
       * Пример: `"2023-06-05T21:00:00Z"`.
       */
      readonly endDateTime?: string;

      /**
       * Количество товаров с остатками, участвующих в акции
       *
       * Пример: `45`.
       */
      readonly inPromoActionLeftovers?: number;

      /**
       * Общее количество товаров, участвующих в акции
       *
       * Пример: `123`.
       */
      readonly inPromoActionTotal?: number;

      /**
       * Количество товаров с остатками, не участвующих в акции
       *
       * Пример: `3`.
       */
      readonly notInPromoActionLeftovers?: number;

      /**
       * Общее количество товаров, не участвующих в акции
       *
       * Пример: `10`.
       */
      readonly notInPromoActionTotal?: number;

      /**
       * Уже участвующие в акции товары, %. Рассчитывается по товарам в акции и с остатком
       *
       * Пример: `10`.
       */
      readonly participationPercentage?: number;

      /**
       * Тип акции:
       *  - `regular` — акция
       *  - `auto` — автоакция
       *
       * Пример: `"auto"`.
       */
      readonly type?: "regular" | "auto";

      /**
       * Количество товаров, исключенных из автоакции до её старта. Только при `"type": "auto"`.
       *
       * В момент старта акции эти товары автоматически будут без скидки
       *
       * Формат: `uint`.
       *
       * Пример: `10`.
       */
      readonly exceptionProductsCount?: number;

      /**
       * Ранжирование (если подключено)
       *
       * Пример: `[{"condition":"productsInPromotion","participationRate":10,"boost":7},{"condition":"calculateProducts","participationRate":20,"boost":17},{"condition":"allProducts","participationRate":35,"boost":30}]`.
       */
      readonly ranging?: readonly {
        /**
         * Тип [ранжирования](https://seller.wildberries.ru/help-center/article/A-385):
         *  - `productsInPromotion` — продвижение получат товары продавца, участвующие в акции
         *  - `calculateProducts` — продвижение получат любые товара продавца, предложенные к участию в акции
         *  - `allProducts` — продвижение получат все товары продавца
         */
        readonly condition?: string;

        /**
         * Количество товаров продавца для перехода на следующий уровень ранжирования, %
         *
         * Формат: `uint`.
         *
         * Минимальное значение: 0.
         *
         * Максимальное значение: 100.
         */
        readonly participationRate?: number;

        /**
         * Текущий уровень поднятия в поиске, %
         *
         * Формат: `uint`.
         */
        readonly boost?: number;
      }[];
    }[];
  };
};
