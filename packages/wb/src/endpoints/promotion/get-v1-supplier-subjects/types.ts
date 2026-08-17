// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Предметы для кампаний».
 *
 * Метод возвращает список [предметов](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1all/get), которые можно добавить в рекламную [кампанию](/openapi/promotion#tag/campaigns/operation/getV2Adverts).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 12 сек | 1 запрос | 12 сек | 5 запросов |
 * | Сервисный | 12 сек | 1 запрос | 12 сек | 5 запросов |
 * | Базовый с секретом | 12 сек | 1 запрос | 12 сек | 5 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * GET /adv/v1/supplier/subjects
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/promotion
 */
export type GetV1SupplierSubjectsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Тип оплаты:
     * - `cpm` — за показы
     * - `cpc` — за клик
     *
     * Значение по умолчанию: `"cpm"`.
     */
    readonly payment_type?: string;
  };
};
/**
 * Успешный ответ метода «Предметы для кампаний».
 *
 * 200: Успешно.
 */
export type GetV1SupplierSubjectsResponse =
  | readonly {
      /**
       * ID предмета
       */
      readonly id?: number;

      /**
       * Предмет
       */
      readonly name?: string;

      /**
       * Количество Артикулов WB (`nmId`) с таким предметом.
       */
      readonly count?: number;
    }[]
  | null;
