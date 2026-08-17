// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Статистика кампаний».
 *
 * Метод формирует статистику для кампаний независимо от типа.
 *
 * Максимальный период в запросе — 31 день.
 *
 * Для кампаний в статусах `7`, `9` и `11`.
 *
 * В песочнице статистика кампаний доступна за последние 30 дней. Генерируется только для компаний в статусе `9`, тип `8`, 9 раз в сутки
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 3 запроса | 20 сек | 1 запрос |
 * | Сервисный | 1 мин | 3 запроса | 20 сек | 1 запрос |
 * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 1 запрос |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /adv/v3/fullstats
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV3FullstatsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * ID кампаний, максимум 50 значений
     *
     * Пример: `"22161678,28449281,28155229"`.
     */
    readonly ids: string;

    /**
     * Дата начала интервала
     *
     * Формат: `date`.
     *
     * Пример: `"2025-09-07"`.
     */
    readonly beginDate: string;

    /**
     * Дата окончания интервала
     *
     * Формат: `date`.
     *
     * Пример: `"2025-09-08"`.
     */
    readonly endDate: string;
  };
};
/**
 * Успешный ответ метода «Статистика кампаний».
 *
 * 200: Успешно.
 */
export type GetV3FullstatsResponse = readonly {
  /**
   * ID кампании
   */
  readonly advertId: number;

  /**
   * Количество добавлений товаров в корзину
   */
  readonly atbs: number;

  /**
   * Статистика по средней позиции товара (для кампаний с единой ставкой)
   */
  readonly boosterStats?: readonly {
    /**
     * Средняя позиция товара
     */
    readonly avg_position: number;

    /**
     * Дата, за которую предоставлены данные
     *
     * Формат: `date`.
     */
    readonly date: string;

    /**
     * Артикул WB
     */
    readonly nm: number;
  }[];

  /**
   * Отмены, шт.
   */
  readonly canceled: number;

  /**
   * Количество кликов
   */
  readonly clicks: number;

  /**
   * Средняя стоимость клика в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
   *
   * Формат: `double`.
   */
  readonly cpc: number;

  /**
   * CR (conversion rate) — отношение количества заказов к общему количеству кликов
   *
   * Формат: `double`.
   */
  readonly cr: number;

  /**
   * CTR (click-through rate) — отношение числа кликов к количеству показов в процентах
   *
   * Формат: `double`.
   */
  readonly ctr: number;

  /**
   * Статистка по дням
   */
  readonly days: readonly {
    /**
     * Блок информации о платформе
     */
    readonly apps: readonly {
      /**
       * Тип платформы:
       *  - `1` — сайт
       *  - `32` — Android
       *  - `64` — IOS
       */
      readonly appType: 1 | 32 | 64;

      /**
       * Количество добавлений товаров в корзину
       */
      readonly atbs: number;

      /**
       * Отмены, шт.
       */
      readonly canceled: number;

      /**
       * Количество кликов
       */
      readonly clicks: number;

      /**
       * Средняя стоимость клика в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      readonly cpc: number;

      /**
       * CR (conversion rate) — отношение количества заказов к общему количеству кликов
       */
      readonly cr: number;

      /**
       * CTR (click-through rate) — отношение числа кликов к количеству показов в процентах
       */
      readonly ctr: number;

      /**
       * Блок статистики по артикулам WB
       */
      readonly nms: readonly {
        /**
         * Количество добавлений товаров в корзину
         */
        readonly atbs: number;

        /**
         * Отмены, шт.
         */
        readonly canceled: number;

        /**
         * Количество кликов
         */
        readonly clicks: number;

        /**
         * Средняя стоимость клика в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
         */
        readonly cpc: number;

        /**
         * CR (conversion rate) — отношение количества заказов к общему количеству кликов
         */
        readonly cr: number;

        /**
         * CTR (click-through rate) — отношение числа кликов к количеству показов в процентах
         */
        readonly ctr: number;

        /**
         * Название товара
         */
        readonly name: string;

        /**
         * Артикул WB
         */
        readonly nmId: number;

        /**
         * Количество заказов
         */
        readonly orders: number;

        /**
         * Количество заказанных товаров, шт.
         */
        readonly shks: number;

        /**
         * Затраты в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
         */
        readonly sum: number;

        /**
         * Заказов на сумму в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
         */
        readonly sum_price: number;

        /**
         * Количество просмотров
         */
        readonly views: number;
      }[];

      /**
       * Количество заказов
       */
      readonly orders: number;

      /**
       * Количество заказанных товаров, шт.
       */
      readonly shks: number;

      /**
       * Затраты в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      readonly sum: number;

      /**
       * Заказов на сумму в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      readonly sum_price: number;

      /**
       * Количество просмотров
       */
      readonly views: number;
    }[];

    /**
     * Количество добавлений товаров в корзину
     */
    readonly atbs: number;

    /**
     * Отмены, шт.
     */
    readonly canceled: number;

    /**
     * Дата, за которую представлены данные
     *
     * Формат: `date-time`.
     */
    readonly date: string;

    /**
     * Количество кликов
     */
    readonly clicks: number;

    /**
     * Средняя стоимость клика в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
     */
    readonly cpc: number;

    /**
     * CR (conversion rate) — отношение количества заказов к общему количеству посещений кампании
     */
    readonly cr: number;

    /**
     * CTR (click-through rate) — отношение числа кликов к количеству показов в процентах
     */
    readonly ctr: number;

    /**
     * Количество заказов
     */
    readonly orders: number;

    /**
     * Количество заказанных товаров, шт.
     */
    readonly shks: number;

    /**
     * Затраты в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
     */
    readonly sum: number;

    /**
     * Заказов на сумму в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
     */
    readonly sum_price: number;

    /**
     * Количество просмотров
     */
    readonly views: number;
  }[];

  /**
   * Количество заказов
   */
  readonly orders: number;

  /**
   * Количество заказанных товаров, шт.
   */
  readonly shks: number;

  /**
   * Затраты в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
   *
   * Формат: `double`.
   */
  readonly sum: number;

  /**
   * Сумма заказов в базовых единицах валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
   *
   * Формат: `double`.
   */
  readonly sum_price: number;

  /**
   * Количество просмотров
   */
  readonly views: number;

  /**
   * Валюта [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
   *
   * Формат: `ISO 4217`.
   */
  readonly currency: string;
}[];
