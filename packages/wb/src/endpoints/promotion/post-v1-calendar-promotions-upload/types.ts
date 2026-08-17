// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Добавить товар в акцию».
 *
 * Метод создаёт задание на загрузку товара в [акцию](/openapi/promotion#tag/promoCalendar/operation/getV1CalendarPromotionsDetails).
 *
 * Состояние загрузки можно проверить с помощью [отдельных методов](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1tasks/get).
 *
 *  Данный метод неприменим для автоакций.
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
 * POST /api/v1/calendar/promotions/upload
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PostV1CalendarPromotionsUploadInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Данные запроса
     */
    readonly data?: {
      /**
       * ID акции
       *
       * Пример: `1`.
       *
       * Минимальное значение: 1.
       */
      readonly promotionID?: number;

      /**
       * Установить скидку:
       *  - `true` — сейчас
       *  - `false` — в момент старта акции
       *
       * Пример: `true`.
       */
      readonly uploadNow?: boolean;

      /**
       * Артикулы WB, которые можно добавить в акцию
       *
       * Пример: `[75632091,31322455,642080796]`.
       *
       * Минимальное количество элементов: 1.
       *
       * Максимальное количество элементов: 1000.
       */
      readonly nomenclatures?: readonly number[];
    };
  };
};
/**
 * Успешный ответ метода «Добавить товар в акцию».
 *
 * 200: Успешно.
 */
export type PostV1CalendarPromotionsUploadResponse = {
  /**
   * Данные ответа
   */
  readonly data?: {
    /**
     * Загрузка с такими данными уже существует
     *
     * Пример: `false`.
     */
    readonly alreadyExists?: boolean;

    /**
     * ID загрузки
     *
     * Пример: `11`.
     */
    readonly uploadID?: number;
  };
};
