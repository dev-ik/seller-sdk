// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Минимальные ставки для карточек товаров».
 *
 * Метод возвращает минимальные ставки для карточек товаров в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances) — по типу оплаты и местам размещения.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 20 запросов | 3 сек | 5 запросов |
 * | Сервисный | 1 мин | 20 запросов | 3 сек | 5 запросов |
 * | Базовый с секретом | 1 мин | 20 запросов | 3 сек | 5 запросов |
 * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
 *
 * POST /api/advert/v1/bids/min
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PostV1BidsMinInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * ID кампании
     *
     * Формат: `int64`.
     */
    readonly advert_id: number;

    /**
     * Список артикулов WB
     */
    readonly nm_ids: readonly number[];

    /**
     * Тип оплаты:
     *  - `cpm` — за показы
     *  - `cpc` — за клик
     */
    readonly payment_type: "cpm" | "cpc";

    /**
     * Места размещения:
     *  - `search` — поиск
     *  - `recommendation` — рекомендации
     *  - `combined` — поиск и рекомендации
     */
    readonly placement_types: readonly (
      | "combined"
      | "search"
      | "recommendation"
    )[];
  };
};
/**
 * Успешный ответ метода «Минимальные ставки для карточек товаров».
 *
 * 200: Успешно.
 */
export type PostV1BidsMinResponse = {
  /**
   * Список карточек товаров со ставками
   */
  readonly bids: readonly {
    /**
     * Список ставок по местам размещения
     */
    readonly bids: readonly {
      /**
       * Валюта [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
       *
       * Формат: `ISO 4217`.
       */
      readonly currency: string;

      /** Описание отсутствует в OpenAPI WB. */
      readonly type: "combined" | "search" | "recommendation";

      /**
       * Минимальная ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
       */
      readonly value: number;
    }[];

    /**
     * Артикул WB
     *
     * Формат: `int64`.
     */
    readonly nm_id: number;
  }[];
};
