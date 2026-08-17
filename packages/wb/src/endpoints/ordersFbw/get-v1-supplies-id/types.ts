// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Детали поставки».
 *
 * Метод возвращает детали поставки по ID.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 30 запросов | 2 сек | 10 запросов |
 * | Сервисный | 1 мин | 30 запросов | 2 сек | 10 запросов |
 * | Базовый с секретом | 1 мин | 30 запросов | 2 сек | 10 запросов |
 * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
 *
 * GET /api/v1/supplies/{ID}
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbw
 */
export type GetV1SuppliesIdInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID поставки или заказа
     */
    readonly ID: number;
  } /**
   * Параметры строки запроса.
   */;
  readonly query?: {
    /**
     * Поиск по:
     *  - `true` — ID заказа, если в `ID` передаёте ID заказа
     *  - `false` — ID поставки, если в `ID` передаёте ID поставки
     *
     * Значение по умолчанию: `false`.
     */
    readonly isPreorderID?: boolean;
  };
};
/**
 * Успешный ответ метода «Детали поставки».
 *
 * 200: Успешно.
 */
export type GetV1SuppliesIdResponse = {
  /**
   * Телефон пользователя, создавшего поставку
   */
  readonly phone?: string;

  /**
   * ID статуса поставки:
   *  - `1` — Не запланировано
   *  - `2` — Запланировано
   *  - `3` — Отгрузка разрешена
   *  - `4` — Идёт приёмка
   *  - `5` — Принято
   *  - `6` — Отгружено на воротах
   */
  readonly statusID?: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * ID типа виртуальной поставки. Отображается только для поставок с `"boxTypeID":0`.
   *  - `0` — Перенос остатков
   *  - `1` — Обезличка
   *  - `4` — QR-поставка
   *  - `5` — Допринято
   *  - `6` — Скан-приёмка
   */
  readonly virtualTypeID?: number;

  /**
   * ID типа поставки:
   *  - `0` — Без коробов (виртуальная поставка)
   *  - `1` и `2` — Короба
   *  - `5` — Монопаллеты
   *  - `6` — Суперсейф
   */
  readonly boxTypeID?: number;

  /**
   * Дата и время создания поставки
   */
  readonly createDate?: string;

  /**
   * Плановая дата отгрузки поставки
   */
  readonly supplyDate?: string | null;

  /**
   * Дата фактической отгрузки поставки
   */
  readonly factDate?: string | null;

  /**
   * Дата изменения поставки
   */
  readonly updatedDate?: string | null;

  /**
   * ID склада, на который планируется поставка
   */
  readonly warehouseID?: number;

  /**
   * Название склада, на который планируется поставка
   */
  readonly warehouseName?: string;

  /**
   * ID склада, на который поставка была привезена
   */
  readonly actualWarehouseID?: number | null;

  /**
   * Название склада, на который поставка привезена
   */
  readonly actualWarehouseName?: string;

  /**
   * ID транзитного склада
   */
  readonly transitWarehouseID?: number | null;

  /**
   * Название транзитного склада
   */
  readonly transitWarehouseName?: string;

  /**
   * Предварительная стоимость приёмки, ₽
   */
  readonly acceptanceCost?: number | null;

  /**
   * Коэффициент приёмки
   */
  readonly paidAcceptanceCoefficient?: number | null;

  /**
   * Причина, по которой поставка не может быть принята
   */
  readonly rejectReason?: string | null;

  /**
   * Краткое название продавца
   */
  readonly supplierAssignName?: string | null;

  /**
   * Коэффициент хранения
   */
  readonly storageCoef?: string | null;

  /**
   * Коэффициент логистики
   */
  readonly deliveryCoef?: string | null;

  /**
   * Добавлено в поставку/заказ, шт
   */
  readonly quantity?: number;

  /**
   * Поступило в продажу, шт
   */
  readonly readyForSaleQuantity?: number;

  /**
   * Принято, шт
   */
  readonly acceptedQuantity?: number;

  /**
   * Количество товара, находящегося на раскладке, шт
   */
  readonly unloadingQuantity?: number;

  /**
   * Количество обезличенного товара, шт
   */
  readonly depersonalizedQuantity?: number | null;

  /**
   * Тип поставки — **Поштучная палета**:
   *  - `true` — да
   *  - `false` — нет
   *
   *  Поле возвращается только при `"boxTypeID": 2`
   */
  readonly isBoxOnPallet?: boolean;
};
