// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Списки кампаний».
 *
 * Метод возвращает списки всех [рекламных кампаний](/openapi/promotion#tag/campaigns/operation/getV2Adverts) продавца с их ID. Кампании сгруппированы по типу и статусу, у каждой указана дата последнего изменения.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
 * | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
 * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
 * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
 *
 * GET /adv/v1/promotion/count
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV1PromotionCountInput = undefined;
/**
 * Успешный ответ метода «Списки кампаний».
 *
 * 200: Успешно.
 */
export type GetV1PromotionCountResponse = {
  /**
   * Данные по кампаниям
   */
  readonly adverts?:
    | readonly {
        /**
         * Тип кампании:
         *  - `8` — кампания с единой ставкой (**устаревший тип**)
         *  - `9` — кампания с единой или ручной ставкой. Тип ставки вы можете получить с помощью метода [Информация о кампаниях](./promotion#tag/campaigns/operation/getV2Adverts), поле `bid_type`
         */
        readonly type?: number;

        /**
         * Статус кампании
         */
        readonly status?: number;

        /**
         * Количество кампаний
         */
        readonly count?: number;

        /**
         * Список кампаний
         */
        readonly advert_list?: readonly {
          /**
           * ID кампании
           */
          readonly advertId?: number;

          /**
           * Дата и время последнего изменения кампании
           *
           * Формат: `date-time`.
           */
          readonly changeTime?: string;
        }[];
      }[]
    | null;

  /**
   * Общее количество кампаний всех статусов и типов
   */
  readonly all?: number;
};
