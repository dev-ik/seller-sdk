// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Установить ставки для поисковых кластеров в валюте аккаунта продавца».
 *
 * Метод устанавливает ставки на поисковые кластеры в валюте [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances).
 * Можно использовать только для кампаний c ручной ставкой и моделью оплаты `cpm` — за показы.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 2 запроса | 500 мс | 4 запроса |
 * | Сервисный | 1 сек | 2 запроса | 500 мс | 4 запроса |
 *
 *  Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену,
 *  Сервисному токену
 *
 * POST /api/advert/v1/normquery/bids
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PostV1NormqueryBidsInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Максимальное количество элементов: 100.
     */
    readonly bids: readonly {
      /**
       * ID кампании
       */
      readonly advertId: number;

      /**
       * Артикул WB
       */
      readonly nmId: number;

      /**
       * Поисковый кластер
       */
      readonly normQuery: string;

      /**
       * Ставка в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances).
       * Допустимый шаг ставки указан в ответе метода [GET /api/advert/v1/config](./promotion#tag/campaignManagement/operation/getV1Config)
       */
      readonly bidMinorUnits: number;
    }[];
  };
};
/**
 * Успешный ответ метода «Установить ставки для поисковых кластеров в валюте аккаунта продавца».
 *
 * 200: Успешно.
 */
export type PostV1NormqueryBidsResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly success: readonly {
    /**
     * ID кампании
     */
    readonly advertId: number;

    /**
     * Артикул WB
     */
    readonly nmId: number;

    /**
     * Поисковый кластер — это группа похожих поисковых запросов, по которым покупатели находят товары
     */
    readonly normQuery: string;

    /**
     * Валюта [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances)
     *
     * Формат: `ISO 4217`.
     */
    readonly currency: string;
  }[];

  /** Описание отсутствует в OpenAPI WB. */
  readonly failed: readonly {
    /**
     * ID кампании
     */
    readonly advertId: number;

    /**
     * Артикул WB
     */
    readonly nmId: number;

    /**
     * Поисковый кластер — это группа похожих поисковых запросов, по которым покупатели находят товары
     */
    readonly normQuery: string;

    /**
     * Описание причины ошибки
     */
    readonly reason: string;
  }[];
};
