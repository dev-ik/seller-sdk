// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Детализации к отчётам об издержках на приём платежей за период».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену,
 *  Сервисному токену
 *
 * Метод возвращает детализации к [отчётам об издержках на приём платежей](https://seller.wildberries.ru/suppliers-mutual-settlements/reports-implementations/acquiring-reports) за указанный период.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 1 запрос | 1 мин | 1 запрос |
 *
 * POST /api/finance/v1/acquiring/detailed
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/finances
 */
export type PostV1AcquiringDetailedInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Начальная дата отчёта.
     * Можно передать дату или дату со временем. Время можно указывать с точностью до секунд или миллисекунд.
     * Дата передаётся в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339), время — в часовом поясе Москва `UTC+3`.
     * Примеры:
     *  - `2025-06-20`
     *  - `2025-06-20T23:59:59`
     *  - `2025-06-20T00:00:00.12345`
     *  - `2025-06-20T00:00:00`
     *
     * Пример: `"2026-03-17"`.
     */
    readonly dateFrom: string;

    /**
     * Конечная дата отчёта.
     * Дата в формате [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339). Можно передать дату или дату со временем. Время можно указывать с точностью до секунд или миллисекунд.
     * Время передаётся в часовом поясе Москва `UTC+3`.
     * Примеры:
     *  - `2025-06-20`
     *  - `2025-06-20T23:59:59`
     *  - `2025-06-20T00:00:00.12345`
     *  - `2025-06-20T00:00:00`
     *
     * Пример: `"2026-03-20"`.
     */
    readonly dateTo: string;

    /**
     * Количество строк в ответе
     *
     * Пример: `21100`.
     *
     * Значение по умолчанию: `100000`.
     *
     * Максимальное значение: 100000.
     */
    readonly limit?: number;

    /**
     * ID строки ответа. Необходим для получения отчёта частями.
     * Начинайте загрузку отчёта с `"rrdid":0`. В последующих запросах передавайте значение `rrdId` из последней строки предыдущего ответа.
     * Повторяйте запрос, пока не получите ответ `204`
     *
     * Значение по умолчанию: `0`.
     */
    readonly rrdId?: number;

    /**
     * Список полей, которые вернутся в ответе. Если параметр не указан, возвращаются все поля
     *
     * Пример: `["rrdId","nmId","docTypeName","retailAmount","acquiringFee","srid"]`.
     */
    readonly fields?: readonly string[];
  };
};
/**
 * Успешный ответ метода «Детализации к отчётам об издержках на приём платежей за период».
 *
 * 200: Успешно.
 *
 * 204: Нет данных.
 */
export type PostV1AcquiringDetailedResponse =
  | readonly {
      /**
       * ID строки
       *
       * Пример: `1232610467`.
       */
      readonly rrdId: number;

      /**
       * ID отчёта
       *
       * Формат: `int64`.
       *
       * Пример: `1234567`.
       */
      readonly reportId: number;

      /**
       * Дата операции
       *
       * Пример: `"2026-03-21"`.
       */
      readonly acqDate: string;

      /**
       * Наименование банка-эквайера
       *
       * Пример: `"Тинькофф"`.
       */
      readonly acquiringBank: string;

      /**
       * ИНН
       *
       * Пример: `"010101010101"`.
       */
      readonly tin: string;

      /**
       * КПП
       *
       * Пример: `"7701123301"`.
       */
      readonly taxRegistrationReasonCode: string;

      /**
       * Дата продажи
       *
       * Пример: `"2026-03-21"`.
       */
      readonly saleDate: string;

      /**
       * ID заказа.
       * В ответах методов сборочных заданий [FBS](./orders-fbs#tag/Sborochnye-zadaniya-FBS), [DBW](./orders-dbw#tag/dbwAssemblyOrders), [DBS](./orders-dbs#tag/dbsAssemblyOrders) и [Самовывоз](./in-store-pickup#tag/inStorePickupAssemblyOrders) `srid` равен `rid`
       *
       * Пример: `"D0.r3f80c3eec6f845c6840128b4c19986f9.0.0"`.
       */
      readonly srid: string;

      /**
       * Тип документа
       *
       * Пример: `"Продажа"`.
       */
      readonly docTypeName: string;

      /**
       * Артикул WB
       *
       * Пример: `1234567`.
       */
      readonly nmId: number;

      /**
       * Вайлдберриз реализовал Товар (Пр)
       *
       * Пример: `"367"`.
       */
      readonly retailAmount: string;

      /**
       * Размер комиссии за эквайринг, в том числе НДС
       *
       * Пример: `"14.89"`.
       */
      readonly acquiringFee: string;

      /**
       * Сумма НДС
       *
       * Пример: `"4.06"`.
       */
      readonly acquiringFeeVat: string;

      /**
       * Номер счёта-фактуры
       *
       * Пример: `"С/Ф 123"`.
       */
      readonly invoiceNumber: string;

      /**
       * Дата счёта-фактуры
       *
       * Пример: `"2026-03-20"`.
       */
      readonly invoiceDate: string;

      /**
       * Штрихкод
       *
       * Пример: `1239159661`.
       */
      readonly shkId: number;

      /**
       * Валюта отчёта
       *
       * Пример: `"RUB"`.
       */
      readonly currency: string;
    }[]
  | undefined;
