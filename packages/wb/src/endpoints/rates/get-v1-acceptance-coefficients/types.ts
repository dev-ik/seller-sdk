// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Тарифы на поставку».
 *
 * Метод возвращает [тарифы на поставку](https://seller.wildberries.ru/dynamic-product-categories) для конкретных складов на ближайшие 14 дней.
 *
 *  Приёмка для поставки доступна только при сочетании:
 *  coefficient — 0 или 1
 *  и allowUnload — true
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 6 запросов | 10 сек | 6 запросов |
 * | Сервисный | 1 мин | 6 запросов | 10 сек | 6 запросов |
 * | Базовый с секретом | 1 мин | 6 запросов | 10 сек | 6 запросов |
 * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
 *
 * GET /api/tariffs/v1/acceptance/coefficients
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/rates
 */
export type GetV1AcceptanceCoefficientsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * ID складов.
     * По умолчанию возвращаются данные по всем складам
     *
     * Пример: `"507,117501"`.
     */
    readonly warehouseIDs?: string;
  };
};
/**
 * Успешный ответ метода «Тарифы на поставку».
 *
 * 200: Успешно.
 */
export type GetV1AcceptanceCoefficientsResponse = readonly {
  /**
   * Дата начала действия коэффициента
   */
  readonly date?: string;

  /**
   * Коэффициент приёмки:
   *  - `-1` — приёмка недоступна, вне зависимости от значения поля `allowUnload`
   *  - `0` — бесплатная приёмка
   *  - от `1` — множитель стоимости приёмки
   */
  readonly coefficient?: number;

  /**
   * ID склада. По нему можно получить [информацию о складе](./orders-fbw#tag/informationForFormingSupplies/operation/getV1Warehouses)
   */
  readonly warehouseID?: number;

  /**
   * Название склада
   */
  readonly warehouseName?: string;

  /**
   * Доступность приёмки для поставок данного типа, смотри значение поля `boxTypeID`:
   *
   *  - `true` — приёмка доступна
   *  - `false` — приёмка не доступна
   */
  readonly allowUnload?: boolean;

  /**
   * ID типа поставки:
   *  - `2` — Короба
   *  - `5` — Монопаллеты
   *  - `6` — Суперсейф
   *
   * Для типа поставки **QR-поставка с коробами** поле не возвращается
   */
  readonly boxTypeID?: number;

  /**
   * Коэффициент хранения
   */
  readonly storageCoef?: string | null;

  /**
   * Коэффициент логистики
   */
  readonly deliveryCoef?: string | null;

  /**
   * Стоимость логистики первого литра
   */
  readonly deliveryBaseLiter?: string | null;

  /**
   * Стоимость логистики каждого следующего литра
   */
  readonly deliveryAdditionalLiter?: string | null;

  /**
   * Стоимость хранения:
   *  - для паллет — стоимость за одну паллету
   *  - для коробов — стоимость хранения за первый литр
   */
  readonly storageBaseLiter?: string | null;

  /**
   * Стоимость хранения каждого последующего литра:
   *  - для паллет — всегда будет `null`, т.к. стоимость хранения за единицу паллеты определяется в `StorageBaseLiter`
   *  - для коробов — стоимость хранения за каждый последующий литр
   */
  readonly storageAdditionalLiter?: string | null;

  /**
   * Тип склада:
   *
   *  - `true` — сортировочный центр (СЦ)
   *  - `false` — обычный
   */
  readonly isSortingCenter?: boolean;
}[];
