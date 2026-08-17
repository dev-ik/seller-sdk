// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить информацию об опциях Конструктора тарифов».
 *
 * Информацию об опциях Конструктора тарифов можно получить с токеном любой категории (/openapi/api-information#tag/authorization/Kategorii-tokenov)
 *
 *  Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
 *  Сервисному токену
 *
 * Метод возвращает информацию обо всех опциях и пакетах опций, которые продавец подключил в [Конструкторе тарифов](https://seller.wildberries.ru/tariff-constructor).
 *
 * Опции, входящие в подключённые пакеты, возвращаются в массиве `packages`. Опции, подключённые вне пакетов, возвращаются в массиве `options`.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 1 запрос | 1 мин | 10 запросов |
 *
 * GET /api/common/v1/tariff-constructor/options
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/api-information
 */
export type GetV1TariffConstructorOptionsInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Язык полей ответа:
     *  - `ru` — русский
     *  - `en` — английский
     *
     * Пример: `"ru"`.
     *
     * Значение по умолчанию: `"ru"`.
     */
    readonly locale?: "ru" | "en";
  };
};
/**
 * Успешный ответ метода «Получить информацию об опциях Конструктора тарифов».
 *
 * 200: Успешно.
 */
export type GetV1TariffConstructorOptionsResponse = {
  /**
   * Количество активных опций, не включённых в пакеты
   *
   * Формат: `int`.
   *
   * Пример: `5`.
   */
  readonly activeOptionCount: number;

  /**
   * Количество активных пакетов опций
   *
   * Формат: `int`.
   *
   * Пример: `2`.
   */
  readonly activePackageCount: number;

  /**
   * Итоговая комиссия за подключённые опции и пакеты, % от оборота
   *
   * Формат: `float`.
   *
   * Пример: `4.6`.
   */
  readonly totalCommissionRate: number;

  /**
   * Подключённые пакеты опций
   */
  readonly packages: readonly {
    /**
     * ID пакета
     *
     * Формат: `uuid`.
     *
     * Пример: `"79861ed4-ccfd-4998-96a9-c90f8bf98bb9"`.
     */
    readonly id?: string;

    /**
     * Код пакета
     *
     * Пример: `"superSeller"`.
     */
    readonly slug?: string;

    /**
     * Название пакета на языке из параметра `locale`
     *
     * Пример: `"Суперпродавец"`.
     */
    readonly name?: string;

    /**
     * Статус пакета:
     *  - `active` — активен
     *  - `pendingActivation` — подключён, начнёт работать с 00:00 следующего дня
     *  - `pendingDeactivation` — отключён, перестанет работать с 00:00 следующего дня
     *
     * Пример: `"active"`.
     */
    readonly status?: "active" | "pendingActivation" | "pendingDeactivation";

    /**
     * Дата активации пакета
     *
     * Формат: `date-time`.
     *
     * Пример: `"2006-01-02T15:04:05.999+03:00"`.
     */
    readonly activatedAt?: string;

    /**
     * Дата окончания минимального срока действия пакета. До этого дня пакет опций нельзя отключить
     *
     * Формат: `date-time`.
     *
     * Пример: `"2006-01-02T15:04:05.999+03:00"`.
     */
    readonly expiresAt?: string;

    /**
     * Комиссия за пакет, % от оборота
     *
     * Формат: `float`.
     *
     * Пример: `2.5`.
     */
    readonly commissionRate?: number;

    /**
     * Минимальный срок действия пакета в днях
     *
     * Формат: `int`.
     *
     * Пример: `90`.
     */
    readonly periodDuration?: number;

    /**
     * Опции, которые входят в пакет
     */
    readonly options?: readonly {
      /**
       * ID опции
       *
       * Пример: `"4f134ae7-f768-481e-bac1-bf75d2fdc6f7"`.
       */
      readonly id?: string;

      /**
       * Код опции
       *
       * Пример: `"pinReview"`.
       */
      readonly slug?: string;

      /**
       * Название опции на языке из параметра `locale`
       *
       * Пример: `"Закрепление отзывов и видео"`.
       */
      readonly name?: string;
    }[];
  }[];

  /**
   * Подключённые опции
   */
  readonly options: readonly {
    /**
     * ID опции
     *
     * Пример: `"4f134ae7-f768-481e-bac1-bf75d2fdc6f7"`.
     */
    readonly id?: string;

    /**
     * Код опции
     *
     * Пример: `"pinReview"`.
     */
    readonly slug?: string;

    /**
     * Название опции на языке из параметра `locale`
     *
     * Пример: `"Закрепление отзывов и видео из Wibes"`.
     */
    readonly name?: string;

    /**
     * Статус опции:
     *  - `active` — активна
     *  - `pendingActivation` — подключена, начнёт работать с 00:00 следующего дня
     *  - `pendingDeactivation` — отключена, перестанет работать с 00:00 следующего дня
     *
     * Пример: `"active"`.
     */
    readonly status?: "active" | "pendingActivation" | "pendingDeactivation";

    /**
     * Дата активации опции
     *
     * Формат: `date-time`.
     *
     * Пример: `"2006-01-02T15:04:05.999+03:00"`.
     */
    readonly activatedAt?: string;

    /**
     * Дата окончания минимального срока действия опции. До этого дня опцию нельзя отключить
     *
     * Формат: `date-time`.
     *
     * Пример: `"2006-01-02T15:04:05.999+03:00"`.
     */
    readonly expiresAt?: string;

    /**
     * Стоимость подключения опции, % от оборота. Возвращается, если в ответе нет объекта `promotion`
     *
     * Формат: `float`.
     *
     * Пример: `2.1`.
     */
    readonly commissionRate?: number;

    /**
     * Минимальный срок действия опции в днях
     *
     * Формат: `int`.
     *
     * Пример: `90`.
     */
    readonly periodDuration?: number;

    /** Описание отсутствует в OpenAPI WB. */
    readonly promotion?: {
      /**
       * Стоимость подключения опции по акции, % от оборота
       *
       * Формат: `float`.
       *
       * Пример: `0.3`.
       */
      readonly commissionRate?: number;

      /**
       * Дата окончания действия цены по акции
       *
       * Формат: `date-time`.
       *
       * Пример: `"2006-01-02T15:04:05.999+03:00"`.
       */
      readonly expiresAt?: string;
    };
  }[];
};
