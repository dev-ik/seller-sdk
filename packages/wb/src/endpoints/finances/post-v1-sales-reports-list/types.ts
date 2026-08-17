// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Список отчётов реализации».
 *
 * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Персональному токену,
 *  Сервисному токену
 *
 * Метод возвращает список отчётов релизации по формату [таблицы отчётов](https://seller.wildberries.ru/suppliers-mutual-settlements).
 *
 * Данные доступны с 1 января 2025 года.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 1 запрос | 1 мин | 1 запрос |
 *
 * POST /api/finance/v1/sales-reports/list
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/finances
 */
export type PostV1SalesReportsListInput = {
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
     * Количество отчётов в ответе
     *
     * Пример: `211`.
     *
     * Значение по умолчанию: `1000`.
     *
     * Максимальное значение: 1000.
     */
    readonly limit?: number;

    /**
     * Сколько элементов пропустить. Например, для значения `10` ответ начнётся с 11 элемента
     *
     * Пример: `345`.
     *
     * Значение по умолчанию: `0`.
     */
    readonly offset?: number;

    /**
     * Периодичность отчётов:
     *  - `weekly` — еженедельные
     *  - `daily` — ежедневные
     *
     * Пример: `"daily"`.
     *
     * Значение по умолчанию: `"weekly"`.
     */
    readonly period?: "daily" | "weekly";
  };
};
/**
 * Успешный ответ метода «Список отчётов реализации».
 *
 * 200: Успешно.
 *
 * 204: Нет данных.
 */
export type PostV1SalesReportsListResponse =
  | readonly {
      /**
       * ID отчёта
       *
       * Формат: `int64`.
       *
       * Пример: `307401554`.
       */
      readonly reportId: number;

      /**
       * Наименование продавца
       *
       * Пример: `"ИП Кружинин В. Р."`.
       */
      readonly sellerFinanceName: string;

      /**
       * Дата начала отчётного периода
       *
       * Формат: `date`.
       *
       * Пример: `"2026-03-16"`.
       */
      readonly dateFrom: string;

      /**
       * Дата конца отчётного периода
       *
       * Формат: `date`.
       *
       * Пример: `"2026-03-22"`.
       */
      readonly dateTo: string;

      /**
       * Дата формирования отчёта
       *
       * Формат: `date`.
       *
       * Пример: `"2026-03-23"`.
       */
      readonly createDate: string;

      /**
       * Валюта отчёта
       *
       * Пример: `"RUB"`.
       */
      readonly currency: string;

      /**
       * Тип отчёта:
       *  - `1` — основной
       *  - `2` — по выкупам
       *  - `3` — по выкупам для Грузии
       *
       * Пример: `1`.
       */
      readonly reportType: 1 | 2 | 3;

      /**
       * Продажа
       *
       * Пример: `"258"`.
       */
      readonly retailAmountSum: string;

      /**
       * К перечислению за товар
       *
       * Пример: `"183.79"`.
       */
      readonly forPaySum: string;

      /**
       * Согласованная скидка, %
       *
       * Пример: `0`.
       */
      readonly avgSalePercent: number;

      /**
       * Стоимость логистики
       *
       * Пример: `"2558.47"`.
       */
      readonly deliveryServiceSum: string;

      /**
       * Стоимость хранения
       *
       * Пример: `"626.84"`.
       */
      readonly paidStorageSum: string;

      /**
       * Стоимость операций при приёмке
       *
       * Пример: `"243.81"`.
       */
      readonly paidAcceptanceSum: string;

      /**
       * Прочие удержания и выплаты
       *
       * Пример: `"150"`.
       */
      readonly deductionSum: string;

      /**
       * Общая сумма штрафов
       *
       * Пример: `"1457.61"`.
       */
      readonly penaltySum: string;

      /**
       * Корректировка Вознаграждения Вайлдберриз (ВВ)
       *
       * Пример: `"9509.71"`.
       */
      readonly additionalPaymentSum: string;

      /**
       * Сумма, удержанная за начисленные баллы программы лояльности
       *
       * Пример: `"2"`.
       */
      readonly cashbackAmountSum: string;

      /**
       * Компенсация скидки по программе лояльности
       *
       * Пример: `"19"`.
       */
      readonly cashbackDiscountSum: string;

      /**
       * Стоимость участия в программе лояльности
       *
       * Пример: `"0.2"`.
       */
      readonly cashbackCommissionChangeSum: string;

      /**
       * Разовое изменение срока перечисления денежных средств
       *
       * Пример: `"-1"`.
       */
      readonly paymentSchedule: string;

      /**
       * Итого к оплате
       *
       * Пример: `"5172.94"`.
       */
      readonly bankPaymentSum: string;
    }[]
  | undefined;
