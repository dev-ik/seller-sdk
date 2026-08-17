// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить отчёт».
 *
 * Метод возвращает отчёт с [операциями по товарам с обязательной маркировкой](https://seller.wildberries.ru/analytics-reports/excise-report).
 *
 * Данный отчёт можно сохранить в [формате таблиц](/knowledge-base/articles/019d49a4-650c-7b04-9596-ba441936f9d3).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 5 ч | 10 запросов | 30 мин | 10 запросов |
 * | Сервисный | 5 ч | 10 запросов | 30 мин | 10 запросов |
 * | Базовый с секретом | 5 ч | 10 запросов | 30 мин | 10 запросов |
 * | Базовый | 24 ч | 2 запроса | 12 ч | 1 запрос |
 *
 * POST /api/v1/analytics/excise-report
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/reports
 */
export type PostV1AnalyticsExciseReportInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Начало отчётного периода, `ГГГГ-ММ-ДД`
     *
     * Пример: `"2025-02-28"`.
     */
    readonly dateFrom: string;

    /**
     * Конец отчётного периода, `ГГГГ-ММ-ДД`
     *
     * Пример: `"2025-03-21"`.
     */
    readonly dateTo: string;
  } /**
   * Тело запроса.
   */;
  readonly body?: {
    /**
     * Код стран по стандарту ISO 3166-2. Чтобы получить данные по всем странам, оставьте параметр пустым
     */
    readonly countries?: readonly ("AM" | "BY" | "KG" | "KZ" | "RU" | "UZ")[];
  };
};
/**
 * Успешный ответ метода «Получить отчёт».
 *
 * 200: Успешно.
 */
export type PostV1AnalyticsExciseReportResponse = {
  /** Описание отсутствует в OpenAPI WB. */
  readonly response?: {
    /** Описание отсутствует в OpenAPI WB. */
    readonly data?: readonly {
      /**
       * Страна покупателя
       *
       * Пример: `"Россия"`.
       */
      readonly name?: string;

      /**
       * Цена товара, с НДС
       *
       * Пример: `100`.
       */
      readonly price?: number;

      /**
       * Валюта
       *
       * Пример: `"руб"`.
       */
      readonly currency_name_short?: string;

      /**
       * Код маркировки
       *
       * Пример: `"0102900254680370215_Re/=lSbNiGD"`.
       */
      readonly excise_short?: string;

      /**
       * Баркод
       *
       * Пример: `"2038893425820"`.
       */
      readonly barcode?: string;

      /**
       * Артикул WB
       *
       * Пример: `169085355`.
       */
      readonly nm_id?: number;

      /**
       * Тип операции, если есть:
       *
       *  * `1` — вывод из оборота
       *  * `2` — возврат в оборот
       *
       * Пример: `1`.
       */
      readonly operation_type_id?: number;

      /**
       * Номер фискального документа (чека полного расчёта), если есть
       *
       * Пример: `12345678`.
       */
      readonly fiscal_doc_number?: number;

      /**
       * Дата фискализации (дата в чеке), если есть, `ГГГГ-ММ-ДД`
       *
       * Пример: `"2024-01-01"`.
       */
      readonly fiscal_dt?: string;

      /**
       * Номер фискального накопителя, если есть
       */
      readonly fiscal_drive_number?: string;

      /**
       * `Rid`
       *
       * Пример: `606217433440`.
       */
      readonly rid?: number;

      /**
       * `Srid`
       *
       * Пример: `"7513432034713632943.1.0"`.
       */
      readonly srid?: string;
    }[];
  };
};
