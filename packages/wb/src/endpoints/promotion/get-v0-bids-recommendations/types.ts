// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Рекомендуемые ставки для карточек товаров и поисковых кластеров».
 *
 * Метод возвращает рекомендуемые ставки для карточек товаров и поисковых кластеров кампании.
 * Можно использовать для кампаний с типами оплаты `cpm` — за показы и `cpc` — за клики.
 *
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 5 запросов | 12 сек | 5 запросов |
 * | Сервисный | 1 мин | 5 запросов | 12 сек | 5 запросов |
 * | Базовый с секретом | 1 мин | 5 запросов | 12 сек | 5 запросов |
 * | Базовый | 1 ч | 20 запросов | 3 мин | 1 запрос |
 *
 * GET /api/advert/v0/bids/recommendations
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV0BidsRecommendationsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Артикул WB
     *
     * Формат: `int64`.
     *
     * Пример: `123456789`.
     */
    readonly nmId: number;

    /**
     * ID кампании
     *
     * Формат: `int64`.
     *
     * Пример: `987654321`.
     */
    readonly advertId: number;
  };
};
/**
 * Успешный ответ метода «Рекомендуемые ставки для карточек товаров и поисковых кластеров».
 *
 * 200: Успешно.
 */
export type GetV0BidsRecommendationsResponse =
  | {
      /**
       * ID кампании
       *
       * Формат: `int64`.
       */
      readonly advertId?: number;

      /** Описание отсутствует в OpenAPI WB. */
      readonly base?: {
        /** Описание отсутствует в OpenAPI WB. */
        readonly competitiveBid?: {
          /**
           * Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
           */
          readonly bidKopecks?: number;
        };

        /** Описание отсутствует в OpenAPI WB. */
        readonly leadersBid?: {
          /**
           * Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
           */
          readonly bidKopecks?: number;
        };

        /** Описание отсутствует в OpenAPI WB. */
        readonly top2?: {
          /**
           * Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances). Если `0`, для данного предмета топ-ставка не используется
           */
          readonly bidKopecks?: number;
        };
      };

      /**
       * Артикул WB
       *
       * Формат: `int64`.
       */
      readonly nmId?: number;

      /**
       * Рекомендуемые ставки для поисковых кластеров
       */
      readonly normQueries?: readonly {
        /**
         * Поисковый кластер
         */
        readonly normQuery?: string;

        /** Описание отсутствует в OpenAPI WB. */
        readonly reachMax?: {
          /**
           * Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances).
           */
          readonly bidKopecks?: number;

          /**
           * Минимальная ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances).
           */
          readonly bidKopecksMin?: number;
        };

        /** Описание отсутствует в OpenAPI WB. */
        readonly reachMedium?: {
          /**
           * Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
           */
          readonly bidKopecks?: number;

          /**
           * Минимальная ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
           */
          readonly bidKopecksMin?: number;
        };

        /** Описание отсутствует в OpenAPI WB. */
        readonly reachMin?: {
          /**
           * Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
           */
          readonly bidKopecks?: number;

          /**
           * Минимальная ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
           */
          readonly bidKopecksMin?: number;
        };
      }[];

      /**
       * Тип оплаты:
       *  - `cpm` — за показы
       */
      readonly paymentType?: "cpm";
    }
  | {
      /**
       * ID кампании
       *
       * Формат: `int64`.
       */
      readonly advertId?: number;

      /**
       * Рекомендуемые ставки для карточек товаров
       */
      readonly levels?: readonly {
        /** Описание отсутствует в OpenAPI WB. */
        readonly range1To2: {
          /**
           * Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances).
           */
          readonly bidKopecks?: number;
        };

        /** Описание отсутствует в OpenAPI WB. */
        readonly range3To10: {
          /**
           * Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances).
           */
          readonly bidKopecks?: number;
        };

        /** Описание отсутствует в OpenAPI WB. */
        readonly range11To34: {
          /**
           * Рекомендуемая ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances).
           */
          readonly bidKopecks?: number;
        };
      }[];

      /**
       * Артикул WB
       *
       * Формат: `int64`.
       */
      readonly nmId?: number;

      /**
       * Тип оплаты:
       *  - `cpc` — за клики
       */
      readonly paymentType?: "cpc";
    };
