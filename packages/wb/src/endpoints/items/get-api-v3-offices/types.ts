// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить список складов WB».
 *
 * Метод возвращает список складов WB для привязки к складу продавца при его [создании](/openapi/work-with-products#tag/Sklady-prodavca/paths/~1api~1v3~1warehouses/post) или [редактировании](/openapi/work-with-products#tag/Sklady-prodavca/paths/~1api~1v3~1warehouses~1%7BwarehouseId%7D/put).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов складов продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * GET /api/v3/offices
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetApiV3OfficesInput = undefined;
/**
 * Успешный ответ метода «Получить список складов WB».
 *
 * 200: Успешно.
 */
export type GetApiV3OfficesResponse = readonly {
  /**
   * Адрес
   *
   * Пример: `"ул. Троицкая, Подольск, Московская обл."`.
   */
  readonly address?: string;

  /**
   * Название
   *
   * Пример: `"Коледино"`.
   */
  readonly name?: string;

  /**
   * Город
   *
   * Пример: `"Москва"`.
   */
  readonly city?: string;

  /**
   * ID
   *
   * Формат: `int64`.
   *
   * Пример: `15`.
   */
  readonly id?: number;

  /**
   * Долгота
   *
   * Формат: `float64`.
   *
   * Пример: `55.386871`.
   */
  readonly longitude?: number;

  /**
   * Широта
   *
   * Формат: `float64`.
   *
   * Пример: `37.588898`.
   */
  readonly latitude?: number;

  /**
   * Тип товара, который принимает склад:
   *  - `1` — малогабаритный товар (МГТ)
   *  - `3` — крупногабаритный товар (КГТ+)
   *
   * Пример: `1`.
   */
  readonly cargoType?: 1 | 3;

  /**
   * Тип доставки, который принимает склад:
   *  - `1` — доставка на склад WB (FBS)
   *  - `2` — доставка силами продавца (DBS)
   *  - `3` — доставка курьером WB (DBW)
   *  - `5` — самовывоз (C&C)
   *  - `6` — экспресс-доставка силами продавца (ЕDBS)
   *
   * Пример: `1`.
   */
  readonly deliveryType?: 1 | 2 | 3 | 5 | 6;

  /**
   * Федеральный округ склада WB. Если `null`, склад находится за пределами РФ или федеральный округ не указан
   *
   * Пример: `"Центральный"`.
   */
  readonly federalDistrict?: string | null;

  /**
   * Признак того, что склад уже выбран продавцом
   */
  readonly selected?: boolean;
}[];
