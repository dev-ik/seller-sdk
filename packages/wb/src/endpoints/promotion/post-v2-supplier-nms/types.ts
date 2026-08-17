// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Карточки товаров для кампаний».
 *
 * Метод возвращает список [карточек товаров](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1list/post), которые можно добавить в рекламную [кампанию](/openapi/promotion#tag/campaigns/operation/getV2Adverts). Для получения карточек необходимы ID [предметов](/openapi/promotion#tag/creatingCampaigns/operation/getV1SupplierSubjects), также доступных для добавления в кампанию.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 5 запросов | 12 сек | 5 запросов |
 * | Сервисный | 1 мин | 5 запросов | 12 сек | 5 запросов |
 * | Базовый с секретом | 1 мин | 5 запросов | 12 сек | 5 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * POST /adv/v2/supplier/nms
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type PostV2SupplierNmsInput = {
  /**
   * ID предметов, для которых нужно получить карточки товаров
   */
  readonly body?: readonly number[];
};
/**
 * Успешный ответ метода «Карточки товаров для кампаний».
 *
 * 200: Успешно.
 */
export type PostV2SupplierNmsResponse =
  | readonly {
      /**
       * Название товара
       *
       * Пример: `"Плед"`.
       */
      readonly title?: string;

      /**
       * Артикул WB
       *
       * Пример: `146168367`.
       */
      readonly nm?: number;

      /**
       * ID предмета
       *
       * Пример: `765`.
       */
      readonly subjectId?: number;
    }[]
  | null;
